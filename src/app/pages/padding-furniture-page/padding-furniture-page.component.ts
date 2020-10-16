import { element } from 'protractor';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

const EXAMPLES_LIST = [
    {
        id: 'straigth-sofas',
        list: [
            {
                first: {
                    image: '../../../assets/images/examples/sofas/example-before1.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/sofas/example-after1.jpg',
                }
            },
            {
                first: {
                    image: '../../../assets/images/examples/sofas/example-before2.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/sofas/example-after2.jpg',
                }
            },
            {
                first: {
                    image: '../../../assets/images/examples/sofas/example-before3.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/sofas/example-after3.jpg',
                }
            },
            {
                first: {
                    image: '../../../assets/images/examples/sofas/example-before4.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/sofas/example-after4.jpg',
                }
            },
        ],
    },
    {
        id: 'corner-sofas',
        list: [
            {
                first: {
                    image: '../../../assets/images/examples/corner-sofas/example-before1.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/corner-sofas/example-after1.jpg',
                }
            },
            {
                first: {
                    image: '../../../assets/images/examples/corner-sofas/example-before2.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/corner-sofas/example-after2.jpg',
                }
            },
        ],
    },
    {
        id: 'armchairs',
        list: [
            {
                first: {
                    image: '../../../assets/images/examples/armchairs/example-before2.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/armchairs/example-after2.jpg',
                }
            },
            {
                first: {
                    image: '../../../assets/images/examples/armchairs/example-before3.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/armchairs/example-after3.jpg',
                }
            },
            {
                first: {
                    image: '../../../assets/images/examples/armchairs/example-before4.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/armchairs/example-after4.jpg',
                }
            },
            {
                first: {
                    image: '../../../assets/images/examples/armchairs/example-before5.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/armchairs/example-after5.jpg',
                }
            },
        ],
    },
    {
        id: 'chairs',
        list: [
            // {
            //     first: {
            //         image: '../../../assets/images/examples/chairs/expl-a1.jpg',
            //     },
            //     second: {
            //         image: '../../../assets/images/examples/chairs/expl-b1.jpg',
            //     }
            // },
            {
                first: {
                    caption: 'до',
                    image: '../../../assets/images/examples/chairs/expl-a2.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/chairs/expl-b2.jpg',
                    caption: 'после',
                }
            },
            {
                first: {
                    image: '../../../assets/images/examples/chairs/expl-a3.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/chairs/expl-b3.jpg',
                }
            },
            {
                first: {
                    image: '../../../assets/images/examples/chairs/expl-a4.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/chairs/expl-b4.jpg',
                }
            },
            {
                first: {
                    image: '../../../assets/images/examples/chairs/expl-a5.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/chairs/expl-b5.jpg',
                }
            },
        ],
    },
    {
        id: 'poufs-and-banquets',
        list: [
            // {
            //     first: {
            //         image: '../../../assets/images/examples/chairs/expl-a1.jpg',
            //     },
            //     second: {
            //         image: '../../../assets/images/examples/chairs/expl-b1.jpg',
            //     }
            // },
            {
                first: {
                    image: '../../../assets/images/examples/chairs/expl-a2.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/chairs/expl-b2.jpg',
                }
            },
            {
                first: {
                    image: '../../../assets/images/examples/chairs/expl-a3.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/chairs/expl-b3.jpg',
                }
            },
            {
                first: {
                    image: '../../../assets/images/examples/chairs/expl-a4.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/chairs/expl-b4.jpg',
                }
            },
            {
                first: {
                    image: '../../../assets/images/examples/chairs/expl-a5.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/chairs/expl-b5.jpg',
                }
            },
        ],
    },
];

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'padding-furniture-page',
    templateUrl: './padding-furniture-page.template.html',
    styleUrls: ['./padding-furniture-page.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaddingFurniturePageComponent implements OnInit {


    examples$: BehaviorSubject<object[]> = new BehaviorSubject<object[]>([]);

    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        const id = this.activatedRoute.snapshot.data.mark;

        this.examples$
            .next(EXAMPLES_LIST
                .find(example => example.id === id).list);

    }

}
