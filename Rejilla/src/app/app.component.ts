import { SegundaPage } from './../pages/segunda/segunda';
import { PrimeraPage } from './../pages/primera/primera';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TerceraPage } from '../pages/tercera/tercera';
import { CuartaPage } from '../pages/cuarta/cuarta';
import { QuintaPage } from '../pages/quinta/quinta';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = QuintaPage;
  @ViewChild(Nav) nav: Nav;
  pages: Array<{ title: string, component: any }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [{ title: "primera", component: PrimeraPage },
    { title: "segunda", component: SegundaPage },
    { title: "tercera", component: TerceraPage }]
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

