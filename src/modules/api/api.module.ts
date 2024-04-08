import { Module } from "@nestjs/common";

import { ApiController, ApiService } from "./index";

@Module( {
  imports: [],
  controllers: [ ApiController ],
  providers: [ ApiService ]
} )
export class ApiModule {}
