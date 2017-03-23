import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyCwkByEN2oDtyKQ-dRgy2XdUHhvzIh1EPM",
  authDomain: "testfirebase-b7a41.firebaseapp.com",
  databaseURL: "https://testfirebase-b7a41.firebaseio.com",
  storageBucket: "testfirebase-b7a41.appspot.com",
  messagingSenderId: "145531086036"
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule, HttpModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }