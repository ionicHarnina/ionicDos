import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the CiudadProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CiudadProvider {

  public message: any;
  public provincia='Badajoz';
  public list: any[] = [];
  constructor(public http: HttpClient, public sqlite: SQLite) {
    this.openDDBB();
  }

  openDDBB() {
    //create vale para crear un bbdd o para abrir una ya creada
    this.sqlite.create(
      //Esta es la operacion que va a abrir el objeto
      {
        name: 'primero.db',
        location: 'default',
        createFromLocation: 1
      }
    ).then(
      //dentro del then de create
      //una fat arrow
      (db: SQLiteObject) => {
        //La consulta del execute DEBE OSEA DEBE, EN SERIO, probarse antes en sqlstudio
        db.executeSql("select * from provincias where provincia like ?", [this.provincia])
          .then(
          //dentro del then del executeSQL
          // el resultado se recoge en el fatarrow
          (data) =>{
            for(let i=0; i<data.rows.length; i++){
              this.list.push(data.rows.item(i));
              console.log(this.list[i]);
            }
          }
        ).catch(
          (e) => {
            console.log("error en execute");
            this.message = e;
          }
          );
      }
      ).catch(
      (e) => {
        console.log("error en openddbb");
        this.message = e;
      }
      );
  }
}
