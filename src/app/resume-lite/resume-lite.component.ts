import { Resume } from './model/resume';
import {ResumeLiteService} from './resume-lite.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-resume-lite',
  templateUrl: './resume-lite.component.html',
  styleUrls: ['./resume-lite.component.css'],
  providers: [ResumeLiteService]
})
export class ResumeLiteComponent implements OnInit {
  title = 'My journey so far...';
  resumeLite: Resume;
  errorMessage: string;
  constructor(private _resumeLiteService: ResumeLiteService) {}

  ngOnInit() {
    this._resumeLiteService.getResume().subscribe(response => this.resumeLite = response.data,
      error => this.errorMessage = <any>error);
  }

}
