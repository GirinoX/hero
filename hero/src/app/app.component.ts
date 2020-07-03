import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hero';
  dash: boolean;
  hero: boolean;

  dashbutton(): void {
    this.dash=true
}
heroesbutton(): void {
  this.hero=true
}
}

