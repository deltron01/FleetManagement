import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Vehicle} from '../model/vehicle';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from './dialog/dialog.component';
import {VehicleService} from '../services/vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

 /* vehicles: Vehicle[] = [
    new Vehicle(0, 'Vehicle1', 'Audi', 240),
    new Vehicle(1, 'Vehicle2', 'Mercedes', 230),
    new Vehicle(2, 'Vehicle3', 'Audi', 260),
    new Vehicle(3, 'Vehicle4', 'Hyundai', 290)
  ];  */


  displayedColumns: string[] = ['id', 'registrationNumber', 'brand', 'currentKm'];
  dataSource: MatTableDataSource<Vehicle>;

  constructor(private matDialog: MatDialog,
              private vehicleService: VehicleService) {
    this.dataSource = new MatTableDataSource<Vehicle>(this.vehicleService.getVehicles());
  }

  ngOnInit(): void {
    this.vehicleService.vehicleListChanged.subscribe(() => {
      this.dataSource = new MatTableDataSource<Vehicle>(this.vehicleService.getVehicles());
    });
  }

 /* onNewVehiclAdded(item: Vehicle) {
    this.vehicles.push(item);
    this.dataSource = new MatTableDataSource<Vehicle>(this.vehicles);
  } */

  onNewVehicle() {
    this.matDialog.open(DialogComponent, {
      width: '240px',
      data: new Vehicle()
    })
  }

  showVehicleDetails(id: any) {
    this.matDialog.open(DialogComponent, {
      width: '240px',
      data: this.vehicleService.getVehicle(id)
    })
  }
}
