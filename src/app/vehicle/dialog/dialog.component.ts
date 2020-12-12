import {AfterViewInit, Component, ElementRef, EventEmitter, Inject, Input, OnInit, Output, ViewChild} from '@angular/core';
import { Vehicle } from 'src/app/model/vehicle';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {VehicleService} from '../../services/vehicle.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit, AfterViewInit {

  // @Output() vehicleAdded = new EventEmitter<Vehicle>();

  // @ViewChild("RegistrationNb") registrationNumber?: ElementRef;

  // @ViewChild("Brand") brand?: ElementRef;

  // @ViewChild("Kilometers") currentKilometer?: ElementRef;

  // @ts-ignore
  @ViewChild('form') vehicleForm: NgForm = undefined;

  currentVehicle: Vehicle;
  editMode: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Vehicle,
              private vehicleService: VehicleService,
              public dialogRef: MatDialogRef<DialogComponent>) {
    this.currentVehicle = data;
  }

  ngOnInit(): void {

  }


  onSave(form: NgForm){
      /* const vehicle: Vehicle = new Vehicle(0,this.registrationNumber?.nativeElement.value ,
      this.brand?.nativeElement.value,
      this.currentKilometer?.nativeElement.value); */
      this.currentVehicle.registrationNumber = form.value.registrationNumber;
      this.currentVehicle.brand = form.value.brand;
      this.currentVehicle.currentKm = form.value.currentKm;
      console.log(this.currentVehicle);
      if(this.editMode){
        // vehicle.id = this.currentVehicle.id;
        this.vehicleService.editVehicle(this.currentVehicle);
      } else{
        this.vehicleService.addVehicle(this.currentVehicle);
      }
      this.dialogRef.close();
      this.vehicleService.vehicleListChanged.next();
    // this.vehicleAdded.emit(vehicle);
  }

  ngAfterViewInit(): void {
    if(this.currentVehicle.id !== undefined){
      this.editMode = true;
      setTimeout(() => {
        this.vehicleForm.setValue({
          registrationNumber: this.currentVehicle.registrationNumber,
          brand: this.currentVehicle.brand,
          currentKm: this.currentVehicle.currentKm,
        });
      });
    } else{
      this.editMode = false;
    }
  }


}
