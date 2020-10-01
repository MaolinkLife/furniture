import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-recomended-block',
    templateUrl: './recomended-block.component.html',
    styleUrls: ['./recomended-block.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecomendedBlockComponent implements OnInit {



    slide = {
        main: {
            image: '../../../../../assets/images/IMG2.png',
        },
        sub: [
            {
                image: '../../../../../assets/images/IMG3.png',
                style: {
                    'background-image': 'url(../../../../../assets/images/Rectangle56.png)',
                    'background-position': 'center',
                    'background-size': 'cover',
                }
            },
            {
                image: '../../../../../assets/images/IMG3.png',
                style: {
                    'background-image': 'url(../../../../../assets/images/Rectangle57.png)',
                    'background-position': 'center',
                    'background-size': 'cover',
                }
            },
            {
                image: '../../../../../assets/images/IMG3.png',
                style: {
                    'background-image': 'url(../../../../../assets/images/Rectangle58.png)',
                    'background-position': 'center',
                    'background-size': 'cover',
                }
            },
        ]
    };

    constructor() { }

    ngOnInit(): void {
    }

}
