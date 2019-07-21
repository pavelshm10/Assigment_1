import { Component,OnInit,ViewChild, Input } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { MoviesService } from '../../services/movies.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
//import { CdkDetailRowDirective } from '../../directive/cdk-detail-row-directive.directive';

// import 'rxjs/add/observable/of';
// import { MatPaginator, PageEvent } from '@angular/material';
// import { fromMatSort, sortRows } from './datasource-utils';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  animations: [
    trigger('detailExpand', [
      state('void', style({height: '0px', minHeight: '0', visibility: 'hidden'})),
      state('*', style({height: '*', visibility: 'visible'})),
      transition('void <=> *', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class MoviesComponent implements OnInit {
  public flag:boolean=false;
  dataSource;
  displayedColumns: string[] = ['name', 'code', 'year', 'producer','rating'];
  isExpansionDetailRow = (index, row) => row.hasOwnProperty('detailRow');
  @Input() singleChildRowDetail: boolean;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private moviesservice: MoviesService) {
    
  } 
 
  ngOnInit(){
  //set 30 sec for updating
  setInterval(() => {
    this.moviesservice.getAllMovies().
    subscribe(movies=>{
      this.dataSource = new MatTableDataSource(movies);
      this.dataSource.sort = this.sort;
    });
  }, 30000);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } 

  public axpend2(){
    if(this.flag==true){
      this.flag=false;
    }
    else{
      this.flag=true;
    }
  }
}

 

  










