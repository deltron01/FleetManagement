import { Injectable } from '@angular/core';
import { Driver } from '../model/driver';
import { Vehicle } from '../model/vehicle';
import { VehicleService } from './vehicle.service';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriversService {
  availableVehicles: Vehicle[] = [];

  driverSelected = new Subject<Driver>();
  drivers: Driver[] = [];
  constructor(private vehicleService: VehicleService) {
    this.availableVehicles = this.vehicleService.getVehicles();
    this.drivers = [
      new Driver(0, 'Jhon', 'Doe', 'LIC1', this.availableVehicles[0], 'assets/img/driver1.jpg'),
      new Driver(1, 'Ahmed','Salim', 'LIC2', this.availableVehicles[1], 'assets/img/driver2.jpg'),
      new Driver(2,'Anne','Roberts', 'LIC3', this.availableVehicles[2], 'assets/img/driver3.jpg'),
      new Driver(3, 'Hahn','Martin', 'LIC4', this.availableVehicles[3], 'assets/img/driver4.jpg')
    ];
  }

  getDrivers(){
    return this.drivers;
  }

  getDriver(id: number): Driver {
    return this.drivers[id];
  }

  addOneDriver(driver: Driver): void {
    if (driver.id === undefined){
      driver.id = this.drivers.length;
      this.drivers.push(driver);
    } else {
      this.drivers[driver.id] = driver;
    }
  }
}
