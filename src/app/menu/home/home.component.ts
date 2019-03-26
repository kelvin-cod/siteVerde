import { Component, OnInit } from '@angular/core';
import { CarroselComponent } from './carrosel/carrosel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {}
  imports: [CarroselComponent];

  ngOnInit() {}
}
