import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Expertise } from '../model/expertise';
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RatingComponent implements OnInit {

  constructor() { }

  @Input()
  expertises: Expertise[];

  ngOnInit() {
  }

  createRange(num:number):number[]{
    var list: number[] = [];
    for(var i = 1; i <= num; i++){
      list.push(i);
   }
   return list;
  }
}
