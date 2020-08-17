import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-day-box',
  templateUrl: './day-box.component.html',
  styleUrls: ['./day-box.component.css']
})
export class DayBoxComponent {
  @Input() day: string;
  tasks: string[] = [];
  isDropdownOpen: boolean = false;
  isTaskOpen: boolean = false;

  newTask: string;
  currentTask: string;

  manageDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  addTask(task: string): void {
    this.tasks.push(task)
    this.isDropdownOpen = false;
  }

  manageTask(task: string) {
    if (this.isTaskOpen) {this.currentTask = ''}
    else {this.currentTask = task}
    this.isTaskOpen = !this.isTaskOpen;
  }

  markAsDone() {
  }

  deleteTask() {
    let index = this.tasks.indexOf(this.currentTask);
    this.tasks.splice(index, 1);
    this.isTaskOpen = false;
  }
}