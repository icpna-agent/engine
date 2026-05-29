import {
  CanActivate,
  ExecutionContext,
  Injectable,
  HttpException,
  HttpStatus,
} from "@nestjs/common";

@Injectable()
export class IpRateLimiterGuard implements CanActivate {
  // Mapa en memoria para registrar las marcas de tiempo de las peticiones por IP
  private clients = new Map<string, number[]>();

  // Configuración: Máximo 10 peticiones en una ventana de 2 segundos (2000 ms)
  private readonly LIMIT = 10;
  private readonly WINDOW_MS = 2000;

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    
    // Obtiene la IP real resolviendo posibles proxies de Cloudflare o balanceadores de carga
    const xForwardedFor = request.headers["x-forwarded-for"] as string;
    const cfConnectingIp = request.headers["cf-connecting-ip"] as string;
    const xRealIp = request.headers["x-real-ip"] as string;

    let ip = "unknown";
    if (cfConnectingIp) {
      ip = cfConnectingIp;
    } else if (xRealIp) {
      ip = xRealIp;
    } else if (xForwardedFor) {
      ip = xForwardedFor.split(",")[0].trim();
    } else {
      ip = request.socket.remoteAddress || "unknown";
    }

    const now = Date.now();

    // Filtra las marcas de tiempo antiguas fuera de la ventana de 2 segundos
    let requestTimes = this.clients.get(ip) || [];
    requestTimes = requestTimes.filter((time) => now - time < this.WINDOW_MS);

    console.log(`[RateLimiter] 🔍 IP: ${ip} | Peticiones en ventana de 2s: ${requestTimes.length + 1}/${this.LIMIT}`);

    // Valida si excede el límite
    if (requestTimes.length >= this.LIMIT) {
      console.warn(`[RateLimiter] 🚨 ¡IP BLOQUEADA por spam! IP: ${ip} | Peticiones: ${requestTimes.length + 1}/${this.LIMIT}`);
      throw new HttpException(
        {
          statusCode: HttpStatus.TOO_MANY_REQUESTS,
          message: "Demasiadas peticiones detectadas. Bloqueado temporalmente por IP.",
          error: "Too Many Requests",
        },
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }

    // Agrega la petición actual e incrementa el contador
    requestTimes.push(now);
    this.clients.set(ip, requestTimes);

    return true;
  }

}
