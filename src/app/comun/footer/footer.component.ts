import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

 anio: any = moment(new Date().getFullYear()).format('YYYY');

  constructor() {
    console.log('la fecha:', this.anio );
   }

  ngOnInit(): void {
  }

}
