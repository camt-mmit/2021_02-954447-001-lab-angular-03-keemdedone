import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { List, parsePlanet, parsePlanetsList, planet, SearchData } from './models';

const url = 'https://swapi.dev/api/planets/'

@Injectable({
  providedIn: 'root'
})
export class StarWarPlanetsService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  getAll(params?: SearchData): Observable<List<planet>>{
    return this.http.get(url,{
      params: params,
    }).pipe(map((data) => parsePlanetsList(data)),
    );
  }

  get(id: string): Observable<planet>{
    return this.http.get(`${url}${id}/`).pipe(map((data) => parsePlanet(data)))
  }
}
