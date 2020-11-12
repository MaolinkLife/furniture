import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface FabricExampleInterface {
    image: string;
    config?: object;
    slot?: string;
}

interface FabricInterface {
    name: string;
    description: string[];
    benefits: string[];
    disadvantages: string[];
    examples: FabricExampleInterface[];
}

const FABRICS: FabricInterface[] = [
    {
        name: 'Жаккард',
        description: ['Жаккард - это особое сложное переплетение ниток, позволяющее создавать рельефные узоры в структуре ткани, привлекает своим разнообразием узоров и расцветок, выглядит очень шикарно'],
        benefits: [
            'Очень прочен',
            'Наличие уникадьных узоров на ткани',
            'Долговечен и износостоек',
            'Рельефная текстура',
        ],
        disadvantages: [
            'Возможна только сухая чистка',
            'Цена',
        ],
        examples: [
            {
                image: '../../../assets/images/fabric-catalog/jackard/jackard1.jpg',
                config: {
                    'grid-column': '1 / span 2',
                }
            },
            {
                image: '../../../assets/images/fabric-catalog/jackard/jackard2.jpg',
                config: {
                    'grid-column': '3 / span 2',
                }
            },
        ],
    },
    {
        name: 'Велюр',
        description: [
            'Велюр – популярный материал для обивки мебели. Привлекает своей невероятной мягкостью и бархатистой текстурой, которая придает интерьеру оригинальность.',
            'По эксплуатационным характеристикам считается одним из лучших.Подобная обивка долго сохраняет первозданный вид, прочная и износостойкая, нетребовательна в уходе.'],
        benefits: [
        ],
        disadvantages: [
            'Накапливает пыль',
            'Притягивает шерсть домашних питомцев ',
            'Требует бережного отношения, поскольку жирные пятна очень сложно удалить с поверхности',
            'Качественный материал значительно дороже аналогов',
        ],
        examples: [
            {
                image: '../../../assets/images/fabric-catalog/velur/velur1.jpg',
                config: {
                    'grid-column': '1 / span 2',
                }
            },
            {
                image: '../../../assets/images/fabric-catalog/velur/velur2.jpg',
                config: {
                    'grid-column': '3 / span 2',
                }
            },
        ],
    },
    {
        name: 'Шенилл',
        description: [
            'Шенилл прочный, приятный на ощупь, устойчив к загрязнениям и повреждением. Легкий в уходе, достаточно почистить пылесосом или щеткой.'
        ],
        benefits: [
        ],
        disadvantages: [
        ],
        examples: [
            {
                image: '../../../assets/images/fabric-catalog/shenshil/shenshil1.jpg',
                config: {
                    'grid-column': '2 / span 2',
                }
            },
        ],
    },
    {
        name: 'Тканный нубук',
        description: ['Изделия, выполненные из этого полотна, выглядят очень стильно, дорого и презентабельно. Материал отличается стойкостью к износу, в том числе в экстремальных условиях, что является его большим преимуществом. Однако нубук считается деликатным текстилем, который нуждается в постоянном бережном уходе.'],
        benefits: [
            'Эффектный внешний вид',
            'Водонепроницаемость',
            'Отличные теплоизоляционные свойства',
            'Приятная фактура',
            'Легкость',
            'Комфорт в использовании',
            'Стойкость к истиранию'
        ],
        disadvantages: [
            'Цена',
            'Необходим специальный уход',
            'Загрязнения трудно удаляются с поверхности',
        ],
        examples: [
            {
                image: '../../../assets/images/fabric-catalog/nubuk/nubuk1.jpg',
                config: {
                    'grid-column': '1 / span 2',
                }
            },
            {
                image: '../../../assets/images/fabric-catalog/nubuk/nubuk2.jpg',
                config: {
                    'grid-column': '3 / span 2',
                }
            },
        ],
    },
    {
        name: 'Микрофибра',
        description: ['Это синтетический материал, который наделен всеми достоинствами натуральных тканей. На этой мебели можно долго не увидеть выцветания и потёртостей, так же на ней практически незаметны следы от воды. Микрофибра легко моется и быстро сохнет.'],
        benefits: [
            'Износостойкость. Ткань для обивки дивана микрофибра не выгорит, не изотрется, не разорвется, не будет линять',
            'Гипоаллергенность. Практически никогда не вызывает у людей и домашних животных аллергических реакций',
            'Большой выбор цвета и оттенков ',
            'Комфорт использования. Обивочная ткань микрофибра приятна на ощупь – она нежная, мягкая, идеально подходит для детей',
        ],
        disadvantages: [
            'К недостаткам можно отнести лишь опасность контакта с нагревательными элементами, что может привести к утрате материалом его эксплуатационных характеристик',
        ],
        examples: [
            {
                image: '../../../assets/images/fabric-catalog/microfibra/microfibra1.jpg',
                config: {
                    'grid-column': '2 / span 2',
                }
            },
        ],
    },
    {
        name: 'Натуральная кожа',
        description: ['Натуральная кожа придаст изделию строгий и в то же время стильный вид, хорошо подходит для офисов, гостиных в классическом стиле. Экологически чистый, прочный материал, не требует особого ухода'],
        benefits: [
        ],
        disadvantages: [
            'Боится повреждений',
        ],
        examples: [
            {
                image: '../../../assets/images/fabric-catalog/nature-leather/nature-leather1.jpg',
                config: {
                    'grid-column': '2 / span 2',
                }
            },
        ],
    },
    {
        name: 'Искусственная кожа',
        description: ['Искусственная кожа — это полимерные ткани, имитирующие натуральный материал'],
        benefits: [
            'Износостойкость — первоначальный вид изделий из кожзама сохраняется в течение длительного периода эксплуатации',
            'Более высокая прочность по сравнению с натуральным аналогом',
            'Морозостойкость',
            'Эластичность',
            'Легкость очистки',
            'Сохранение насыщенности цвета даже под действием солнечных лучей',
            'Гипоаллергенность, отсутствие неприятных запахов',
            'Доступнаю стоимость',
            'Широкий ассортимент цветовой гаммы',
            'Для сохранности внешнего вида и эксплуатационных качеств требуется своевременная обработка специальными средствами'
        ],
        disadvantages: [
        ],
        examples: [
            {
                image: '../../../assets/images/fabric-catalog/artificial-leather/artificial-leather1.jpg',
                config: {
                    'grid-column': '2 / span 2',
                }
            },
        ],
    },
    {
        name: 'Гобелен',
        description: ['Гобелен способен придать мебели роскошный вид, изготавливается из чистого хлопка или с добавлением синтетики'],
        benefits: [
            'Многообразие оттенков и цветовой гаммы',
            'Красота узоров',
            'Уникальная фактурность',
            'Долговечность',
        ],
        disadvantages: [
            'Тяжеловесность',
            'Жесткость',
        ],
        examples: [
            {
                image: '../../../assets/images/fabric-catalog/gobelen/gobelen1.jpg',
                config: {
                    'grid-column': '2 / span 2',
                }
            },
        ],
    },
    {
        name: 'Флок',
        description: [
            'Диваны из флока отличаются не только привлекательным внешним видом, но и практичностью. Данную ткань также называют "антикоготь". Она устойчива в отношении моющих компонентов и когтей животных, к ней не пристает шерсть. Материал является гипоаллергенным, что важно для людей, имеющих повышенную чувствительность к раздражителям.',
            'Флок приятный на ощупь и мягкий.Его можно стирать при загрязнениях.Это делается достаточно просто.Нужно только нанести на губку чистящее средство и аккуратно протереть поверхность. При мытье рисунок на материале не выцветает, поэтому еще одна особенность материала – это долговечность.',
            'Важно учесть: флок не переносит средств, в состав которых входит спирт. Они способствуют повреждению полотна'],
        benefits: [

        ],
        disadvantages: [
        ],
        examples: [
            {
                image: '../../../assets/images/fabric-catalog/flock/flock1.jpg',
                config: {
                    'grid-column': '2 / span 2',
                },
            },
        ],
    },
    {
        name: 'Флок на флоке',
        description: [
            'Отличается от обычного флока только дополнительным слоем благодаря которому появляется возможность создавать узоры и рисунки на поверхности ткани.',
            'Диваны из флока отличаются не только привлекательным внешним видом, но и практичностью.Данную ткань также называют "антикоготь".Она устойчива в отношении моющих компонентов и когтей животных, к ней не пристает шерсть.Материал является гипоаллергенным, что важно для людей, имеющих повышенную чувствительность к раздражителям.',
            'Флок приятный на ощупь и мягкий.Его можно стирать при загрязнениях.Это делается достаточно просто.Нужно только нанести на губку чистящее средство и аккуратно протереть поверхность.При мытье рисунок на материале не выцветает, поэтому еще одна особенность материала – это долговечность.',
            'Важно учесть: флок не переносит средств, в состав которых входит спирт. Они способствуют повреждению полотна'],
        benefits: [
        ],
        disadvantages: [
        ],
        examples: [
            {
                image: '../../../assets/images/fabric-catalog/flock-on-flock/flock-on-flock1.jpg',
                config: {
                    'grid-column': '1 / span 2',
                }
            },
            {
                image: '../../../assets/images/fabric-catalog/flock-on-flock/flock-on-flock2.jpg',
                config: {
                    'grid-column': '3 / span 2',
                }
            },
        ],
    },
    {
        name: 'Бархат',
        description: [
            'Бархат изготавливают из хлопковых, шелковых и шерстяных нитей. Он имеет высокий ворс, который еще называют плюшем.',
            'Будучи дорогой тканью натурального происхождения, бархат имеет большое количество достоинств: не вызывает аллергии и раздражений кожи; не имеет способности растягиваться; хорошо держит тепло; не покрывается пылью; превосходно драпируется, переливается и блестит; имеет длительный срок стойкости; обладает благородным видом.'],
        benefits: [
        ],
        disadvantages: [
            'Нуждается в тщательном уходе',
            'Цена'
        ],
        examples: [
            {
                image: '../../../assets/images/fabric-catalog/barhat/barhat1.jpg',
                config: {
                    'grid-column': '1 / span 2',
                }
            },
            {
                image: '../../../assets/images/fabric-catalog/barhat/barhat2.jpg',
                config: {
                    'grid-column': '3 / span 2',
                }
            },
        ],
    },
];

@Component({
    selector: 'app-fabric-catalog',
    templateUrl: './fabric-catalog.component.html',
    styleUrls: ['./fabric-catalog.component.less'],
})
export class FabricCatalogComponent implements OnInit {

    viewMode$: BehaviorSubject<string> = new BehaviorSubject<string>('default');

    fabrics: FabricInterface[] = FABRICS;

    currentFabric$: BehaviorSubject<FabricInterface> = new BehaviorSubject<FabricInterface>(null);

    examples$: BehaviorSubject<FabricExampleInterface[]> = new BehaviorSubject<FabricExampleInterface[]>(null);

    constructor() { }

    ngOnInit(): void {
    }


    itemClick(itemName: string): void {
        const targetFabric = this.fabrics.find((el: FabricInterface) => el.name === itemName);

        if (targetFabric) {
            this.currentFabric$.next(targetFabric);
            this.viewMode$.next('detail');
        } else {
            this.currentFabric$.next(null);
        }

        console.log(targetFabric);

        this.examples$.next(targetFabric.examples);
    }

    closePopup(): void {
        this.viewMode$.next('default');
    }

}
