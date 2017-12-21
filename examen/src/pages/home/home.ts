import { SuperPowerProvider } from './../../providers/super-power/super-power';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { TaxPage } from '../tax/tax';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  powerButtonEnable = false;
  list: any;
  missionAccomplished = 0;
  nombre: string;

  constructor(public navCtrl: NavController, public superPow: SuperPowerProvider, public alertCtrl: AlertController) {
  }

  doCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Que superpoderes tiene?');
    let listOfSP = this.superPow.getList();
    listOfSP.forEach(element => {
      alert.addInput({
        type: 'checkbox',
        label: element,
        value: element
      })
    });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Aceptar',
      handler: (data: any) => {
        console.log('Checkbox data:', data);
        this.list = data;
        this.powerButtonEnable = true;
      }
    });

    alert.present();
  }
  callTaxPage() {
    // this.navCtrl.push(TaxPage,[{lista:this.list},{mission:this.missionAccomplished}]);
    this.navCtrl.push(TaxPage, { lista: this.list, mission: this.missionAccomplished, nombre: this.nombre });
  }
  permitirCalculo() {
    if (this.powerButtonEnable && this.missionAccomplished > 0) {
      this.callTaxPage()
    }
    else{
      let alerta =this.alertCtrl.create({
        title:'Error',
        subTitle:'faltan misiones o superpoderes',
        buttons:['Cancelar']
      });
      alerta.present();
    }
  }
}
