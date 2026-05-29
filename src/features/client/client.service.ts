import { Injectable } from '@nestjs/common';
import { OpenAIEmbeddings } from "@langchain/openai";
import { Pinecone } from "@pinecone-database/pinecone";
import { MongoClient } from "mongodb";
import { ChatOpenAI } from "@langchain/openai";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { BotModel } from '@db/tables/bot.table';
import { Langfuse } from "langfuse";
import { GoogleGenAI } from '@google/genai';


@Injectable()
export class ClientService {

  private readonly embedding: OpenAIEmbeddings;
  private readonly pinecone: Pinecone;
  private readonly mongo: MongoClient;
  private readonly chatOpenAI: ChatOpenAI;
  private readonly chatGeminiAI: ChatGoogleGenerativeAI;
  private readonly openAIEmbeddings: OpenAIEmbeddings;
  private readonly langfuse: Langfuse;
  private readonly genai: GoogleGenAI;

  constructor() {
    // Initialize embedding
    this.embedding = new OpenAIEmbeddings({
      openAIApiKey: process.env.OPENAI_API_KEY,
    });

    // Initialize Pinecone
    this.pinecone = new Pinecone({
      apiKey: process.env.PICONE_API_KEY,
    });
    
    // Initialize MongoDB
    this.mongo = new MongoClient(
      process.env.ATLAS_CONNECTION_STRING
    );

    // Initialize ChatOpenAI
    this.chatOpenAI = new ChatOpenAI({
      openAIApiKey: process.env.OPENAI_API_KEY,
      modelName: "gpt-4o-mini",
    });

    // Initialize ChatGeminiAI
    this.chatGeminiAI = new ChatGoogleGenerativeAI({
      apiKey: process.env.GOOGLE_API_KEY,
      model: "gemini-3.1-flash-lite-preview",
    });

    // Initialize OpenAIEmbeddings for conversations
    this.openAIEmbeddings = new OpenAIEmbeddings({
      openAIApiKey: process.env.OPENAI_API_KEY,
      modelName: "text-embedding-ada-002",
    });

    // Initialize LangFuse
    this.langfuse = new Langfuse({
      secretKey: process.env.LANGFUSE_SECRET_KEY,
      publicKey: process.env.LANGFUSE_PUBLIC_KEY,
      baseUrl: process.env.LANGFUSE_BASE_URL,
    });

    // Initialize Google GenAI
    this.genai = new GoogleGenAI({
      location: 'us-central1',
      googleAuthOptions: {
        projectId: process.env.GCP_PROJECT_ID,
        clientOptions: {
          email: process.env.GCP_CLIENT_EMAIL,
          key: process.env.GCP_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        }
      }
    });
  }

  // Getters for each client
  getEmbedding(): OpenAIEmbeddings {
    return this.embedding;
  }

  getPinecone(): Pinecone {
    return this.pinecone;
  }

  getMongo(): MongoClient {
    return this.mongo;
  }

  getChatOpenAI(): ChatOpenAI {
    return this.chatOpenAI;
  }

  getChatGeminiAI(): ChatGoogleGenerativeAI {
    return this.chatGeminiAI;
  }

  getOpenAIEmbeddings(): OpenAIEmbeddings {
    return this.openAIEmbeddings;
  }

  getLangfuse(): Langfuse {
    return this.langfuse;
  }

  getGenAI(): GoogleGenAI {
    return this.genai;
  }

  getLlm(model: BotModel): ChatOpenAI | ChatGoogleGenerativeAI {
    switch (model) {
      case "gpt":
        return this.getChatOpenAI();
      case "gemini":
        return this.getChatGeminiAI();
      default:
        return this.getChatOpenAI();
    }
  }
}