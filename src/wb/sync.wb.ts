import * as fs from 'fs';
import * as path from 'path';

// Interfaces para leer Postman
interface PostmanItem {
  name: string;
  request?: { 
    method?: string;
    url?: { raw?: string } | string;
    body?: { 
      mode?: string;
      raw?: string;
      formdata?: { key: string; type: string; value?: string; src?: string }[];
    };
  };
  response?: any[];
  item?: PostmanItem[];
}

const inputPath = path.join(process.cwd(), 'src', 'wb', 'json', 'whatsapp_cloud_api.json');
const outputDir = path.join(process.cwd(), 'src', 'wb', 'messages');
const finalTsPath = path.join(outputDir, 'whatsapp-cloud-api.ts');

// Helper: Convierte "Send Text Message" a "sendTextMessage"
function toCamelCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
    .replace(/[^a-zA-Z0-9]/g, '');
}

// Helper: Infiere los tipos (Ahora usando 'unknown' en vez de 'any' para máxima rigurosidad)
function inferType(value: any, key: string, indent: string = "  "): string {
  if (typeof value === 'string') {
    if (['messaging_product', 'type', 'recipient_type'].includes(key)) return `"${value}"`;
    return 'string';
  }
  if (typeof value === 'boolean') return 'boolean';
  if (typeof value === 'number') return 'number';
  if (Array.isArray(value)) {
    return value.length ? `Array<${inferType(value[0], '', indent)}>` : 'unknown[]';
  }
  if (typeof value === 'object' && value !== null) {
    const props = Object.entries(value).map(([k, v]) => {
      const safeKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : `"${k}"`;
      return `${indent}  ${safeKey}: ${inferType(v, k, indent + "  ")};`;
    });
    return `{\n${props.join('\n')}\n${indent}}`;
  }
  return 'unknown';
}

// Función recursiva para extraer todas las peticiones
function extractRequests(items: PostmanItem[], allRequests: PostmanItem[] = []) {
  items.forEach(item => {
    if (item.request) allRequests.push(item);
    if (item.item) extractRequests(item.item, allRequests);
  });
  return allRequests;
}

