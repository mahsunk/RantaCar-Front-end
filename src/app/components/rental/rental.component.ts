import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentals: Rental[] = [];
  dataLoaded = false;
  constructor(private rentalServise: RentalService) { }

  ngOnInit(): void {
    this.getRentals();
  }


  getRentals() {
    this.rentalServise.getRentals().subscribe(response => {
      this.rentals=response.data;
      this.dataLoaded = true;
    })
  }
}
