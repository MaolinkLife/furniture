
import { FurnitureCarePageComponent } from './../../pages/furniture-care-page/furniture-care-page.component';
import { FabricCatalogPageComponent } from './../../pages/fabric-catalog-page/fabric-catalog-page.component';
import { ChairsComponent } from './../../modules/padding-furniture/components/chairs/chairs.component';
import { CornerSofasComponent } from './../../modules/padding-furniture/components/corner-sofas/corner-sofas.component';
import { PaddingFurniturePreviewComponent } from './../../modules/padding-furniture/components/padding-furniture-preview/padding-furniture-preview.component';
import { GeneralPreviewComponentComponent } from './../../modules/general/components/general-preview-component/general-preview-component.component';
import { MainPageComponent } from './../../pages/main-page/main-page.component';
import { PreviewRouteInterface } from './../interfaces/preview-route.interface';
import { PaddingFurniturePageComponent } from 'src/app/pages/padding-furniture-page/padding-furniture-page.component';
import { StraightSofasComponent } from 'src/app/modules/padding-furniture/components/straight-sofas/straight-sofas.component';
import { ArmchairsComponent } from 'src/app/modules/padding-furniture/components/armchairs/armchairs.component';
import { WorkingWithGenuineLeatherPageComponent } from 'src/app/pages/working-with-genuine-leather-page/working-with-genuine-leather-page.component';

export const ROUTES: PreviewRouteInterface[] = [
    {
        path: '',
        component: MainPageComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('../../pages/general-page/general-page.module').then(m => m.GeneralPageModule),
                data: {
                    mark: '',
                    title: '',
                    previewComponent: GeneralPreviewComponentComponent,
                },
            },
            {
                path: 'padding-furniture',
                loadChildren: () => import('../../pages/padding-furniture-page/padding-furniture-page.module')
                    .then(m => m.PaddingFurniturePageModule),
                data: {
                    mark: 'padding-furniture',
                    title: 'Перетяжка мягкой мебели',
                    previewComponent: PaddingFurniturePreviewComponent,
                },
                children: [
                    {
                        path: 'straigth-sofas',
                        component: PaddingFurniturePageComponent,
                        data: {
                            mark: 'straigth-sofas',
                            title: 'Перетяжка прямых диванов',
                            previewComponent: StraightSofasComponent,
                        }
                    },
                    {
                        path: 'corner-sofas',
                        component: PaddingFurniturePageComponent,
                        data: {
                            mark: 'corner-sofas',
                            title: 'Перетяжка угловых диванов',
                            previewComponent: CornerSofasComponent,
                        }
                    },
                    {
                        path: 'armchairs',
                        component: PaddingFurniturePageComponent,
                        data: {
                            mark: 'armchairs',
                            title: 'Перетяжка угловых диванов',
                            previewComponent: ArmchairsComponent,
                        }
                    },
                    {
                        path: 'chairs',
                        component: PaddingFurniturePageComponent,
                        data: {
                            mark: 'chairs',
                            title: 'Перетяжка стульев',
                            previewComponent: ChairsComponent,
                        }
                    },
                    {
                        path: 'headboards',
                        component: PaddingFurniturePageComponent,
                        data: {
                            mark: 'headboards',
                            title: 'Перетяжка изголовья кроватей',
                            previewComponent: ChairsComponent,
                        }
                    },
                    {
                        path: 'poufs-and-banquets',
                        component: PaddingFurniturePageComponent,
                        data: {
                            mark: 'poufs-and-banquets',
                            title: 'Пуфы и банкетки',
                            previewComponent: ChairsComponent,
                        }
                    },
                    {
                        path: '',
                        redirectTo: 'straigth-sofas',
                        pathMatch: 'full',
                    },
                ],
            },
            {
                path: 'working-with-genuine-leather',
                // tslint:disable-next-line: max-line-length
                loadChildren: () => import('../../pages/working-with-genuine-leather-page/working-with-genuine-leather-page.module')
                    .then(m => m.WorkingWithGenuineLeatherPageModule),
                data: {
                    mark: 'working-with-genuine-leather',
                    title: 'Работа с натуральной кожей',
                    previewComponent: WorkingWithGenuineLeatherPageComponent,
                },
                children: [
                    {
                        path: 'straigth-sofas',
                        component: PaddingFurniturePageComponent,
                        data: {
                            mark: 'straigth-sofas',
                            title: 'Перетяжка прямых диванов',
                            previewComponent: StraightSofasComponent,
                        }
                    },
                    {
                        path: 'corner-sofas',
                        component: PaddingFurniturePageComponent,
                        data: {
                            mark: 'corner-sofas',
                            title: 'Перетяжка угловых диванов',
                            previewComponent: CornerSofasComponent,
                        }
                    },
                    {
                        path: 'armchairs',
                        component: PaddingFurniturePageComponent,
                        data: {
                            mark: 'armchairs',
                            title: 'Перетяжка угловых диванов',
                            previewComponent: ArmchairsComponent,
                        }
                    },
                    {
                        path: 'chairs',
                        component: PaddingFurniturePageComponent,
                        data: {
                            mark: 'chairs',
                            title: 'Перетяжка стульев',
                            previewComponent: ChairsComponent,
                        }
                    },
                    {
                        path: 'headboards',
                        component: PaddingFurniturePageComponent,
                        data: {
                            mark: 'headboards',
                            title: 'Перетяжка изголовья кроватей',
                            previewComponent: ChairsComponent,
                        }
                    },
                    {
                        path: 'poufs-and-banquets',
                        component: PaddingFurniturePageComponent,
                        data: {
                            mark: 'poufs-and-banquets',
                            title: 'Пуфы и банкетки',
                            previewComponent: ChairsComponent,
                        }
                    },
                    {
                        path: '',
                        redirectTo: 'straigth-sofas',
                        pathMatch: 'full',
                    },
                ],

            },
            {
                path: 'portfolio-of-works',
                data: {
                    mark: 'portfolio-of-works',
                    title: 'Портфолио работ',
                }
            },
            {
                path: 'fabric-catalog',
                component: FabricCatalogPageComponent,
                data: {
                    mark: 'fabric-catalog',
                    title: 'Каталог тканей',
                }
            },
            {
                path: 'bars-cafes-restaurants-offices',
                data: {
                    mark: 'bars-cafes-restaurants-offices',
                    title: 'Бары, кафе, рестораны, офисы',
                }
            },
            {
                path: 'shipping-and-payment',
                data: {
                    mark: 'shipping-and-payment',
                    title: 'Доставка и оплата',
                }
            },
            {
                path: 'about-company',
                data: {
                    mark: 'about-company',
                    title: 'О компании',
                }
            },
            {
                path: 'furniture-care',
                component: FurnitureCarePageComponent,
                data: {
                    mark: 'furniture-care',
                    title: 'Уход за мебелью',
                }
            },
            {
                path: 'question-answer',
                data: {
                    mark: 'question-answer',
                    title: 'вопрос - ответ',
                }
            },
        ]
    }
];
