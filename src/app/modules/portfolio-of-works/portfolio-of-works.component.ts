import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-portfolio-of-works',
  templateUrl: './portfolio-of-works.component.html',
  styleUrls: ['./portfolio-of-works.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioOfWorksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
