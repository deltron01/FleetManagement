import { Component, Input, OnInit } from '@angular/core';
import { Driver } from 'src/app/model/driver';
import { Vehicle } from 'src/app/model/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {DriversService} from '../../services/drivers.service';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {

  vehicles: Vehicle[] = [];
  currentDriverVehicle: Vehicle = new Vehicle();
  driverID?: number;
  editMode?: boolean;

  @Input() currentDriver: Driver = new Driver();

  constructor(private vehicleService: VehicleService,
              private  driverService: DriversService,
              private  currentRoute: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(): void {
    this.currentRoute.params.subscribe((params: Params) => {
      this.driverID = params.id;
      this.editMode = this.driverID != null;
      if(this.editMode){
        // @ts-ignore
        this.currentDriver = this.driverService.getDriver(this.driverID);
        console.log('edit ----- mode');
      } else{
        console.log('ADD ----- mode');
        this.currentDriver.vehicle = new Vehicle();
      }
    });
    // @ts-ignore
    this.currentDriverVehicle = this.currentDriver.vehicle;
      this.vehicles = this.vehicleService.getVehicles();
  }

  onImageUploaded($event: Event): void {
  }

  saveDriver(): void {
    console.log('selected vehicle ID', this.currentDriverVehicle);

      this.currentDriver.vehicle = this.currentDriverVehicle;


    console.log('saved vehicle', this.currentDriverVehicle);
    this.driverService.addOneDriver(this.currentDriver);
    this.driverService.driverSelected.next(this.currentDriver);
    this.router.navigate(['/drivers']);
  }

}
