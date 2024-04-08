import { NestFactory } from "@nestjs/core";
import * as compression from "compression";
import { AppModule } from "./app.module";

async function bootstrap() {

  const app = await NestFactory.create( AppModule );
  const PORT = process.env.PORT || 7878;

  app.use( compression() );
  app.enableCors();

  await app.listen( PORT );

  console.log( `Listening on http://localhost:${ PORT }` );

}

bootstrap();
