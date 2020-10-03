import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-armchairs',
  templateUrl: './armchairs.component.html',
  styleUrls: ['./armchairs.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArmchairsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
