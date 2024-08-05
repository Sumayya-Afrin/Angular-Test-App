import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export interface IProducts {
  id: number;
  name: string;
  description: string;
  price: number;
  imageurl: string;
  quantity: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-test-app';
}
