import { Component, OnInit } from '@angular/core';

import { BurgersService } from '../api_swagger/api/burgers.service'
import { Burger } from '../api_swagger';

@Component({
  selector: 'app-burger-list',
  templateUrl: './burger-list.component.html',
  styleUrls: ['./burger-list.component.css']
})
export class BurgerListComponent implements OnInit {

  burgers: Burger[];

  constructor(private burgerService: BurgersService) { }

  ngOnInit() {
    this.getBurgers();
  }

  getBurgers(): void {
    this.burgerService.listBurgers()
    .subscribe(burgers => this.burgers = burgers);
 }

}
