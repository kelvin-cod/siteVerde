// tslint:disable-next-line: quotemark
import { Component } from "@angular/core";
// tslint:disable-next-line: quotemark
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
// tslint:disable-next-line: quotemark
import { Title } from "@angular/platform-browser";
// tslint:disable-next-line: quotemark
import { filter, map, switchMap } from "rxjs/operators";
@Component({
  // tslint:disable-next-line: quotemark
  selector: "app-root",
  // tslint:disable-next-line: quotemark
  templateUrl: "./app.component.html",
  // tslint:disable-next-line: quotemark
  styleUrls: ["./app.component.css", "./menu/home/home.component.css"]
})
export class AppComponent {
  // tslint:disable-next-line: quotemark
  title = "Site Verde";
  constructor(
    private router: Router,
    private Activateroute: ActivatedRoute,
    private titleService: Title
  ) {}

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.Activateroute))
      .pipe(
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
      )
      .pipe(switchMap(route => route.data))
      .subscribe(event => this.titleService.setTitle(event.title));
  }
}
