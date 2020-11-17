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
                    image: '../../../assets/images/examples/sofas/expl-b1.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/sofas/expl-a1.jpg',
                }
            },
            {
                first: {
                    image: '../../../assets/images/examples/sofas/expl-b2.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/sofas/expl-a2.jpg',
                }
            },
            {
                first: {
                    image: '../../../assets/images/examples/sofas/expl-b3.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/sofas/expl-a3.jpg',
                }
            },
            {
                first: {
                    image: '../../../assets/images/examples/sofas/expl-b4.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/sofas/expl-a4.jpg',
                }
            },
            {
                first: {
                    image: '../../../assets/images/examples/sofas/expl-b5.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/sofas/expl-a5.jpg',
                }
            },
            {
                first: {
                    image: '../../../assets/images/examples/sofas/expl-b6.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/sofas/expl-a6.jpg',
                }
            },
            {
                first: {
                    image: '../../../assets/images/examples/sofas/expl-b7.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/sofas/expl-a7.jpg',
                }
            },
            {
                first: {
                    image: '../../../assets/images/examples/sofas/expl-b8.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/sofas/expl-a8.jpg',
                }
            },
            {
                first: {
                    image: '../../../assets/images/examples/sofas/expl-b9.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/sofas/expl-a9.jpg',
                }
            },
        ],
    },
    {
        id: 'corner-sofas',
        list: [

            {
                first: {
                    image: '../../../assets/images/examples/corner-sofas/expl-a2.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/corner-sofas/expl-b2.jpg',
                }
            },
            {
                first: {
                    image: '../../../assets/images/examples/corner-sofas/expl-a3.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/corner-sofas/expl-b3.jpg',
                }
            },
            {
                first: {
                    image: '../../../assets/images/examples/corner-sofas/expl-a4.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/corner-sofas/expl-b4.jpg',
                }
            },
            {
                first: {
                    image: '../../../assets/images/examples/corner-sofas/expl-a5.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/corner-sofas/expl-b5.jpg',
                }
            },
            {
                first: {
                    image: '../../../assets/images/examples/corner-sofas/expl-a1.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/corner-sofas/expl-b1.jpg',
                }
            },
        ],
    },
    {
        id: 'armchairs',
        list: [
            {
                first: {
                    image: '../../../assets/images/examples/armchairs/expl-b1.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/armchairs/expl-a1.jpg',
                }
            },
            {
                first: {
                    image: '../../../assets/images/examples/armchairs/expl-b2.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/armchairs/expl-a2.jpg',
                }
            },
            {
                first: {
                    image: '../../../assets/images/examples/armchairs/expl-b3.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/armchairs/expl-a3.jpg',
                }
            },
            {
                first: {
                    image: '../../../assets/images/examples/armchairs/expl-b4.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/armchairs/expl-a4.jpg',
                }
            },
            {
                first: {
                    image: '../../../assets/images/examples/armchairs/expl-b5.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/armchairs/expl-a5.jpg',
                }
            },
            {
                first: {
                    image: '../../../assets/images/examples/armchairs/expl-b6.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/armchairs/expl-a6.jpg',
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
            {
                first: {
                    image: '../../../assets/images/examples/chairs/expl-b6.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/chairs/expl-a6.jpg',
                }
            },
            {
                first: {
                    image: '../../../assets/images/examples/chairs/expl-b7.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/chairs/expl-a7.jpg',
                }
            },
        ],
    },
    {
        id: 'headboards',
        list: [

            {
                first: {
                    caption: 'до',
                    image: '../../../assets/images/examples/headboards/expl-b1.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/headboards/expl-a1.jpg',
                    caption: 'после',
                }
            },
            {
                first: {
                    caption: 'до',
                    image: '../../../assets/images/examples/headboards/expl-b2.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/headboards/expl-a2.jpg',
                    caption: 'после',
                }
            },
            {
                first: {
                    caption: 'до',
                    image: '../../../assets/images/examples/headboards/expl-b3.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/headboards/expl-a3.jpg',
                    caption: 'после',
                }
            },
            {
                first: {
                    caption: 'до',
                    image: '../../../assets/images/examples/headboards/expl-b4.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/headboards/expl-a4.jpg',
                    caption: 'после',
                }
            },

        ],
    },
    {
        id: 'poufs-and-banquets',
        list: [
            {
                first: {
                    image: '../../../assets/images/examples/poufs/expl-b1.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/poufs/expl-a1.jpg',
                }
            },
            {
                first: {
                    image: '../../../assets/images/examples/poufs/expl-b2.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/poufs/expl-a2.jpg',
                }
            },
            {
                first: {
                    image: '../../../assets/images/examples/poufs/expl-b3.jpg',
                },
                second: {
                    image: '../../../assets/images/examples/poufs/expl-a3.jpg',
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
})
export class PaddingFurniturePageComponent implements OnInit {


    examples$: BehaviorSubject<object[]> = new BehaviorSubject<object[]>([]);

    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        const id = this.activatedRoute.snapshot.data.mark;

        setTimeout(() => {

            const scrollPos = window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;

            // seems like the author of linked code source had a logic bug here
            // if you need to apply this, probably you will want to check scrollPos > 1

            // I keep the comment above - although it is wrong. You should 
            // not scroll, once the user already interacted with the page.
            // For further information, see the linked article below.
            if (scrollPos < 1) {
                window.scrollTo(0, 1);
            }
        }, 0);

        this.examples$
            .next(EXAMPLES_LIST
                .find(example => example.id === id).list);

    }

}
