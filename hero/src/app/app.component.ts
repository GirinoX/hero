import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  dash: boolean;
  hero: boolean;

  dashbutton(): void {
    this.dash=true
    this.hero=false
}
heroesbutton(): void {
  this.hero=true
  this.dash=false
}
}

