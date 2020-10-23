import { Component, OnInit, ChangeDetectionStrategy, ElementRef, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';

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
            source: '../../../../../assets/video/production/video1.mp4',
        },
        {
            source: '../../../../../assets/video/production/video2.mp4',
        },
        {
            source: '../../../../../assets/video/production/video3.mp4',
        },
    ];

    constructor() { }

    ngOnInit(): void {
    }
}
