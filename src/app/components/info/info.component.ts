import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input("input") // colored = the selector
  public movie:Movie;
  
  constructor() { }

  ngOnInit() {
    //alert(this.movie);
  }

  

}
