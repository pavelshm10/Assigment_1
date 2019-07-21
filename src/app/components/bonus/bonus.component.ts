import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';
import { MatTableDataSource } from '@angular/material';



@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.css']
})
export class BonusComponent implements OnInit {
  @Input("input2") // colored = the selector
  public movie:Movie;
  public movieArr:Array<Movie> = [];
  public company:String;
  constructor(private moviesservice: MoviesService) {
    
  } 

  ngOnInit() {

  this.company=this.movie.productionCompany;
  this.moviesservice.getAllMovies().subscribe(movies => {
    if(movies!=null){  
      for(let i = 0; i<movies.length;i++){
        if(movies[i].productionCompany==this.movie.productionCompany){
          this.movieArr.push(movies[i]);
        }
      }
    }
  });
}
}