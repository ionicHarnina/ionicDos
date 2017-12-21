import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SuperPowerProvider } from '../providers/super-power/super-power';
import { HttpClientModule } from '@angular/common/http/';
import { TaxPage } from '../pages/tax/tax';

@NgModule({
  declarations: [
    MyApp,
    HomePage,TaxPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,TaxPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SuperPowerProvider
  ]
})
export class AppModule {}
