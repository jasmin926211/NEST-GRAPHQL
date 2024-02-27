import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);   // const config = new ConfigService();
  const port = configService.get<number>('PORT') || 3000;  // console.log(config.get('PORT'));
  
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
}
bootstrap();
