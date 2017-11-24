import { CuartaPage } from './../pages/cuarta/cuarta';
import { SegundaPage } from './../pages/segunda/segunda';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PrimeraPage } from '../pages/primera/primera';
import { TerceraPage } from '../pages/tercera/tercera';
import { QuintaPage } from '../pages/quinta/quinta';

@NgModule({
  declarations: [
    MyApp,
    HomePage,PrimeraPage,SegundaPage,TerceraPage,CuartaPage,QuintaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,PrimeraPage,SegundaPage,TerceraPage,CuartaPage,QuintaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
