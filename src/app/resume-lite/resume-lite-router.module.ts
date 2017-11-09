import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ResumeLiteComponent} from './resume-lite.component';

@NgModule({
  imports: [
    RouterModule.forChild([{path: 'cv', component: ResumeLiteComponent}
    ]),
  ],
  exports: [RouterModule],
  declarations: []
})
export class ResumeLiteRouterModule {}
