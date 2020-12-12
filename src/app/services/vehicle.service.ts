import { Injectable } from '@angular/core';
import { Vehicle } from '../model/vehicle';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  vehicles: Vehicle[] = [
    new Vehicle(0, 'Audi A5', 'Audi', 240),
    new Vehicle(1, 'GLR 4x4', 'Mercedes', 230),
    new Vehicle(2, 'Audi Q7', 'Audi', 260),
    new Vehicle(3, 'i30', 'Hyundai', 290)
  ];

  vehicleListChanged: Subject<void> = new Subject();

  constructor() {}

  getVehicles(){
    return this.vehicles;
  }

  getVehicle(id: number){
    return this.vehicles[id];
  }

  addVehicle(vehicle: Vehicle){
    vehicle.id = this.vehicles.length;
    this.vehicles.push(vehicle);

  }

  editVehicle(vehicle: Vehicle){
    // @ts-ignore
    this.vehicles[vehicle.id] = vehicle;

  }


}
