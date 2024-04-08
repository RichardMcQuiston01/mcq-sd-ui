import { Injectable } from "@nestjs/common";

import { SDHelper } from "../../../shared/helper/SDHelper";

const sdHostUrl = process.env.SD_HOST_ADDRESS || "localhost";
const sdHostPort = process.env.SD_HOST_PORT || "7860";
const sdVersion = process.env.SD_VERSION || "v1";
const baseUrl = `${ sdHostUrl }:${ sdHostPort }`;

@Injectable()
export class ApiService {

  async getStableDiffusionModels() {
    const helper = new SDHelper( baseUrl, sdVersion );
    return await helper.getSDModels();
  }

}
