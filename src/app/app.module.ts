import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DayBoxComponent } from './day-box/day-box.component';
import { JournalCategoryComponent } from './journal-category/journal-category.component';
import { TaskCategoryComponent } from './task-category/task-category.component';
import { TaskInputComponent } from './task-category/task-input/task-input.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, DayBoxComponent, JournalCategoryComponent, TaskCategoryComponent, TaskInputComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
