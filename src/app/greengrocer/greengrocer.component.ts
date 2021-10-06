import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GreengrocerService } from '../services/greengrocer-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-greengrocer',
  templateUrl: './greengrocer.component.html',
  styleUrls: ['./greengrocer.component.scss']
})
export class GreengrocerComponent implements OnInit {
  public greengrocerId: any = "";
  public greengrocers: any = "";
  public greengrocer: any ="";
  constructor(private route: ActivatedRoute, private _greengrocerService: GreengrocerService,  private router : Router) { }

  ngOnInit(): void {

    //? da sistemare
    let id: any = this.route.snapshot.paramMap.get('id');
    this.greengrocerId = id;
    this.greengrocers = this._greengrocerService.getGreengrocers();
    // attento se ti dice di dichiarare il tipo allora mettere ( : any)
    this.greengrocer = this.greengrocers.find((t : any)=>t.id == this.greengrocerId);
  };
  goToGreengrocers(){
    let selectedGreengrocers  = this.greengrocerId ? this.greengrocerId : null;
    // in questo modo apsso un parametro opzionale al componente, questo non deve essere dichiarato nelle route
    // Rotta  con path assoluto, poco utile perchè se devo cambiare per qualsis motivo path devo modificare tutte le occorrenze
    //this.router.navigate(["/greengrocers" , {id : selectedGreengrocers}]);
    // '../' ritona alla precedenre rotta non sono riuscto a tornare al path:
    this.router.navigate(['../',  {'id' : selectedGreengrocers}], {relativeTo: this.route});
  }
}

