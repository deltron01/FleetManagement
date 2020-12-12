import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {DriverComponent} from './driver/driver.component';
import {VehicleComponent} from './vehicle/vehicle.component';
import {DriverListComponent} from './driver/driver-list/driver-list.component';
import {DriverDetailsComponent} from './driver/driver-details/driver-details.component';




const applicationRoutes: Routes =  [
  {path: '', redirectTo: '/drivers', pathMatch: 'full'},
  {path: 'vehicles', component: VehicleComponent},
  {path: 'drivers', component: DriverComponent, children: [
      {path: '', component: DriverListComponent},
      {path: 'new', component: DriverDetailsComponent},
      {path: ':id', component: DriverDetailsComponent}
    ]}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(applicationRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
