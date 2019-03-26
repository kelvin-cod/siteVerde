import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  private Empresa = '../../menu/empresa/empresa.component.html';
  private Home = '../../menu/home/home.component.html';

  constructor(private router: Router) {}

  ngOnInit() {}

  empresa() {
    this.router.navigate([this.Empresa, this.Home]);
  }
}
