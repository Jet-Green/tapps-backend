import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './exceptions/http-exception.filter';

// Load environment variables at the very beginning

import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors({ 
    origin: [process.env.CLIENT_URL, 'http://84.201.174.121', 'https://edu.factum-studio.com'],
    credentials: true
  })
  app.useGlobalFilters(new HttpExceptionFilter())

  app.use(cookieParser())

  await app.listen(process.env.PORT)
}
bootstrap()
