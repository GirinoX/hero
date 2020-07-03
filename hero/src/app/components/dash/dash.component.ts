import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
 dash: boolean;


  constructor() { }

  ngOnInit(): void {
  }

  dashbutton(): void {
    this.dash = true;
  }
}
