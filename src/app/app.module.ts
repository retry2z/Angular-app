import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';

//AngularFire
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

//App
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Modules
import { ShellModule } from './pages/shell/shell.module';

//Context
import { ContextService } from 'src/app/context.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    CommonModule,
    AppRoutingModule,
    ShellModule,
  ],
  providers: [ContextService],
  bootstrap: [AppComponent],
})
export class AppModule { }
