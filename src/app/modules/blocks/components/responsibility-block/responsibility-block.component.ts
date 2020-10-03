import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-responsibility-block',
    templateUrl: './responsibility-block.component.html',
    styleUrls: ['./responsibility-block.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResponsibilityBlockComponent implements OnInit {

    items = [
        {
            title: 'ВЫ УВЕРЕНЫ В СРОКАХ',
            description: 'Несем ответственность за соблюдение сроков. В случае срыва - компенсируем убытки',
        },
        {
            title: 'ИСПРАВЛЯЕМ ЗА СВОЙ СЧЕТ',
            description: 'Любое несоответствие по согласованным параметрам и наличие дефектов',
        },
        {
            title: 'КАЧЕСТВО, ПОДТВЕРЖДЕННОЕ ГОДАМИ',
            description: ' Несем ответственность за соблюдение сроков. В случае срыва - компенсируем убытки',
        },
        {
            title: 'ФИКСИРОВАННАЯ ЦЕНА БЕЗ СКРЫТЫХ ПЛАТЕЖЕЙ',
            description: 'Стоимость не меняется и фиксируется в договоре',
        },
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
