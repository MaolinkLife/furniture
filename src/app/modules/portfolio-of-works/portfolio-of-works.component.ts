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
                image: '../../../assets/images/examples/sofas/expl-b1.jpg',
            },
            second: {
                image: '../../../assets/images/examples/sofas/expl-a1.jpg',
            },
            third: {
                image: '../../../assets/images/examples/sofas/expl-b2.jpg',
            },
            four: {
                image: '../../../assets/images/examples/sofas/expl-a2.jpg',
            },
        },
        {
            first: {
                image: '../../../assets/images/examples/sofas/expl-b3.jpg',
            },
            second: {
                image: '../../../assets/images/examples/sofas/expl-a3.jpg',
            },
            third: {
                image: '../../../assets/images/examples/sofas/expl-b4.jpg',
            },
            four: {
                image: '../../../assets/images/examples/sofas/expl-a4.jpg',
            },
        },
        {
            first: {
                image: '../../../assets/images/examples/sofas/expl-b5.jpg',
            },
            second: {
                image: '../../../assets/images/examples/sofas/expl-a5.jpg',
            },
            third: {
                image: '../../../assets/images/examples/sofas/expl-b6.jpg',
            },
            four: {
                image: '../../../assets/images/examples/sofas/expl-a6.jpg',
            },
        },
        {
            first: {
                image: '../../../assets/images/examples/sofas/expl-b7.jpg',
            },
            second: {
                image: '../../../assets/images/examples/sofas/expl-a7.jpg',
            },
            third: {
                image: '../../../assets/images/examples/sofas/expl-b8.jpg',
            },
            four: {
                image: '../../../assets/images/examples/sofas/expl-a8.jpg',
            },
        },
        {
            first: {
                image: '../../../assets/images/examples/sofas/expl-b9.jpg',
            },
            second: {
                image: '../../../assets/images/examples/sofas/expl-a9.jpg',
            },
        },
    ];

    cornerSofas = [
        {
            first: {
                image: '../../../assets/images/examples/corner-sofas/expl-a1.jpg',
            },
            second: {
                image: '../../../assets/images/examples/corner-sofas/expl-b1.jpg',
            },
            third: {
                image: '../../../assets/images/examples/corner-sofas/expl-a2.jpg',
            },
            four: {
                image: '../../../assets/images/examples/corner-sofas/expl-b2.jpg',
            },
        },
        {
            first: {
                image: '../../../assets/images/examples/corner-sofas/expl-a3.jpg',
            },
            second: {
                image: '../../../assets/images/examples/corner-sofas/expl-b3.jpg',
            },
            third: {
                image: '../../../assets/images/examples/corner-sofas/expl-a4.jpg',
            },
            four: {
                image: '../../../assets/images/examples/corner-sofas/expl-b4.jpg',
            },
        },
        {
            first: {
                image: '../../../assets/images/examples/corner-sofas/expl-a5.jpg',
            },
            second: {
                image: '../../../assets/images/examples/corner-sofas/expl-b5.jpg',
            },
        },
    ];

    armchairs = [
        {
            first: {
                image: '../../../assets/images/examples/armchairs/expl-b1.jpg',
            },
            second: {
                image: '../../../assets/images/examples/armchairs/expl-a1.jpg',
            },
            third: {
                image: '../../../assets/images/examples/armchairs/expl-b2.jpg',
            },
            four: {
                image: '../../../assets/images/examples/armchairs/expl-a2.jpg',
            },
        },
        {
            first: {
                image: '../../../assets/images/examples/armchairs/expl-b3.jpg',
            },
            second: {
                image: '../../../assets/images/examples/armchairs/expl-a3.jpg',
            },
            third: {
                image: '../../../assets/images/examples/armchairs/expl-b4.jpg',
            },
            four: {
                image: '../../../assets/images/examples/armchairs/expl-a4.jpg',
            },
        },
        {
            first: {
                image: '../../../assets/images/examples/armchairs/expl-b5.jpg',
            },
            second: {
                image: '../../../assets/images/examples/armchairs/expl-a5.jpg',
            },
            third: {
                image: '../../../assets/images/examples/armchairs/expl-b6.jpg',
            },
            four: {
                image: '../../../assets/images/examples/armchairs/expl-a6.jpg',
            },
        },
    ];

    chairs = [
        {
            first: {
                image: '../../../assets/images/examples/chairs/expl-a5.jpg',
            },
            second: {
                image: '../../../assets/images/examples/chairs/expl-b5.jpg',
            },
            third: {
                image: '../../../assets/images/examples/chairs/expl-a2.jpg',
            },
            four: {
                image: '../../../assets/images/examples/chairs/expl-b2.jpg',
            },
        },
        {
            first: {
                image: '../../../assets/images/examples/chairs/expl-a3.jpg',
            },
            second: {
                image: '../../../assets/images/examples/chairs/expl-b3.jpg',
            },
            third: {
                image: '../../../assets/images/examples/chairs/expl-a4.jpg',
            },
            four: {
                image: '../../../assets/images/examples/chairs/expl-b4.jpg',
            },
        },
        {
            first: {
                image: '../../../assets/images/examples/chairs/expl-a5.jpg',
            },
            second: {
                image: '../../../assets/images/examples/chairs/expl-b5.jpg',
            },
            third: {
                image: '../../../assets/images/examples/chairs/expl-b6.jpg',
            },
            four: {
                image: '../../../assets/images/examples/chairs/expl-a6.jpg',
            },
        },
        {
            first: {
                image: '../../../assets/images/examples/chairs/expl-b7.jpg',
            },
            second: {
                image: '../../../assets/images/examples/chairs/expl-a7.jpg',
            },
        },
    ];

    headboards = [
        {
            first: {
                image: '../../../assets/images/examples/headboards/expl-b1.jpg',
            },
            second: {
                image: '../../../assets/images/examples/headboards/expl-a1.jpg',
            },
            third: {
                image: '../../../assets/images/examples/headboards/expl-b2.jpg',
            },
            four: {
                image: '../../../assets/images/examples/headboards/expl-a2.jpg',
            },
        },
        {
            first: {
                image: '../../../assets/images/examples/headboards/expl-b3.jpg',
            },
            second: {
                image: '../../../assets/images/examples/headboards/expl-a3.jpg',
            },
            third: {
                image: '../../../assets/images/examples/headboards/expl-b4.jpg',
            },
            four: {
                image: '../../../assets/images/examples/headboards/expl-a4.jpg',
            },
        },
    ];

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
