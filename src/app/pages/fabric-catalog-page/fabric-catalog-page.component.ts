import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-fabric-catalog-page',
  templateUrl: './fabric-catalog-page.component.html',
  styleUrls: ['./fabric-catalog-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FabricCatalogPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
