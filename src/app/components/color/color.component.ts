import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})

export class ColorComponent implements OnInit {
  colors: Color[] = [];
  dataLoaded = false;
  currentColor: Color | null;
  colorFilterText="";

  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
    this.getcolors();
  }

  getcolors() {
    this.colorService.getcolors().subscribe(response => {

      this.colors = response.data;

      this.dataLoaded = true;
    })
  }

  setCurrentColor(color: Color) {

    this.currentColor = color;


  }



  clearCurrentColor() {
    this.currentColor = null;
  }

  getCurrentColorClass(color: Color) {
    if (color == this.currentColor) {
      return "list-group-item active";
    } else {
      return "list-group-item";
    }
  }

  getAllColorClass() {
    if (!this.currentColor) {
      return "list-group-item active";
    } else {
      return "list-group-item";
    }
  }
}
