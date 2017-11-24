import { Persona, UsuariosProvider } from './../../providers/usuarios/usuarios';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  persona:Persona;
  constructor(public navCtrl: NavController, public usersProvider:UsuariosProvider) {
    this.crearPersona();
  }
  crearPersona(){
    this.persona=this.usersProvider.dameUsuario();
  }
}
