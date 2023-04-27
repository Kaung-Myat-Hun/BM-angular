import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router'

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent implements OnInit {
  @Input()data : {title: string} = {title: ''};
  dataStwo : any = "Helo"
  constructor() {}

  // constructor (private route: ActivatedRoute) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // let id:string |null = this.route.snapshot.paramMap.get('id');
    // console.log(id)
    // console.log(this.route)
  }
}
