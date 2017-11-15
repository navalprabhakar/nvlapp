import {ResumeLiteComponent} from './resume-lite.component';
import {ResumeLiteService} from './resume-lite.service';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { ResumeLiteRouterModule } from './/resume-lite-router.module';
import { ExpertiseComponent } from './expertise/expertise.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  imports: [
    CommonModule,
    ResumeLiteRouterModule,
  ],
  declarations: [
    ResumeLiteComponent, ExpertiseComponent, EducationComponent],
  providers: [ResumeLiteService]
})
export class ResumeLiteModule {}
