import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-designer-order-block',
    templateUrl: './designer-order-block.component.html',
    styleUrls: ['./designer-order-block.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DesignerOrderBlockComponent implements OnInit {

    items = [
        {
            description: 'На нашем производстве только современное европейское оборудование не позднее 2018 года',
        },
        {
            description: 'Превосходное качество наполнения позволяет сохранить форму и внешний вид мебели свыше 9 лет',
        },
        {
            description: 'Три степени покраски корпуса мебели для защиты и стойкости к повреждениям',
        },
        {
            description: 'Команда состоящая из специалистов и выходцев известных фабрик таких как: 8 Марта, Albert & Shtein, Britannica',
        },
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
