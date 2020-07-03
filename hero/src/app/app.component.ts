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
herobutton(): void {
  this.hero=true
}
}

