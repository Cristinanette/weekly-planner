import { Component } from '@angular/core';

@Component({
  selector: 'task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})
export class TaskInputComponent {
  isTicked: boolean = false;
  imgUrl: string = 'https://image.flaticon.com/icons/svg/2089/2089628.svg';

  tickTask() {
    if (this.isTicked) {this.imgUrl = 'https://image.flaticon.com/icons/svg/2089/2089628.svg'}
    else {this.imgUrl = 'https://image.flaticon.com/icons/svg/2089/2089632.svg'}
    this.isTicked = !this.isTicked;
    
  }
}