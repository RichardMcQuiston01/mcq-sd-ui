import fetch from "node-fetch";

export class SDHelper {

  baseUrl = "";
  v = "v1";

  constructor( _baseUrl: string, _v = "v1" ) {

    this.baseUrl = _baseUrl;

    if( !this.baseUrl.endsWith( "/" ) ) {
      this.baseUrl += "/";
    }

    this.v = _v;

    return this;

  }

  async getSDModels() {
    return await this.getCall( `sdapi/${ this.v }/sd-models`, {} );
  }

  async getVAE() {
    return await this.getCall( `sdapi/${ this.v }/sd-vae`, {} );
  }

  async getCall( url: string, params: object ) {
    let paramsString = "";

    if( Object.keys( params ).length > 0 ) {
      paramsString = "?" + new URLSearchParams( { ...params } ).toString();
    }

    const fullUrl = this.baseUrl + url + paramsString;

    const response = await fetch( fullUrl );

    if( response.status === 200 ) {
      return response.json;
    }

    return {};
  }

  async postCall( url: string, params: object ) {
    console.log( "TODO" );
  }

}