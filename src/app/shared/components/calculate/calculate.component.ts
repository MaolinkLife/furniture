import { FURNITURE_TYPE_LIST } from './../../mock/furniture-type-list';
import { PRICE_LIST } from './../../mock/price-list';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

export interface PriceCalculateInterface {
    /**
     * Тип мебели
     */
    furnitureType: string;

    /**
     * Размер мебели
     */
    furnitureSize: string;

    /**
     * Общая стоимость рассчетов
     */
    totalPrice: number;

    /**
     * Тип материала
     */
    materialType: string;

    /**
     * Стоимость материала
     */
    materialPrice: number;

    /**
     * Стоимость восстановления наполнителя
     */
    fillerRecoveryPrice: number;

    /**
     * Тип восстановления наполнителя
     */
    fillerRecoveryType: string;

    /**
     * Стоимость работы
     */
    workPrice: number;

    /**
     * Стоимость доставки
     */
    deliveryPrice: number;

}
@Component({
    // tslint:disable-next-line: component-selector
    selector: 'obbey-calculate',
    templateUrl: './calculate.component.html',
    styleUrls: ['./calculate.component.less'],
})
export class CalculateComponent implements OnInit {

    @Input()
    currentIndex = 0;

    @Input()
    maxIndex: number;

    public calculatedPrice: PriceCalculateInterface = {
        furnitureType: '',
        furnitureSize: '',
        totalPrice: 0,
        materialType: '',
        materialPrice: 0,
        fillerRecoveryPrice: 0,
        fillerRecoveryType: '',
        workPrice: 0,
        deliveryPrice: 0,
    };

    public items$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

    public sizeList$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

    public deliveryPrice$: BehaviorSubject<number> = new BehaviorSubject(0);

    public fillerRecoveryList = [
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

    public materialList = [
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

    public deliveryList = [
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

    public furnitureTypesList = FURNITURE_TYPE_LIST;

    public selectSizeFormControl: FormControl = new FormControl(null);

    get hasType(): boolean {
        return false;
    }

    get canClickPrev(): boolean {
        return this.currentIndex > 0;
    }

    get canClickNext(): boolean {
        if (!this.calculatedPrice.furnitureType) {
            return false;
        }

        return (this.currentIndex + 1) < 5;
    }

    get totalPrice(): number {
        let totalPrice = 0;

        const sum =
            this.calculatedPrice.workPrice +
            this.calculatedPrice.deliveryPrice +
            this.calculatedPrice.materialPrice + this.calculatedPrice.fillerRecoveryPrice;

        return totalPrice = sum;
    }

    calculatedWorkPrice(): number {
        const workPrice = this.calculatedPrice.workPrice;

        return workPrice;
    }

    constructor() { }

    ngOnInit(): void {
        this.fillerRecoverySelect(0, this.fillerRecoveryList[0].price);

        this.selectSizeFormControl.valueChanges
            .subscribe(value => {
                const id = this.furnitureTypesList
                    .find(el => el.caption === this.calculatedPrice.furnitureType).id;

                const workPrice = PRICE_LIST[id].sizeList
                    .find(el => el.name === value).workPrice;


                this.calculatedPrice.furnitureSize = value;
                this.calculatedPrice.workPrice = workPrice;
                this.calculatedPrice.totalPrice = this.totalPrice;
            });
    }

    /**
     * Производит выбор типа мебели и на его основании прокидывает данные в дальнейшие шаги
     * @param index - selected item index
     */
    public selectFurnitureType(index: number): void {
        this.furnitureTypesList
            .forEach((furniture) => {
                furniture.active = false;
            });
        this.furnitureTypesList[index].active = true;

        this.calculatedPrice.furnitureType = this.furnitureTypesList[index].caption;


        const furnitureType = this.furnitureTypesList
            .find((element) => element.caption === this.calculatedPrice.furnitureType);

        const id = furnitureType.id;
        const sizeList = PRICE_LIST[id].sizeList;

        const currentElement = PRICE_LIST[id];

        console.log(this.calculatedPrice);
        console.log(currentElement.sizeList[0]);

        const workPrice = 0;
        const elementPrice = currentElement.sizeList[0].workPrice;

        this.calculatedPrice.workPrice = workPrice + elementPrice;
        this.getSizeList(sizeList);
        this.selectSizeFormControl.setValue(sizeList[0].name);
        this.currentIndex++;
    }


    /**
     * Выбор типа восстановления наполнителя
     * @param index порядкойвый индекс элемента в шаблоне, по которому произведен селект
     * @param price сумма элемента
     */
    public fillerRecoverySelect(index: number, price: number): void {
        this.fillerRecoveryList.forEach(e => e.active = false);
        this.fillerRecoveryList[index].active = true;
        this.calculatedPrice.fillerRecoveryPrice = price;
    }

    /**
     * Переключает калькулятор на следующую страницу
     */
    public clickNext(): void {
        if (!this.canClickNext) {
            return;
        }

        if (this.currentIndex === 1) {
            this.materialSelect(0, 'Ткань');
        }

        if (this.currentIndex === 3) {
            this.selectDelivery(this.deliveryList[0].price, 0);
        }

        this.currentIndex++;
    }

    /**
     * Возвращает страницу на 1 назад
     */
    public clickBack(): void {


        if (!this.canClickPrev) {
            return;
        }

        this.currentIndex--;
    }

    public getSizeList(currentArray: { name: string }[]): void {
        const array = [];
        currentArray.forEach(item => {
            array.push(item.name);
        });
        this.sizeList$.next(array);
    }

    public materialSelect(index: number, name: string): void {
        this.materialList
            .forEach((material) => {
                material.active = false;
            });
        this.materialList[index].active = true;

        const id = this.furnitureTypesList
            .find(el => el.caption === this.calculatedPrice.furnitureType).id;


        const materials = PRICE_LIST[id].sizeList
            .find((el: { name: string; }) => el.name === this.calculatedPrice.furnitureSize).materials;

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

        this.calculatedPrice.materialType = name;
        this.calculatedPrice.materialPrice = materialPrice;
    }


    /**
     * Выбор типа доставки
     */
    public selectDelivery(price: number, index: number): void {
        this.deliveryList
            .forEach((deliveryItem) => {
                deliveryItem.active = false;
            });

        this.deliveryList[index].active = true;
        this.deliveryPrice$.next(price);
    }
}
