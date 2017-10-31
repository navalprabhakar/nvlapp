import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeLiteComponent } from './resume-lite.component';

describe('ResumeLiteComponent', () => {
  let component: ResumeLiteComponent;
  let fixture: ComponentFixture<ResumeLiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeLiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeLiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
