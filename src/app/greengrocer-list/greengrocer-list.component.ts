import { Component, OnInit } from '@angular/core';
import { GreengrocerService } from '../services/greengrocer-service.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-greengrocer-list',
  templateUrl: './greengrocer-list.component.html',
  styleUrls: ['./greengrocer-list.component.scss']
})
export class GreengrocerListComponent implements OnInit {

  public greengrocers: any = "";
  public selectedId: any = "";
  // Service,  router per la navigazione metodo select Greengrocers , AcrivatedRoute per prendere i parametri dall'url
  constructor(private _greengrocerSerice: GreengrocerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.greengrocers = this._greengrocerSerice.getGreengrocers();
    let id: any = this.route.snapshot.paramMap.get('id');
    this.selectedId = id;
  }

  selectGreengrocers(greengrocer: any) {
    // Rotta  con path assoluto, poco utile perchè se devo cambiare per qualsis motivo path devo modificare tutte le occorrenze
    //this.router.navigate(['/greengrocer', greengrocer.id]);
    //relative to prende il path relativo e aggiunge l'id

    this.router.navigate([greengrocer.id], {relativeTo:this.route});
  }

  isSelected(greengrocer: any) {
    return (greengrocer.id == this.selectedId);
  }
}
