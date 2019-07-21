import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule,MatTableModule,MatInputModule,MatExpansionModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';

import { MainComponent } from '../components/main/main.component';
import { InfoComponent } from '../components/info/info.component';
import { MoviesComponent } from '../components/movies/movies.component';
import { CdkDetailRowDirective } from '../directive/cdk-detail-row-directive.directive';
import { BonusComponent } from '../components/bonus/bonus.component';

@NgModule({
  imports:      [ HttpClientModule, BrowserAnimationsModule,MatFormFieldModule, MatTableModule,MatSortModule,MatInputModule,MatExpansionModule ],
  declarations: [ MainComponent, InfoComponent,MoviesComponent,CdkDetailRowDirective,BonusComponent],
  bootstrap:    [ MainComponent ]
})
export class AppModule { }
