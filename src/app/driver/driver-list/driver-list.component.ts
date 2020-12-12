import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Driver } from 'src/app/model/driver';
import { Vehicle } from 'src/app/model/vehicle';
import { DriversService } from 'src/app/services/drivers.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {


  drivers: Driver[] = [];

  constructor(private driverService: DriversService,
              private router: Router,
              private currentRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.drivers = this.driverService.getDrivers();
  }

  /* onDriverSelected(item: Driver){
     console.log(item);
     this.driverSelectedInList.emit(item);
  }*/

  addNewDriver(){
     this.router.navigate(['new'], {relativeTo: this.currentRoute});
  }
}
