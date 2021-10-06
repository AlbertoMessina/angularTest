import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreengrocerService {

  constructor() { }

  getGreengrocers() {
    return ([
      { "id": 1, "name": "Ortofrutta Pino", "address": "via degli uffizi" ,"phone":"0957781254"},
      { "id": 2, "name": "Frutta e verdura", "address": "via dei generali","phone":"0957351124" },
      { "id": 3, "name": "KM 0 store", "address": "via dei cavalli","phone":"0910982455" },
      { "id": 4, "name": "Il giardino del tuo orto", "address": "via magnatill","phone":"0874155264" },
      { "id": 5, "name": "Coltiva sotto case", "address": "via gioconda","phone":"0957781123" },
      { "id": 6, "name": "Credere per crescere", "address": "via grande capo ","phone":"0957781444" }
    ]);
  }
}

