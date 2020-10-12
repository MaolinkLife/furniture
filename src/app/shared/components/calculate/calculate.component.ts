import { BehaviorSubject } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy, Input, TemplateRef, ElementRef } from '@angular/core';

interface FurnitureTypeElementInterface {
    active: boolean;
    iconName: string;
    caption: string;
    id: string;
}


const FIRST = {
    furnitureTypesList: [
        {
            active: false,
            iconName: 'iconStraigthSofas',
            caption: 'Диван прямой',
            id: 'straigthSofas',
        },
        {
            active: false,
            iconName: 'iconCornerSofas',
            caption: 'Диван угловой',
            id: 'cornerSofas',
        },
        {
            active: false,
            iconName: 'iconKitchen',
            caption: 'Кухонный уголок',
            id: 'kitchen',
        },
        {
            active: false,
            iconName: 'iconArmchair',
            caption: 'Кресло',
            id: 'armchair',
        },
        {
            active: false,
            iconName: 'iconSoftChairs',
            caption: 'Стул с мягкой спинкой',
            id: 'softChairs',
        },
        {
            active: false,
            iconName: 'iconWoodChairs',
            caption: 'Стул без мягкой спинки',
            id: 'woodChairs',
        },
        {
            active: false,
            iconName: 'iconHeadboard',
            caption: 'Изголовье кровати',
            id: 'headboard',
        },

        {
            active: false,
            iconName: 'iconPouf',
            caption: 'Пуф',
            id: 'pouf',
        },
        {
            active: false,
            iconName: 'iconBench',
            caption: 'Банкетка',
            id: 'bench',
        },
    ]
};


const FURNITURE_OPTIONS = {
    straigthSofas: {
        sizeList: [
            'Малый (2х местный)',
            'Средний (3х местный)',
            'Большой (4х и более)',
        ],
    },
    cornerSofas: {
        sizeList: [
            'Малый до 3,5м (длина + глубина)',
            'Средний от 3,5м до 5м (длина + глубина)',
            'П-образный до 5м (длина + глубина)',
        ]
    },
    kitchen: {
        sizeList: [
            'Простой',
        ]
    },
    armchair: {
        sizeList: [
            'Среднее',
        ]
    },
    softChairs: {
        sizeList: [
            'Средний',
        ]
    },
    woodChairs: {
        sizeList: [
            'Средний',
        ]
    },
    headboard: {
        sizeList: [
            'Средний',
        ]
    },
    pouf: {
        sizeList: [
            'Средний',
        ]
    },
    bench: {
        sizeList: [
            'Средний',
        ]
    },
};

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'obbey-calculate',
    templateUrl: './calculate.component.html',
    styleUrls: ['./calculate.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculateComponent implements OnInit {



    object = {
        type: '',
        options: {
            size: '',
            pomp: '',
            fillerRecovery: '',
        },
        material: {
            type: '',
            price: 2800,
        },
        workPrice: 6000,
        totalPrice: 8800,
        deliveryPrice: 1500,
    };

    firstQuestion = FIRST;

    furnitureOptions = FURNITURE_OPTIONS;

    items$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

    sizeList$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

    @Input()
    currentIndex = 0;

    @Input()
    maxIndex: number;

    pompButtons = [
        {
            caption: 'Нет',
            active: false,
        },
        {
            caption: 'Стандартная',
            active: false,
        },
        {
            caption: 'Пышная',
            active: false,
        },
    ];

    fillerRecoveryList = [
        {
            caption: 'Не требуется',
            active: false,
        },
        {
            caption: 'Частичная замена',
            active: false,
        },
        {
            caption: 'Полная замена',
            active: false,
        },
    ];

    get canClickPrev(): boolean {
        return this.currentIndex > 0;
    }

    get canClickNext(): boolean {
        return (this.currentIndex + 1) < 5;
    }

    constructor() { }

    ngOnInit(): void {
        this.selectFurnitureType(0);
    }

    pompSelect(index: number): void {
        this.pompButtons.forEach(e => e.active = false);
        this.pompButtons[index].active = true;
        this.object.options.pomp = this.pompButtons[index].caption;

    }


    clickSizeSelect(value: string): void {
        this.object.options.size = value;
    }


    fillerRecoverySelect(index: number): void {
        this.fillerRecoveryList.forEach(e => e.active = false);
        this.fillerRecoveryList[index].active = true;

        this.object.options.fillerRecovery = this.fillerRecoveryList[index].caption;

        console.log('object update: ', this.object);
    }

    /**
     *
     * @param index - selected item index
     */
    selectFurnitureType(index: number): void {
        this.object.type = this.firstQuestion.furnitureTypesList[index].caption;

        this.firstQuestion.furnitureTypesList.forEach((furniture: FurnitureTypeElementInterface) => {
            furniture.active = false;
        });
        this.firstQuestion.furnitureTypesList[index].active = true;
    }


    clickNext(): void {
        const furnitureType = this.firstQuestion.furnitureTypesList
            .find((element) => element.caption === this.object.type);

        const id = furnitureType.id;

        this.sizeList$.next(this.furnitureOptions[id].sizeList);

        if (this.canClickNext) {
            this.currentIndex++;
        }
    }

    clickBack(): void {
        if (this.canClickPrev) {
            this.currentIndex--;
        }
    }


    buttonClick(event: Event) {

    }

}
