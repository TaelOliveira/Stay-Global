import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Question1Component } from './visa/question1/question1.component';
import { Question2Component } from './visa/question2/question2.component';
import { Question3Component } from './visa/question3/question3.component';

@NgModule({
  declarations: [
    AppComponent,
    Question1Component,
    Question2Component,
    Question3Component,
  ],
  entryComponents: [
    Question1Component,
    Question2Component,
    Question3Component,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
  ],
  providers: [
    EmailComposer,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
