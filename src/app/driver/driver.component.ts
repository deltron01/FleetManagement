import { Component, OnInit } from '@angular/core';
import { Driver } from '../model/driver';
import {DriversService} from '../services/drivers.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  selectedDriver: Driver = new Driver();
  constructor(private  driverService: DriversService) {

}
   
  ngOnInit(): void {
    this.driverService.driverSelected.subscribe(
      (driver: Driver) => {
        this.selectedDriver = driver;
      }
    );
  }

}
