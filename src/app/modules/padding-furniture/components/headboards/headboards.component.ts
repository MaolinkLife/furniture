import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-headboards',
  templateUrl: './headboards.component.html',
  styleUrls: ['./headboards.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadboardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
