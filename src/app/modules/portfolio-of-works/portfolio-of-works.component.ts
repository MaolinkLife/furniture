import { BehaviorSubject } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-portfolio-of-works',
    templateUrl: './portfolio-of-works.component.html',
    styleUrls: ['./portfolio-of-works.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioOfWorksComponent implements OnInit {

    straightSofas = [
        {
            first: {
                image: '../../../assets/images/examples/sofas/example-before1.jpg',
            },
            second: {
                image: '../../../assets/images/examples/sofas/example-after1.jpg',
            },
            third: {
                image: '../../../assets/images/examples/sofas/example-before2.jpg',
            },
            four: {
                image: '../../../assets/images/examples/sofas/example-after2.jpg',
            },
        },
        {
            first: {
                image: '../../../assets/images/examples/sofas/example-before3.jpg',
            },
            second: {
                image: '../../../assets/images/examples/sofas/example-after3.jpg',
            },
            third: {
                image: '../../../assets/images/examples/sofas/example-before4.jpg',
            },
            four: {
                image: '../../../assets/images/examples/sofas/example-after4.jpg',
            },
        },
    ];

    cornerSofas = [
        {
            first: {
                image: '../../../assets/images/examples/corner-sofas/example-before1.jpg',
            },
            second: {
                image: '../../../assets/images/examples/corner-sofas/example-after1.jpg',
            },
            third: {
                image: '../../../assets/images/examples/corner-sofas/example-before2.jpg',
            },
            four: {
                image: '../../../assets/images/examples/corner-sofas/example-after2.jpg',
            },
        },
    ];

    armchairs = [
        {
            first: {
                image: '../../../assets/images/examples/armchairs/example-before6.jpg',
            },
            second: {
                image: '../../../assets/images/examples/armchairs/example-after6.jpg',
            },
            third: {
                image: '../../../assets/images/examples/armchairs/example-before2.jpg',
            },
            four: {
                image: '../../../assets/images/examples/armchairs/example-after2.jpg',
            },
        },
        {
            first: {
                image: '../../../assets/images/examples/armchairs/example-before3.jpg',
            },
            second: {
                image: '../../../assets/images/examples/armchairs/example-after3.jpg',
            },
            third: {
                image: '../../../assets/images/examples/armchairs/example-before4.jpg',
            },
            four: {
                image: '../../../assets/images/examples/armchairs/example-after4.jpg',
            },
        },
        {
            first: {
                image: '../../../assets/images/examples/armchairs/example-before5.jpg',
            },
            second: {
                image: '../../../assets/images/examples/armchairs/example-after5.jpg',
            },
        },
    ];

    chairs = [
        {
            first: {
                image: '../../../assets/images/examples/chairs/expl-b5.jpg',
            },
            second: {
                image: '../../../assets/images/examples/chairs/expl-a5.jpg',
            },
            third: {
                image: '../../../assets/images/examples/chairs/expl-b2.jpg',
            },
            four: {
                image: '../../../assets/images/examples/chairs/expl-a2.jpg',
            },
        },
        {
            first: {
                image: '../../../assets/images/examples/chairs/expl-b3.jpg',
            },
            second: {
                image: '../../../assets/images/examples/chairs/expl-a3.jpg',
            },
            third: {
                image: '../../../assets/images/examples/chairs/expl-b4.jpg',
            },
            four: {
                image: '../../../assets/images/examples/chairs/expl-a4.jpg',
            },
        },
    ];

    headboards = [{
        first: {
            image: '../../../assets/images/examples/headboards/headboards-before1.jpg',
        },
        second: {
            image: '../../../assets/images/examples/headboards/headboards-after1.jpg',
        },
    }];

    poufsAndBanquets = [
        {
            first: {
                image: '../../../assets/images/examples/poufs/expl-b1.jpg',
            },
            second: {
                image: '../../../assets/images/examples/poufs/expl-a1.jpg',
            },
            third: {
                image: '../../../assets/images/examples/poufs/expl-b2.jpg',
            },
            four: {
                image: '../../../assets/images/examples/poufs/expl-a2.jpg',
            },
        },
        {
            first: {
                image: '../../../assets/images/examples/poufs/expl-b3.jpg',
            },
            second: {
                image: '../../../assets/images/examples/poufs/expl-a3.jpg',
            },
        },
    ];

    tabList = [
        {
            active: false,
            caption: 'прямые диваны',
            id: 'straightSofas',
        },
        {
            active: false,
            caption: 'угловые диваны',
            id: 'cornerSofas',
        },
        {
            active: false,
            caption: 'кресла',
            id: 'armchairs',
        },
        {
            active: false,
            caption: 'стулья',
            id: 'chairs',
        },
        {
            active: false,
            caption: 'кровати',
            id: 'headboards',
        },
        {
            active: false,
            caption: 'пуфы и банкетки',
            id: 'poufsAndBanquets',
        },
    ];

    currentList$: BehaviorSubject<string> = new BehaviorSubject<string>('');

    portfolioList$: BehaviorSubject<any[]> = new BehaviorSubject([]);

    constructor() { }

    ngOnInit(): void {
        this.tabClick('straightSofas', 0);
    }


    tabClick(id: string, index: number): void {
        this.tabList.forEach(tab => tab.active = false);
        this.tabList[index].active = true;
        this.currentList$.next(id);
    }

}
