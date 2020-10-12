import { PoufsAndBanquetsComponent } from './../../modules/padding-furniture/components/poufs-and-banquets/poufs-and-banquets.component';
import { HeadboardsComponent } from './../../modules/padding-furniture/components/headboards/headboards.component';
import { FabricCatalogPageComponent } from './../../pages/fabric-catalog-page/fabric-catalog-page.component';
import { ChairsComponent } from './../../modules/padding-furniture/components/chairs/chairs.component';
import { CornerSofasComponent } from './../../modules/padding-furniture/components/corner-sofas/corner-sofas.component';
import { GeneralPreviewComponentComponent } from './../../modules/general/components/general-preview-component/general-preview-component.component';
import { MainPageComponent } from './../../pages/main-page/main-page.component';
import { PreviewRouteInterface } from './../interfaces/preview-route.interface';
import { PaddingFurniturePageComponent } from 'src/app/pages/padding-furniture-page/padding-furniture-page.component';
import { StraightSofasComponent } from 'src/app/modules/padding-furniture/components/straight-sofas/straight-sofas.component';
import { ArmchairsComponent } from 'src/app/modules/padding-furniture/components/armchairs/armchairs.component';
import { WorkingWithGenuineLeatherPageComponent } from 'src/app/pages/working-with-genuine-leather-page/working-with-genuine-leather-page.component';
import { AboutCompanyComponent } from 'src/app/modules/about-company/about-company.component';
import { FaqComponent } from 'src/app/modules/faq/faq.component';
import { FurnitureCareComponent } from 'src/app/modules/furniture-care/furniture-care.component';
import { ShippingAndPaymentComponent } from 'src/app/modules/shipping-and-payment/shipping-and-payment.component';
import { BarsComponent } from 'src/app/modules/bars/bars.component';
import { PortfolioOfWorksComponent } from 'src/app/modules/portfolio-of-works/portfolio-of-works.component';
import { FabricCatalogComponent } from 'src/app/modules/fabric-catalog/fabric-catalog.component';
import { LeatherArmchairComponent } from 'src/app/modules/leaher-furniture/components/leather-armchair/leather-armchair.component';
import { LeatherCornerSofasComponent } from 'src/app/modules/leaher-furniture/components/leather-corner-sofas/leather-corner-sofas.component';
import { LeatherStraightSofasComponent } from 'src/app/modules/leaher-furniture/components/leather-straight-sofas/leather-straight-sofas.component';
import { LeahterChairsComponent } from 'src/app/modules/leaher-furniture/components/leahter-chairs/leahter-chairs.component';
import { LeatherPoufsAndBanquetsComponent } from 'src/app/modules/leaher-furniture/components/leather-poufs-and-banquets/leather-poufs-and-banquets.component';

const PADDING_FURNITURE_ROUTES = {
    path: 'padding-furniture',
    loadChildren: () => import('../../pages/padding-furniture-page/padding-furniture-page.module')
        .then(m => m.PaddingFurniturePageModule),
    data: {
        mark: 'padding-furniture',
        title: 'Перетяжка мягкой мебели',
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
                title: 'Перетяжка кресел',
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
                previewComponent: HeadboardsComponent,
            }
        },
        {
            path: 'poufs-and-banquets',
            component: PaddingFurniturePageComponent,
            data: {
                mark: 'poufs-and-banquets',
                title: 'Пуфы и банкетки',
                previewComponent: PoufsAndBanquetsComponent,
            }
        },
        {
            path: '',
            redirectTo: 'straigth-sofas',
            pathMatch: 'full',
        },
    ],
};

const WORKING_WITH_GENUINE_LEATHER_ROUTES = {
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
                previewComponent: LeatherStraightSofasComponent,
            }
        },
        {
            path: 'corner-sofas',
            component: PaddingFurniturePageComponent,
            data: {
                mark: 'corner-sofas',
                title: 'Перетяжка угловых диванов',
                previewComponent: LeatherCornerSofasComponent,
            }
        },
        {
            path: 'armchairs',
            component: PaddingFurniturePageComponent,
            data: {
                mark: 'armchairs',
                title: 'Перетяжка кресел',
                previewComponent: LeatherArmchairComponent,
            }
        },
        {
            path: 'chairs',
            component: PaddingFurniturePageComponent,
            data: {
                mark: 'chairs',
                title: 'Перетяжка стульев',
                previewComponent: LeahterChairsComponent,
            }
        },
        {
            path: 'poufs-and-banquets',
            component: PaddingFurniturePageComponent,
            data: {
                mark: 'poufs-and-banquets',
                title: 'Пуфы и банкетки',
                previewComponent: LeatherPoufsAndBanquetsComponent,
            }
        },
        {
            path: '',
            redirectTo: 'straigth-sofas',
            pathMatch: 'full',
        },
    ],

};

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
            PADDING_FURNITURE_ROUTES,
            WORKING_WITH_GENUINE_LEATHER_ROUTES,
            {
                path: 'portfolio-of-works',
                data: {
                    mark: 'portfolio-of-works',
                    title: 'Портфолио работ',
                    previewComponent: PortfolioOfWorksComponent,
                }
            },
            {
                path: 'fabric-catalog',
                loadChildren: () => import('../../pages/fabric-catalog-page/fabric-catalog-page.module')
                    .then(m => m.FabricCatalogPageModule),
                data: {
                    mark: 'fabric-catalog',
                    title: 'Каталог тканей',
                    previewComponent: FabricCatalogComponent,
                }
            },
            {
                path: 'bars-cafes-restaurants-offices',
                data: {
                    mark: 'bars-cafes-restaurants-offices',
                    title: 'Бары, кафе, рестораны, офисы',
                    previewComponent: BarsComponent,
                }
            },
            {
                path: 'shipping-and-payment',
                data: {
                    mark: 'shipping-and-payment',
                    title: 'Доставка и оплата',
                    previewComponent: ShippingAndPaymentComponent,
                }
            },
            {
                path: 'about-company',
                data: {
                    mark: 'about-company',
                    title: 'О компании',
                    previewComponent: AboutCompanyComponent,
                }
            },
            {
                path: 'furniture-care',
                loadChildren: () => import('../../pages/furniture-care-page/furniture-care-page.module')
                    .then(m => m.FurnitureCarePageModule),
                data: {
                    mark: 'furniture-care',
                    title: 'Уход за мебелью',
                    previewComponent: FurnitureCareComponent,
                }
            },
            {
                path: 'question-answer',
                data: {
                    mark: 'question-answer',
                    title: 'вопрос - ответ',
                    previewComponent: FaqComponent,
                }
            },
        ]
    }
];
