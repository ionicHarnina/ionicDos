import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SuperPowerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SuperPowerProvider {


  listOfSuperPowers = new Array<SuperPower>();
  constructor(public http: HttpClient) {
    this.populateList();
  }

  private populateList() {
    let nombre = ["volar sin calceltines", "saltar los domingos", "correr de lado"
      , "adivinar numeros", "laser en los ojos", "dedos como tiritas", "estornudar con los ojos abiertos"];
    let valores = [100, 100, 150, 200, 300, 200, 150];
    let i = 0;
    nombre.forEach(element => {
      this.listOfSuperPowers.push(new SuperPower(element, valores[i]));
      i++;
    });
  }

  public getList(): string[] {
    let list: string[] = [];
    this.listOfSuperPowers.forEach(element => {
      list.push(element.name);
    });
    return list;
  }

  public findSP(name: string): SuperPower {
    let sp:SuperPower;
    this.listOfSuperPowers.forEach(element => {
      // console.log("tengo el nombre"+element)
      if (element.name == name){
        // console.log("enceuntro el nombre")
        sp=element;
      }

    });
    // console.log("acabo el findsp")
    return sp;
  }
}

export class SuperPower {
  constructor(public name: string, public value: number) {
  }
}
