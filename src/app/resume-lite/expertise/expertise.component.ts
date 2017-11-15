import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Expertise } from './model/expertise';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExpertiseComponent implements OnInit {

  constructor() { }

  @Input()
  expertises: Expertise[];

  ngOnInit() {
  }

}
