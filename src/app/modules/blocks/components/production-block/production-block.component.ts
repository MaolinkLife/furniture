import { Component, OnInit, ChangeDetectionStrategy, ElementRef } from '@angular/core';

@Component({
    selector: 'app-production-block',
    templateUrl: './production-block.component.html',
    styleUrls: ['./production-block.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductionBlockComponent implements OnInit {


    companyList = [
        {
            icon: '../../../../../assets/images/logo/logo-company5.png',
            name: 'Фабрика 8 Марта',
        },
        {
            icon: '../../../../../assets/images/logo/logo-company4.png',
            name: 'Albert & Shtein',
        },
        {
            icon: '../../../../../assets/images/logo/logo-company1.png',
            name: 'Britannica',
        },
        {
            icon: '../../../../../assets/images/logo/logo-company2.png',
            name: 'UNICO INTERIORS DECORATION',
        },
        {
            icon: '../../../../../assets/images/logo/logo-company3.png',
            name: 'MÖBEL&ZEIT',
        },
    ];


    videoList = [
        {
            source: '../../../../../assets/video/video1.MOV',
        },
        {
            source: '../../../../../assets/video/video1.MOV',
        },
        {
            source: '../../../../../assets/video/video1.MOV',
        },
    ];

    constructor() { }

    ngOnInit(): void {
    }

    clickPlay(elementRef: any): void {
        // console.log(elementRef.currentTarget.parentElement.style.opasity = '0')

        elementRef.currentTarget.parentElement.style.opasity = '0';
    }

}
