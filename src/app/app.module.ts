import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlannerComponent } from './planner/planner.component';
import { DayBoxComponent } from './planner/day-box/day-box.component';
import { JournalCategoryComponent } from './planner/journal-category/journal-category.component';
import { TaskCategoryComponent } from './planner/task-category/task-category.component';
import { TaskInputComponent } from './planner/task-category/task-input/task-input.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'planner', component: PlannerComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    PlannerComponent, 
    DayBoxComponent, 
    JournalCategoryComponent, 
    TaskCategoryComponent, 
    TaskInputComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
