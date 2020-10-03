import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-production-block',
  templateUrl: './production-block.component.html',
  styleUrls: ['./production-block.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductionBlockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