try {
  const fileData = fs.readFileSync(inputPath, 'utf8');
  const collection = JSON.parse(fileData);
  
  const allRequests = extractRequests(collection.item);

  let outputCode = `// =====================================================================\n`;
  outputCode += `// 🚀 SDK GENERADO AUTOMÁTICAMENTE PARA WHATSAPP CLOUD API\n`;
  outputCode += `// =====================================================================\n\n`;

  outputCode += `export interface WhatsAppConfig {\n`;
  outputCode += `  accessToken: string;\n`;
  outputCode += `  phoneNumberId: string;\n`;
  outputCode += `  wabaId?: string;\n`;
  outputCode += `  version?: string;\n`;
  outputCode += `}\n\n`;

  outputCode += `export interface WbMetadata {\n`;
  outputCode += `  _sent?: boolean;\n`;
  outputCode += `  _node?: string;\n`;
  outputCode += `  _tool?: string;\n`;
  outputCode += `  _timestamp?: number;\n`;
  outputCode += `}\n\n`;

  let interfacesCode = '';
  let classMethodsCode = '';
  
  // 🛡️ Magia 1: Evitar clones
  const processedMethods = new Set<string>();
  
  // 🛡️ Magia 2: Recolectar todos los nombres de Payloads
  const payloadNames: string[] = []; 

  allRequests.forEach((req) => {
    const method = req.request?.method || 'GET';
    const rawUrl = typeof req.request?.url === 'string' ? req.request.url : req.request?.url?.raw || '';
    
    // Solo procesamos si tiene URL válida hacia Graph API
    if (!rawUrl.includes('graph.facebook.com')) return;

    const methodName = toCamelCase(req.name);

    if (processedMethods.has(methodName)) return;
    processedMethods.add(methodName);

    const capitalizedName = methodName.charAt(0).toUpperCase() + methodName.slice(1);
    const payloadTypeName = `${capitalizedName}Payload`;
    
    // Fallback estricto a unknown
    let responseTypeName = 'unknown';

    // Extraer el Response Type
    if (req.response && req.response.length > 0) {
      for (const res of req.response) {
        if (res.body) {
          try {
            const parsedBody = JSON.parse(res.body);
            responseTypeName = `${capitalizedName}Response`;
            interfacesCode += `export type ${responseTypeName} = ${inferType(parsedBody, '', '')};\n\n`;
            break; 
          } catch (e) {}
        }
      }
    }

    // Limpiamos la URL
    let endpoint = rawUrl.replace(/^https:\/\/graph\.facebook\.com/, '');
    endpoint = endpoint.replace(/{{Version}}/gi, '${this.config.version || "v20.0"}');
    endpoint = endpoint.replace(/{{Phone-Number-ID}}/gi, '${this.config.phoneNumberId}');
    endpoint = endpoint.replace(/{{WABA-ID}}/gi, '${this.config.wabaId}');
    endpoint = endpoint.replace(/{{Recipient-Phone-Number}}/gi, '${phoneNumber}'); 

    // Generamos las Interfaces del Payload y los Métodos
    if (req.request?.body?.mode === 'formdata' && req.request?.body?.formdata && method !== 'GET') {
      const formDataKeys = req.request.body.formdata.map(fd => {
        return `  ${fd.key}: ${fd.type === 'file' ? 'Blob | File' : 'string'};`;
      }).join('\n');
      
      interfacesCode += `export interface ${payloadTypeName} extends WbMetadata {\n${formDataKeys}\n}\n\n`;
      payloadNames.push(payloadTypeName);

      classMethodsCode += `
  /**
   * ${req.name}
   * @method ${method}
   * @formData
   */
  async ${methodName}(data: ${payloadTypeName}): Promise<${responseTypeName}> {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (!key.startsWith('_') && value !== undefined) {
        formData.append(key, value as any);
      }
    });
    return this.requestFormData<${responseTypeName}>(\`${endpoint}\`, '${method}', formData);
  }\n`;
    } else if (req.request?.body?.raw && method !== 'GET') {
      try {
        const payload = JSON.parse(req.request.body.raw);
        
        // Detectar si es un "disguised form-data" (usando la sintaxis @ de cURL/Postman)
        const isDisguisedFormData = Object.values(payload).some(v => typeof v === 'string' && v.startsWith('@'));

        if (isDisguisedFormData) {
          const formDataKeys = Object.entries(payload).map(([k, v]) => {
            const isFile = typeof v === 'string' && v.startsWith('@');
            return `  ${k}: ${isFile ? 'Blob | File' : 'string'};`;
          }).join('\n');

          interfacesCode += `export interface ${payloadTypeName} extends WbMetadata {\n${formDataKeys}\n}\n\n`;
          payloadNames.push(payloadTypeName);

          classMethodsCode += `
  /**
   * ${req.name}
   * @method ${method}
   * @formData (auto-detected from @ syntax)
   */
  async ${methodName}(data: ${payloadTypeName}): Promise<${responseTypeName}> {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (!key.startsWith('_') && value !== undefined) {
        formData.append(key, value as any);
      }
    });
    return this.requestFormData<${responseTypeName}>(\`${endpoint}\`, '${method}', formData);
  }\n`;
        } else {
          interfacesCode += `export type ${payloadTypeName} = ${inferType(payload, '', '')} & WbMetadata;\n\n`;
          
          // Guardamos el nombre del payload para la Unión final
          payloadNames.push(payloadTypeName);

          classMethodsCode += `
  /**
   * ${req.name}
   * @method ${method}
   */
  async ${methodName}(data: ${payloadTypeName}): Promise<${responseTypeName}> {
    return this.request<${responseTypeName}>(\`${endpoint}\`, '${method}', data);
  }\n`;
        }
      } catch (e) {}
    } else {
      classMethodsCode += `
  /**
   * ${req.name}
   * @method ${method}
   */
  async ${methodName}(): Promise<${responseTypeName}> {
    return this.request<${responseTypeName}>(\`${endpoint}\`, '${method}');
  }\n`;
    }
  });

  outputCode += interfacesCode;

  // 👑 Magia 3: Generar la Unión Maestra
  if (payloadNames.length > 0) {
    outputCode += `\n/** Unión de todos los payloads válidos para Meta */\n`;
    outputCode += `export type WhatsAppCloudMessage =\n  | ${payloadNames.join('\n  | ')};\n\n`;
  }

  outputCode += `
export class WhatsAppClient {
  private config: WhatsAppConfig;
  private readonly baseUrl = 'https://graph.facebook.com';

  constructor(config: WhatsAppConfig) {
    this.config = config;
  }

  private async request<T>(endpoint: string, method: string, body?: unknown): Promise<T> {
    const url = \`\${this.baseUrl}\${endpoint}\`;
    
    const headers: HeadersInit = {
      'Authorization': \`Bearer \${this.config.accessToken}\`,
      'Content-Type': 'application/json',
    };

    const response = await fetch(url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error?.message || \`Error HTTP \${response.status}\`);
    }
    return data as T;
  }

  private async requestFormData<T>(endpoint: string, method: string, body: FormData): Promise<T> {
    const url = \`\${this.baseUrl}\${endpoint}\`;
    
    const headers: HeadersInit = {
      'Authorization': \`Bearer \${this.config.accessToken}\`,
    };

    const response = await fetch(url, {
      method,
      headers,
      body: body as any,
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error?.message || \`Error HTTP \${response.status}\`);
    }
    return data as T;
  }
${classMethodsCode}
}
`;

  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(finalTsPath, outputCode.trim());

  console.log(`🚀 ¡Éxito! Generador finalizado. ¡Cero duplicados y Unión Maestra generada!`);

} catch (err: unknown) {
  if (err instanceof Error) {
    console.error("❌ Error:", err.message);
  }
}