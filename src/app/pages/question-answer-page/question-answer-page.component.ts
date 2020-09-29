import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-question-answer-page',
    templateUrl: './question-answer-page.component.html',
    styleUrls: ['./question-answer-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionAnswerPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
