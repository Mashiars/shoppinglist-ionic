import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import firebase from 'firebase/app';
import 'firebase/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyCj6ZvFQyNEq_w3YV6GTeU11AnmzGyrT10",
  authDomain: "fir-d-project.firebaseapp.com",
  databaseURL: "https://fir-d-project.firebaseio.com",
  projectId: "fir-d-project",
  storageBucket: "fir-d-project.appspot.com",
  messagingSenderId: "804926290005",
  appId: "1:804926290005:web:dd4465185118c707037cdc",
  measurementId: "G-FEGT7GXP3Q"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
