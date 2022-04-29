import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {PartitaModel} from "../model/partitaModel";
import {PartitaService} from "../service/partita.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'TestHammurabiAngular';
 public partita!: PartitaModel[];

 constructor(private partitaService: PartitaService) {
 }

 ngOnInit() { this.getTurno()
 }

  public getTurno(): void {
    this.partitaService.getPartita().subscribe(
      (response: PartitaModel[]) => {
        this.partita = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);

      }
    );
  }
}
