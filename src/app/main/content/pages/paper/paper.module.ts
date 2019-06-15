import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaperComponent } from './paper/paper.component';
import { RouterModule } from '@angular/router';
import { SingleComponent } from './single/single.component';
import { RequestComponent } from './request/request.component';
import { MatChipsModule, MatIcon, MatIconModule } from '@angular/material';


const routes = [
  {
      path     : 'pages/paper',
      component: PaperComponent,   
  } , 
  {
    path : 'pages/paper/single' ,
    component : SingleComponent 
  } ,
  {
    path : 'pages/paper/single/requests' ,
    component : RequestComponent 
  }
];


@NgModule({
  imports: [
    CommonModule ,
    MatChipsModule,
    MatIconModule,
    RouterModule.forChild(routes)

  ],
  declarations: [PaperComponent, SingleComponent, RequestComponent]
})
export class PaperModule { }
