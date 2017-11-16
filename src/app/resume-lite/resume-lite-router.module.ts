import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResumeLiteComponent } from './resume-lite.component';
import { RESUME_LITE_ROUTES } from './resume-lite-routes'

@NgModule({
  imports: [
    RouterModule.forChild(RESUME_LITE_ROUTES),
  ],
  exports: [RouterModule],
  declarations: []
})
export class ResumeLiteRouterModule { }
