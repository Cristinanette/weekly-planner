import { Component, VERSION } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  today: Date = new Date();
  weekDays: string[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  weekTasksCategories = [{
    title: 'Goal of the week',
    subtitle: 'Achieve it to go towards your dreams',
    numberOfInputs: 1,
    canAddTask: false},
    {
    title: 'Habits',
    subtitle: 'Be the best version of yourself',
    numberOfInputs: 3,
    canAddTask: true},
    {
    title: 'General to dos',
    subtitle: 'The things that need to be done',
    numberOfInputs: 3,
    canAddTask: true}
  ];

  dayTasksCategories = [{
    title: 'Most important task',
    subtitle: "If this was the only thing you did today you'd be satisfied",
    numberOfInputs: 1,
    canAddTask: false},
    {
    title: 'Habits',
    subtitle: 'Consistency is the key to success',
    numberOfInputs: 3,
    canAddTask: true},
    {
    title: 'Professional tasks',
    subtitle: 'Do these at work for a productive day',
    numberOfInputs: 3,
    canAddTask: true},
    {
    title: 'Personal tasks',
    subtitle: "Don't forget yourself today",
    numberOfInputs: 3,
    canAddTask: true},
    {
    title: 'Events',
    subtitle: 'Have people to see today ?',
    numberOfInputs: 2,
    canAddTask: true}
    ];
  
  journalCategoriesDayTime = ['I am grateful for...', 'Daily affirmations'];

  journalCategoriesNightTime= [{
    title: '3 amazing things that happened today',
    numberOfInputs: 3},
    {
    title: 'How could I have made today even better ?',
    numberOfInputs: 2}
    ];
}
