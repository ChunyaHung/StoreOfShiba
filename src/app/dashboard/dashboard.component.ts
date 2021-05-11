import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  gridset = [
    {cols: 2, rows: 2, color: 'gainsboro'},
    {cols: 2, rows: 2, color: 'gainsboro'},
    {cols: 2, rows: 2, color: 'gainsboro'},
    {cols: 2, rows: 2, color: 'gainsboro'},
  ];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes.slice(0, 4);

        this.heroes.forEach((hero, index) => {
          hero['cols'] = this.gridset[index].cols;
          hero['rows'] = this.gridset[index].rows;
          hero['color'] = this.gridset[index].color;
        });
      });
  }
}
