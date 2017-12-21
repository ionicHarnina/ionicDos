import { SuperPower, SuperPowerProvider } from './../../providers/super-power/super-power';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TaxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tax',
  templateUrl: 'tax.html',
})
export class TaxPage {

  list:any;
  listaSP=new Array<SuperPower>();
  total=0;
  nombre:string;
  descuento=0;
  misiones=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public superPWPro:SuperPowerProvider) {
    this.list=this.navParams.get('lista');
    this.nombre=this.navParams.get('nombre');
    this.misiones=this.navParams.get('mission');
    this.loadSP();
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad TaxPage');
  }
  loadSP(){
    this.list.forEach(element => {
      // console.log("hasta loadSP"+element);
      this.listaSP.push(this.superPWPro.findSP(element));
    });
    this.suma();
    this.descontar();
  }
  suma(){
    this.listaSP.forEach(element => {
      this.total+=element.value;
      console.log("llego a la suma"+this.total)
    });
  }
  descontar(){
    this.descuento=this.total-(this.total*(this.misiones/10))
  }
}
