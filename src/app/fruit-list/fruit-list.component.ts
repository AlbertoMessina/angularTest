import { Component, OnInit } from '@angular/core';
import { FruitService } from '../services/fruit-service.service';

@Component({
  selector: '<app-fruit-list>',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.scss']
})
export class FruitListComponent implements OnInit {
  public fruits : any = "";
  constructor(private _fruitService : FruitService) { }

  ngOnInit(): void {
    this.fruits = this._fruitService.getFruits();
  }

}