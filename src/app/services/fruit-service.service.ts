import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor() { }
  getFruits() {
      return ([
        { "id": 1, "name": "Mandarino", "stock": 100 },
        { "id": 2, "name": "Arancio", "stock": 110 },
        { "id": 3, "name": "Pere", "stock": 20 },
        { "id": 4, "name": "Mele", "stock": 121 },
        { "id": 5, "name": "Avogado", "stock": 0 }
      ]
    )
  }
}
