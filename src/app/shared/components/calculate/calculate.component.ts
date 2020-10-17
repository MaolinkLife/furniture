import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

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

const GLOBAL = {
    straigthSofas: {
        sizeList: [
            {
                name: 'Малый (2х местный)',
                workPrice: 13900,
                materials: {
                    cloth: 9900,
                    leather: 19900,
                    ecoLeather: 9900,
                    leatherette: 9900,
                },
            },
            {
                name: 'Средний (3х местный)',
                workPrice: 15900,
                materials: {
                    cloth: 11900,
                    leather: 21900,
                    ecoLeather: 11900,
                    leatherette: 11900,
                },
            },
            {
                name: 'Большой (4х и более)',
                workPrice: 18900,
                materials: {
                    cloth: 13900,
                    leather: 33900,
                    ecoLeather: 13900,
                    leatherette: 13900,
                },
            },

        ],
    },
    cornerSofas: {
        sizeList: [
            {
                name: 'Простой',
                workPrice: 21500,
                materials: {
                    cloth: 13500,
                    leather: 43500,
                    ecoLeather: 23500,
                    leatherette: 23500,
                },
            },
            {
                name: 'Модульный',
                workPrice: 32500,
                materials: {
                    cloth: 25500,
                    leather: 55500,
                    ecoLeather: 25500,
                    leatherette: 25500,
                },
            },
        ],
    },
    kitchen: {
        sizeList: [
            {
                name: 'Простой',
                workPrice: 11500,
                materials: {
                    cloth: 5500,
                    leather: 15500,
                    ecoLeather: 8500,
                    leatherette: 8500,
                },
            },
        ],
    },
    armchair: {
        sizeList: [
            {
                name: 'Обычное',
                workPrice: 6500,
                materials: {
                    cloth: 3500,
                    leather: 4500,
                    ecoLeather: 1500,
                    leatherette: 1500,
                },
            },
            {
                name: 'Большое',
                workPrice: 9500,
                materials: {
                    cloth: 4500,
                    leather: 6500,
                    ecoLeather: 2500,
                    leatherette: 2500,
                },
            },
        ],
    },
    softChairs: {
        sizeList: [
            {
                name: 'Простые',
                workPrice: 1800,
                materials: {
                    cloth: 800,
                    leather: 1800,
                    ecoLeather: 800,
                    leatherette: 800,
                },
            },
        ],
    },
    woodChairs: {
        sizeList: [
            {
                name: 'Простые',
                workPrice: 900,
                materials: {
                    cloth: 400,
                    leather: 1400,
                    ecoLeather: 400,
                    leatherette: 400,
                },
            },
        ],
    },
    headboard: {
        sizeList: [
            {
                name: 'Простая',
                workPrice: 9500,
                materials: {
                    cloth: 3500,
                    leather: 9500,
                    ecoLeather: 3500,
                    leatherette: 3500,
                },
            },
        ],
    },
    pouf: {
        sizeList: [
            {
                name: 'Простой',
                workPrice: 2500,
                materials: {
                    cloth: 5500,
                    leather: 15500,
                    ecoLeather: 8500,
                    leatherette: 8500,
                },
            },
        ],
    },
    bench: {
        sizeList: [
            {
                name: 'Простая',
                workPrice: 1000,
                materials: {
                    cloth: 800,
                    leather: 1500,
                    ecoLeather: 800,
                    leatherette: 800,
                },
            },
        ],
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
        size: '',
        material: {
            type: '',
            price: 0,
        },
        fillerRecoveryPrice: 0,
        workPrice: 0,
        totalPrice: 0,
        deliveryPrice: 0,
    };

    firstQuestion = FIRST;

    items$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

    sizeList$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

    @Input()
    currentIndex = 0;

    @Input()
    maxIndex: number;

    deliveryPrice$: BehaviorSubject<number> = new BehaviorSubject(0);

    fillerRecoveryList = [
        {
            caption: 'Не требуется',
            active: false,
            price: 0,
        },
        {
            caption: 'Частичная замена',
            active: false,
            price: 500,
        },
        {
            caption: 'Полная замена',
            active: false,
            price: 3500,
        },
    ];

    materialList = [
        {
            caption: 'Ткань',
            active: false,
        },
        {
            caption: 'Натуральная кожа',
            active: false,
        },
        {
            caption: 'Экокожа',
            active: false,
        },
        {
            caption: 'Кожзам',
            active: false,
        },
    ];

    deliveryList = [
        {
            caption: 'Москва',
            active: false,
            price: 0,
        },
        {
            caption: 'Область',
            active: false,
            price: 2500,
        },
    ];

    selectSizeFormControl: FormControl = new FormControl(null);

    get canClickPrev(): boolean {
        return this.currentIndex > 0;
    }

    get canClickNext(): boolean {
        return (this.currentIndex + 1) < 5;
    }

    get totalPrice(): number {
        let totalPrice = 0;

        const sum = this.object.workPrice + this.object.deliveryPrice + this.object.material.price + this.object.fillerRecoveryPrice;

        return totalPrice = sum;
    }

    constructor() { }

    ngOnInit(): void {
        this.selectFurnitureType(0);
        this.fillerRecoverySelect(0, this.fillerRecoveryList[0].price);

        this.selectSizeFormControl.valueChanges
            .subscribe(value => {
                const id = this.firstQuestion.furnitureTypesList
                    .find(el => el.caption === this.object.type).id;

                const workPrice = GLOBAL[id].sizeList
                    .find(el => el.name === value).workPrice;


                this.object.size = value;
                this.object.workPrice = workPrice;
                this.object.totalPrice = this.totalPrice;

                console.log(this.object);
            });
    }

    /**
     * Производит выбор типа мебели и на его основании прокидывает данные в дальнейшие шаги
     * @param index - selected item index
     */
    selectFurnitureType(index: number): void {
        this.firstQuestion.furnitureTypesList
            .forEach((furniture: FurnitureTypeElementInterface) => {
                furniture.active = false;
            });
        this.firstQuestion.furnitureTypesList[index].active = true;

        this.object.type = this.firstQuestion.furnitureTypesList[index].caption;

        const furnitureType = this.firstQuestion.furnitureTypesList
            .find((element) => element.caption === this.object.type);
        const id = furnitureType.id;
        const sizeList = GLOBAL[id].sizeList;

        this.getSizeList(sizeList);
        this.selectSizeFormControl.setValue(sizeList[0].name);
    }

    fillerRecoverySelect(index: number, price: number): void {
        this.fillerRecoveryList.forEach(e => e.active = false);
        this.fillerRecoveryList[index].active = true;
        this.object.fillerRecoveryPrice = price;
    }

    clickNext(): void {
        console.log(this.currentIndex);
        if (this.currentIndex === 1) {
            this.materialSelect(0, 'Ткань');
        }

        if (this.currentIndex === 3) {
            this.selectDelivery(this.deliveryList[0].price, 0);
        }

        if (this.canClickNext) {
            this.currentIndex++;
        }
    }

    clickBack(): void {
        if (this.canClickPrev) {
            this.currentIndex--;
        }
    }


    getSizeList(currentArray: { name: string }[]): void {
        const array = [];
        currentArray.forEach(item => {
            array.push(item.name);
        });
        this.sizeList$.next(array);
    }


    materialSelect(index: number, name: string): void {
        this.materialList
            .forEach((material) => {
                material.active = false;
            });
        this.materialList[index].active = true;

        const id = this.firstQuestion.furnitureTypesList
            .find(el => el.caption === this.object.type).id;


        const materials = GLOBAL[id].sizeList
            .find(el => el.name === this.object.size).materials;

        let materialPrice = 0;

        switch (name) {
            case 'Ткань':
                materialPrice = materials.cloth;
                break;
            case 'Натуральная кожа':
                materialPrice = materials.leather;
                break;
            case 'Экокожа':
                materialPrice = materials.ecoLeather;
                break;
            case 'Кожзам':
                materialPrice = materials.leatherette;
                break;
        }

        this.object.material.type = name;
        this.object.material.price = materialPrice;
    }

    selectDelivery(price: number, index: number): void {
        this.deliveryList
            .forEach((deliveryItem) => {
                deliveryItem.active = false;
            });

        this.deliveryList[index].active = true;
        this.deliveryPrice$.next(price);
    }
}
