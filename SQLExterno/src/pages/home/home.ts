import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CiudadProvider } from '../../providers/ciudad/ciudad';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public list:any[]=[];
  public message:any;
  constructor(public navCtrl: NavController,public ciudadProv:CiudadProvider) {
    this.list=this.ciudadProv.list;
  }
  dimeMensaje(){
    this.message=this.ciudadProv.message;
  }
}
