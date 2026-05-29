import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { preupTelemetry } from '@core/telemetry.core';
import { setupCors } from '@core/cors.core';
import { setupSwagger } from '@core/swagger.core';
import { setupTransformer } from '@core/transformer.core';
import { config } from 'dotenv';

config();

async function bootstrap() {
  preupTelemetry();
  
  const app = await NestFactory.create(AppModule);
  
  setupCors(app);
  setupSwagger(app);
  setupTransformer(app);
  
  await app.listen(process.env.PORT ?? 3200);
}
bootstrap();
