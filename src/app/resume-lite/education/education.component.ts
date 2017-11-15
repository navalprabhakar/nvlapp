import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {Education} from './model/education'
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EducationComponent implements OnInit {

  constructor() { }

  @Input()
  education: Education;

  ngOnInit() {
  }

}
