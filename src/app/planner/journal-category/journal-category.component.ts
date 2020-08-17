import { Component, Input } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'journal-category',
  templateUrl: './journal-category.component.html',
  styleUrls: ['./journal-category.component.css']
})
export class JournalCategoryComponent {
  @Input() title: string;
  @Input() numberOfInputs: number;
}