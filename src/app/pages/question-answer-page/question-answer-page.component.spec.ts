import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAnswerPageComponent } from './question-answer-page.component';

describe('QuestionAnswerPageComponent', () => {
  let component: QuestionAnswerPageComponent;
  let fixture: ComponentFixture<QuestionAnswerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionAnswerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAnswerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
