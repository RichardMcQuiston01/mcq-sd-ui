export class SDApi {

  baseUrl = '';
  sdApiUrl = '';

  constructor( _baseUrl: string,  _v = 'v1', _params = {} ) {

    this.baseUrl = _baseUrl;
    this.sdApiUrl = `${this.baseUrl}/sdapi/${_v}/`;

    for( const key of Object.keys( _params )) {
      this[key] = _params[key];
    }

    return this;

  }

}