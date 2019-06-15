import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutomatedComponent } from './automated/automated.component';
import { RouterModule } from '@angular/router';
import { MatChipsModule, MatIconModule } from '@angular/material';
import { SingleComponent } from './single/single.component';



const routes = [
  {
      path     : 'pages/automated',
      component: AutomatedComponent,   
  } 
  , {
    path     : 'pages/automated/single',
    component : SingleComponent
  }
]; 

@NgModule({
  imports: [
    CommonModule,
    MatChipsModule,
    MatIconModule,
    RouterModule.forChild(routes)

  ],
  declarations: [AutomatedComponent, SingleComponent]
})
export class AutomatedModule { }
