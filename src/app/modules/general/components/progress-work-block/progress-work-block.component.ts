import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-progress-work-block',
  templateUrl: './progress-work-block.component.html',
  styleUrls: ['./progress-work-block.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressWorkBlockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
