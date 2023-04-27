import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router'


@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})

export class StepTwoComponent implements OnInit {
  @Input()data : {title: string} = {title: ''};
  @Input('ngModel')

  @Output() titleCreated = new EventEmitter<{title: string}>();
  titleString:string = ''
  dataStwo : any = "Helo"
  constructor() {}

  onAdd(){
    this.titleCreated.emit({title: this.titleString})
  }

  // constructor (private route: ActivatedRoute) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // let id:string |null = this.route.snapshot.paramMap.get('id');
    // console.log(id)
    // console.log(this.route)
  }
}
