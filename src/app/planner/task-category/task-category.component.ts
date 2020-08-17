import { Component, Input } from '@angular/core';

@Component({
  selector: 'task-category',
  templateUrl: './task-category.component.html',
  styleUrls: ['./task-category.component.css']
})
export class TaskCategoryComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() numberOfInputs: number;
  @Input() canAddTask: boolean;
  
  
  addTask() {
    this.numberOfInputs += 1;
  }
}