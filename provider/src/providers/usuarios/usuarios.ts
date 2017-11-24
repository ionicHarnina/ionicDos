import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UsuariosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuariosProvider {

  constructor(public http: Http) {
    console.log('Hello UsuariosProvider Provider');
  }
  dameUsuario():Persona {
    return new Persona("Luis",new Date(Date.now())) ;
  }
}
export class Persona {
  constructor(public nombre: string, public nacimiento: Date) { }
}
