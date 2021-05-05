import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { port = 3000 } = process.env;

  await app.listen(port);
}

bootstrap();
