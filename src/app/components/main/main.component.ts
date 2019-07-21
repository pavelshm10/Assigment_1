import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Directionality } from '@angular/cdk/bidi';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnDestroy {

  constructor(dir: Directionality) {

   }

  ngOnDestroy() {
   
  }

}
