import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CiudadProvider } from '../providers/ciudad/ciudad';
import { SQLite } from '@ionic-native/sqlite';
import { HttpClientModule } from '@angular/common/http';

//1º paso crear el proyecto con integracion de cordova
//2º paso instalar el sqlite externo ionic cordova plugin add cordova-sqlite-ext y rezar (mucho)
//3º paso como si no hubiera hecho nada de lo anterior instalamos el sqlite plugin normal
//4º programa como si no hubiera un mañana y prueba el html en ionic serve
//5º instala la plataforma android
//6º ejecuta en el emulador

//Para ejecutar y autoactualizar ionic cordova run android --emulator -l -c
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CiudadProvider,SQLite
  ]
})
export class AppModule {}
