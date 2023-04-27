import { Component } from '@angular/core';
import { StepTwoComponent } from './step-two/step-two.component'

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent {
  dataFromP = {title: "Hello from parent"}

  title = "data pass"
  books = [
    {title: "hello", },
    {title: "hello1", },
    {title: "hello2", }
  ]

  constructor() {}

  onTitleAdd(eventData:{title: string}){
    this.books = this.books.concat({
      title: eventData.title
    })
  }
}
