import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-progress-work-block',
    templateUrl: './progress-work-block.component.html',
    styleUrls: ['./progress-work-block.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressWorkBlockComponent implements OnInit {
    elements = [
        {
            caption: 'ремонт каркаса мебели',
            image: '../../../../../assets/images/production-flips/image1.png',
            text: 'Изготавливаем новые части каркаса, обрабатываем и красим',
        },
        {
            caption: 'замена наполнения мебели',
            image: '../../../../../assets/images/production-flips/image2.png',
            text: 'Полностью меняем наполнение мебели на новое и качественное. Именно благодаря наполнению, изделие не меняет своей формы со временем',
        },
        {
            caption: 'Перетяжка новой тканью или кожей',
            image: '../../../../../assets/images/production-flips/image3.png',
            text: 'Перетягиваем изделие выбранным вами материалом и по желанию обрабатываем защитными средствами для долговечности',
        },
        {
            caption: 'Упаковка и доставка мебели обратно',
            image: '../../../../../assets/images/production-flips/image4.png',
            text: 'По итогу готовности мы упаковываем вашу мебель в защитную плёнку и доставляем вам её обратно',
        },
    ];

    constructor() { }

    ngOnInit(): void {

    }

}
