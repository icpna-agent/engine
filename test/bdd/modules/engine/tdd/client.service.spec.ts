import { beforeEach, describe, expect, it, jest } from "@jest/globals";

const openAIEmbeddingsMock = jest.fn();
const chatOpenAIMock = jest.fn();
const pineconeMock = jest.fn();
const mongoClientMock = jest.fn();
const chatGoogleGenerativeAIMock = jest.fn();
const langfuseMock = jest.fn();
const googleGenAIMock = jest.fn();
const groqMock = jest.fn();

jest.mock("@langchain/openai", () => ({
  OpenAIEmbeddings: openAIEmbeddingsMock,
  ChatOpenAI: chatOpenAIMock,
}));

jest.mock("@pinecone-database/pinecone", () => ({
  Pinecone: pineconeMock,
}));

jest.mock("mongodb", () => ({
  MongoClient: mongoClientMock,
}));

jest.mock("@langchain/google-genai", () => ({
  ChatGoogleGenerativeAI: chatGoogleGenerativeAIMock,
}));

jest.mock("langfuse", () => ({
  Langfuse: langfuseMock,
}));

jest.mock("@google/genai", () => ({
  GoogleGenAI: googleGenAIMock,
}));

jest.mock("groq-sdk", () => ({
  __esModule: true,
  default: groqMock,
}));

import { ClientService } from "../../../../../src/features/client/client.service";

describe("ClientService AI clients", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env.OPENAI_API_KEY = "openai-key";
    process.env.PICONE_API_KEY = "pinecone-key";
    process.env.ATLAS_CONNECTION_STRING = "mongodb://localhost:27017/test";
    process.env.GOOGLE_API_KEY = "google-key";
    process.env.LANGFUSE_SECRET_KEY = "lf-secret";
    process.env.LANGFUSE_PUBLIC_KEY = "lf-public";
    process.env.LANGFUSE_BASE_URL = "https://langfuse.example.com";
    process.env.GCP_PROJECT_ID = "gcp-project";
    process.env.GCP_CLIENT_EMAIL = "service@example.com";
    process.env.GCP_PRIVATE_KEY = "line1\\nline2";
    process.env.GROQ_API_KEY = "groq-key";
  });

  it("inicializa clientes de IA, memoria y observabilidad con variables de entorno", () => {
    const service = new ClientService();

    expect(openAIEmbeddingsMock).toHaveBeenCalledWith({
      openAIApiKey: "openai-key",
    });
    expect(chatOpenAIMock).toHaveBeenCalledWith({
      openAIApiKey: "openai-key",
      modelName: "gpt-4o-mini",
    });
    expect(chatGoogleGenerativeAIMock).toHaveBeenCalledWith({
      apiKey: "google-key",
      model: "gemini-3.1-flash-lite-preview",
    });
    expect(langfuseMock).toHaveBeenCalledWith({
      secretKey: "lf-secret",
      publicKey: "lf-public",
      baseUrl: "https://langfuse.example.com",
    });
    expect(googleGenAIMock).toHaveBeenCalledWith({
      location: "us-central1",
      googleAuthOptions: {
        projectId: "gcp-project",
        clientOptions: {
          email: "service@example.com",
          key: "line1\nline2",
        },
      },
    });
    expect(groqMock).toHaveBeenCalledWith({ apiKey: "groq-key" });
    expect(service.getLlm("gpt" as any)).toBe(service.getChatOpenAI());
    expect(service.getLlm("gemini" as any)).toBe(service.getChatGeminiAI());
  });
});
