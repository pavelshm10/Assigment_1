import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  public movieArr=[];
  constructor(private httpClient: HttpClient) { }

  public getAllMovies():Observable<Movie[]> { 
    return this.httpClient.get<Movie[]>("/assets/json/movies.json");       
  }
}





