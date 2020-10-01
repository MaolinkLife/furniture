import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-quality-block',
  templateUrl: './quality-block.component.html',
  styleUrls: ['./quality-block.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QualityBlockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
