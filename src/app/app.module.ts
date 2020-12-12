import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { DriverComponent } from './driver/driver.component';
import { DriverListComponent } from './driver/driver-list/driver-list.component';
import { DriverItemComponent } from './driver/driver-item/driver-item.component';
import { DriverDetailsComponent } from './driver/driver-details/driver-details.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { DialogComponent } from './vehicle/dialog/dialog.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { ShadowDirective } from './utils/shadow.directive';
import { FirstCharacterUpperCasePipe } from './utils/first-char-uppercase.pipe';
import {AppRoutingModule} from './app-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {environment} from '../environments/environment';
import { AuthenticationComponent } from './authentication/authentication.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DriverComponent,
    DriverListComponent,
    DriverItemComponent,
    DriverDetailsComponent,
    VehicleComponent,
    DialogComponent,
    ShadowDirective,
    FirstCharacterUpperCasePipe,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule

  ],
  exports:[
    AngularFireModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
