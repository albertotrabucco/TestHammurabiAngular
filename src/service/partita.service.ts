import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {PartitaModel} from "../model/partitaModel";

@Injectable({
  providedIn: 'root'
})
export class PartitaService {
  private ApiConnection= environment.apiConnectionUrl;
  constructor(private http: HttpClient) { }

  getPartita (): Observable<PartitaModel[]> {
    return this.http.get<PartitaModel[]>(`${this.ApiConnection}/hammurabi/all`);
  }
}
