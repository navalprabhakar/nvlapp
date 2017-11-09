import {ResumeLiteComponent} from './resume-lite.component';
import {ResumeLiteService} from './resume-lite.service';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { ResumeLiteRouterModule } from './/resume-lite-router.module';

@NgModule({
  imports: [
    CommonModule,
    ResumeLiteRouterModule
  ],
  declarations: [
    ResumeLiteComponent],
  providers: [ResumeLiteService]
})
export class ResumeLiteModule {}
