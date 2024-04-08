import { Controller, Get } from "@nestjs/common";
import { ApiService } from "../service/api.service";

@Controller('api')
export class ApiController {

  constructor( private readonly service: ApiService ) {}

  @Get('models')
  async getModels() {
    return await this.service.getStableDiffusionModels();
  }

}
