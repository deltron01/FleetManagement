import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Driver } from 'src/app/model/driver';
import {Router} from '@angular/router';
import {DriversService} from '../../services/drivers.service';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-driver-item',
  templateUrl: './driver-item.component.html',
  styleUrls: ['./driver-item.component.css']
})
export class DriverItemComponent implements OnInit {

  @Input() driver: Driver = new Driver();


  imgSrc: string = 'null';

  constructor(private router: Router,
              private  driverService: DriversService,
              private fireStorage: AngularFireStorage) {

  }

  ngOnInit(): void {
    // @ts-ignore
    /*const imgFireRef = this.fireStorage.ref(this.driver.photo);
    imgFireRef.getDownloadURL().subscribe((url: any) => {
      this.imgSrc = url;
    }); */
    console.log('driver', this.driver);
    this.imgSrc = this.driver.photo ? this.driver.photo : 'null';

  }

  getImgContent(){

  }
  onDriverClick(item: any){
    // this.driverSelected.emit(item);
    this.driverService.driverSelected.next(this.driver);
    this.router.navigate(['/drivers', this.driver.id]);


  }



}
