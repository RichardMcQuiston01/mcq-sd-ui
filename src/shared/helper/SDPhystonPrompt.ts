export class SDPhystonPrompt {
  baseUrl = '';
  phystonPromptUrl = '';


  constructor( _baseUrl: string ) {

    this.baseUrl = _baseUrl;
    this.phystonPromptUrl = this.baseUrl + '/physton_prompt/';

    return this;

  }
}