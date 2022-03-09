import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { List, species, SearchData, parseSpecies, parseSpeciesList} from './models';

const url = 'https://swapi.dev/api/species/'

@Injectable({
  providedIn: 'root'
})
export class StarWarSpeciesService {

  constructor(
    private readonly http: HttpClient
  ) {}

  getAll(params?: SearchData): Observable<List<species>>{
    return this.http.get(url,{
      params: params,
    }).pipe(map((data) => parseSpeciesList(data)),
    );
  }

  getHome(params?: SearchData): Observable<List<species>>{
    return this.http.get(url,{
      params: params,
    }).pipe(map((data) => parseSpeciesList(data)),
    );
  }

  get(id:string): Observable<species>{
    return this.http.get(`${url}${id}/`).pipe(map((data) => parseSpecies(data)))
  }

}


