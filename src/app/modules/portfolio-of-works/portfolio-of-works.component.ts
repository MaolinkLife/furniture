import { BehaviorSubject } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-portfolio-of-works',
    templateUrl: './portfolio-of-works.component.html',
    styleUrls: ['./portfolio-of-works.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioOfWorksComponent implements OnInit {

    straightSofas = [
        {
            first: {
                image: '../../../assets/images/examples/sofas/expl-b1.jpg',
            },
            second: {
                image: '../../../assets/images/examples/sofas/expl-a1.jpg',
            },
            third: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/91960360_3020831041306464_8014163447281210462_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=hZd9u_sV9YAAX9ucj9M&tp=18&oh=ed14338e4378f64ddde38e3267eec37f&oe=5FCA736B',
            },
            four: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/91976470_2919887508058709_6568050372392447977_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=5zJykHiDZVUAX_7wjA8&tp=18&oh=d996c24447075a27c5ce8b1281c37f8c&oe=5FCB3FD1',
            },
        },
        {
            first: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/82540408_179221093289453_2780510094984587103_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=_XQnKA-l1sYAX_hJiYX&tp=18&oh=2d86e65b615ca5575f89096335039416&oe=5FC84F29',
            },
            second: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/81173893_628169687936161_5080625594206555774_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=hxedc65ONCoAX8hOpDX&tp=18&oh=562786ab43860489561001989329e344&oe=5FC82DDC',
            },
            third: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/95570462_261118171732916_1677649823605752440_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=1oG_qfsHSAwAX9ehtM4&tp=18&oh=ed8823754824bba328fd3d650678cc12&oe=5FC9D6F5',
            },
            four: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/95345859_356916005267749_5640416842280067641_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Q2voea1n9XwAX9kmMAp&tp=18&oh=afa61e33c6f771dd2b3a10e1e829a40c&oe=5FC7D873',
            },
        },
        {
            first: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/117482559_300529987953854_9070805438253506474_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=H8XjZsmggdkAX9JgeFx&tp=18&oh=31d9ca4531da06614b5be937429a9930&oe=5FC96869',
            },
            second: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/117183083_119505572955929_2512042588231220987_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=cETHYHZSC7cAX__Vson&tp=18&oh=ecef2c88a348ded9671f9649d0549f97&oe=5FC9C558',
            },
            third: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/100979647_3170613809671215_7339596045693550056_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=Ua74KaP4sgoAX_zBFRW&_nc_tp=15&oh=722ddac8aae5e2965302e311f4cbb5ec&oe=5FC99007',
            },
            four: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/101299517_250414512732053_6308519712035470206_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=SUqivBJXdPgAX8uFd75&tp=18&oh=958583c631398e8faa4e1ae339888dd9&oe=5FC9A35C',
            },
        },
        {
            first: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/121282120_397420724755126_5200543912112243853_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=ZZ5hvSE_LJ0AX87UBzr&tp=18&oh=96413de3434cb0ead1a04dde6d6488ec&oe=5FCB4B98',
            },
            second: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/121265524_365989347925403_7236923273721259162_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=J6YJBShVqVsAX8V60xu&tp=18&oh=dfddc9d3d426bdc4bd0d15a6e2472aff&oe=5FC86AC3',
            },
            third: {
                image: '../../../assets/images/examples/sofas/expl-b8.jpg',
            },
            four: {
                image: '../../../assets/images/examples/sofas/expl-a8.jpg',
            },
        },
        {
            first: {
                image: '../../../assets/images/examples/sofas/expl-b9.jpg',
            },
            second: {
                image: '../../../assets/images/examples/sofas/expl-a9.jpg',
            },
        },
    ];

    cornerSofas = [
        {
            first: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/106437217_841406542931864_6068788244676266271_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=7fv1eQLf6p8AX_9-Ogx&tp=18&oh=b0bf384596680a3bf567678def4452eb&oe=5FC8E110',
            },
            second: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/106024435_155712232714085_4390559826379434361_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=gwkcpZxcFNkAX9Y8P_V&tp=18&oh=199fa315335204f1feff9342e7494a67&oe=5FC85028',
            },
            third: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/119054471_173716597575535_7293764389944272631_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=0MKhgygXRLgAX-KZt9i&tp=18&oh=c3ee9b9a1eb14cff75b4a6383f29c7d2&oe=5FC99558',
            },
            four: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/118916025_328274461624838_1581848690958207905_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=2VKB8FpkmWQAX9W7kru&tp=18&oh=7316fd11b1371b6e65e2ea48925008fe&oe=5FCB61AD',
            },
        },
        {
            first: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/121091298_261499581833623_3279450000241381265_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=Fmbcer1TaFYAX-VY04Y&_nc_tp=15&oh=d781cec6c9c0175b6ac495048a012672&oe=5FC8C643',
            },
            second: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/121136202_185898756331129_4759086496400182524_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=-Tz5h7lSuvwAX9o3NFv&tp=18&oh=a556325e28c5e216b11a27151fbc1706&oe=5FCB1BAC',
            },
            third: {
                image: '../../../assets/images/examples/corner-sofas/expl-a4.jpg',
            },
            four: {
                image: '../../../assets/images/examples/corner-sofas/expl-b4.jpg',
            },
        },
        {
            first: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/106160370_1154369828256618_7691220255596023744_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=Kz2uWaGLhxUAX9NZm6G&tp=18&oh=0f177418ae31941a99ee20072e0a3aa6&oe=5FCB64CF',
            },
            second: {
                image: '../../../assets/images/examples/corner-sofas/expl-b5.jpg',
            },
            third: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/122633058_185557903037454_670856664746162855_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=_11Gr-PxOLQAX9P3dGX&tp=18&oh=e4a275d06e934d7388ef45591dabf105&oe=5FCA97EA',
            },
            four: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/122718432_825632787977540_1761560722084556156_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=g4o9uQ1YBhEAX_P5l0w&tp=18&oh=611b0bd1bd328ceafa90411b89136c56&oe=5FC945F8',
            },
        },
    ];

    armchairs = [
        {
            first: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/121166906_1726396484203894_3164780200772174200_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=DC13Ar7RCl0AX-maAQc&tp=19&oh=1497c8a031fc9bd86dfd9efeaa7b7aea&oe=5FC7903A',
            },
            second: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/121192202_331522271277445_7460880205397443002_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=krQeWcAZiesAX8FetJV&tp=19&oh=eb70ce7262b16a98dc84fb239a70a898&oe=5FC850C4',
            },
            third: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/117269806_299404361167716_8857215427971887512_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=-cdMsSikVE4AX8KLXmh&tp=18&oh=17cb4a3517170d948cbdd0036af48e82&oe=5FCA5973',
            },
            four: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/117259247_180663886803974_2598349364233678736_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=3IOorh67UsQAX8cnDU3&tp=18&oh=08acc75e87e8a64684aa1ecc143de2af&oe=5FC7B002',
            },
        },
        {
            first: {
                image: '../../../assets/images/examples/armchairs/expl-b3.jpg',
            },
            second: {
                image: '../../../assets/images/examples/armchairs/expl-a3.jpg',
            },
            third: {
                image: '../../../assets/images/examples/armchairs/expl-b4.jpg',
            },
            four: {
                image: '../../../assets/images/examples/armchairs/expl-a4.jpg',
            },
        },
        {
            first: {
                image: '../../../assets/images/examples/armchairs/expl-b5.jpg',
            },
            second: {
                image: '../../../assets/images/examples/armchairs/expl-a5.jpg',
            },
            third: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/98731647_2680534542263904_6610720688336530411_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=DmgH4ASLClQAX-JPns6&tp=18&oh=5e15964d4b42d18a8bd3dbf8d8243312&oe=5FC8F730',
            },
            four: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/98162799_267333807745577_110349188379650268_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=RzTx_I-luG0AX8MuTNa&tp=18&oh=cc1b481e6cd788df9e1f8a33fed88f57&oe=5FC85A27',
            },
        },
        {
            first: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/109560762_702061590341684_2925005571610906218_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=7bJA2Bm0SW0AX-KH7x1&tp=18&oh=018fafe759a7ca5d6bed393bfcaf28a6&oe=5FC82266',
            },
            second: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/109519129_219294689259519_4569138993425157125_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=bWUwJULGQDYAX9vhb1l&tp=18&oh=0be039d6b999654a3ba60e3980048462&oe=5FC81A02',
            },
            third: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/105968168_701531170685245_7712756489047564568_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=lKP1QMdMtKcAX9tzZfm&tp=18&oh=10c918c5699cf4a9ed0bee129922026f&oe=5FC95197',
            },
            four: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/105976658_356855348612090_6952823429067406923_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=MHddEyZVAR4AX9zNgmq&tp=18&oh=ce705b867b3319fe0456b1d6603eca8f&oe=5FC89592',
            },
        },
        {
            first: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/94022306_161505538667720_2975709378230309315_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=7oWusN_SK78AX-f4xzY&tp=18&oh=298b39439ade01eaebf364de1428dd1c&oe=5FCA54F6',
            },
            second: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/94482806_730986790770846_2182322236006012120_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=0DwM-JW2h3UAX-zsYot&tp=18&oh=7a0edf469632b8824896568f8cecbb02&oe=5FC8AE05',
            },
            third: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/68764422_1229276577256885_6540165150979488696_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=ZfT-4tQIrAoAX-4dJkk&tp=19&oh=ae663bf585f2dca0742f2071d9c55199&oe=5FCA2499',
            },
            four: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/69213753_2605923442761346_8286048200368332343_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=8dD75f9rWIoAX8Ij0Oe&tp=19&oh=fb79ee05f7bc9e3ab98be58f7d306bf7&oe=5FCB6395',
            },
        },
        {
            first: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/66658994_1613534302116192_4638403799265032151_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=od63jTwDJqoAX_6p42f&tp=18&oh=50865d7294e3aa1e01ea1d2ceed0b7a4&oe=5FC8C454',
            },
            second: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/66511892_416851859172016_4889810355671426989_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=WIOdDXoe_X8AX9XtIHm&tp=18&oh=ecf9c2551be9c71f19fb02255ab79c42&oe=5FCA35F2',
            },
            third: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/55903545_281389192760091_7928838381263726893_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=bco3DvCCtkQAX8Ieeob&tp=18&oh=e9ed9872ba23be28dbea9426dcd3b3b4&oe=5FC99F87',
            },
            four: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/53236503_318767035503047_8951822807233087222_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=HrJFugjYbcIAX8O0_5z&tp=18&oh=32345dac0585beef6570a5ab870f2877&oe=5FC9D008',
            },
        },
    ];

    chairs = [
        {
            first: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/59475218_2231179873660687_8331022349653599250_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=nu0CV4-CMbwAX97yE76&tp=18&oh=0e6958d5d5c73e1a2b13c220e120d7da&oe=5FC7F7FC',
            },
            second: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/59785248_398466434333742_7202677477828103494_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=Chat54M1Wl0AX__Xu6J&tp=18&oh=ac0e3aa916e14c9bf0fca594939feeac&oe=5FC7A39D',
            },
            third: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/118764604_363779691450329_5692247593155325114_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=GsIQTrO07mUAX-YcBd6&tp=18&oh=badb02b80ac44c4f9778ebd2fb3334b4&oe=5FC89EDF',
            },
            four: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/118777857_3076385805820385_9158565649601976070_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=CdI-wBU-Az4AX8MLP61&tp=18&oh=eaa0b71756e99bda395a759b1f695ff5&oe=5FC992F0',
            },
        },
        {
            first: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/116425732_293455341731649_990544048255271624_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=kWwyEjtKCOgAX8gGreq&tp=18&oh=cf93c2776fc70599434452cd8be7c95e&oe=5FCB38C1',
            },
            second: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/115956676_3110987275663946_8872001907120769804_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=Zefll5YyuSYAX8flgID&tp=18&oh=5c5b6adb7961da6752cbb638c4ed5f3d&oe=5FCA6010',
            },
            third: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/53305631_375794076351053_2762673333410852742_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=AXdIuWtQeKkAX-lpsbP&tp=18&oh=83da99b073d9edfa8b77d725613033d3&oe=5FC87A25',
            },
            four: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/52523910_377216849726375_375871713203623010_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=nO5eboK3wAIAX9E224C&tp=18&oh=be3fc0559bd6f8af13b4673d4f3d6722&oe=5FCB4BB4',
            },
        },
        {
            first: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/117075911_1269373440121117_6972119752803683901_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=xHuXsoSUsjgAX9LLmYQ&tp=18&oh=3719ff4ff5386c79ae1dad714f91f966&oe=5FCA5413',
            },
            second: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/116871486_198041984990953_7256040677011851082_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=CF_VSitFIXQAX-4-AsD&tp=18&oh=1ab4b44a54903e6a8aad3b9ed3849144&oe=5FC7928E',
            },
            third: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/104476263_264106274690034_908107601117642808_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=UQh-_3JdEPMAX98Vww1&tp=18&oh=463aa0686e2bbd687b87903722d4f114&oe=5FC8D8A9',
            },
            four: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/104021576_712410756002009_2463096711435748585_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=bhJhxEiecwkAX_TSTuI&tp=18&oh=c6ccfd0ab5c871f770be8c3e866bafc7&oe=5FC9B3B3',
            },
        },
        {
            first: {
                image: '../../../assets/images/examples/chairs/expl-b7.jpg',
            },
            second: {
                image: '../../../assets/images/examples/chairs/expl-a7.jpg',
            },
            third: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/117625507_296141035003945_3551814983475884535_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=n5dPDV914-gAX8VvQTy&tp=18&oh=91a7d8fcff7746600a95acb9a5640a4e&oe=5FC9D9CB',
            },
            four: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/117759085_4613317548686301_3330669182704285447_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=7Zm0rzWn058AX8opDGM&tp=18&oh=770b4e5ce59eccad339ea010d440cc89&oe=5FC7EC6C',
            },
        },
        {
            first: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/108545595_1147914508914582_348020062558127908_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=BYLJeb1F9MwAX9Hu3Up&tp=18&oh=33d93daebba8de48ce1b2eb6400166af&oe=5FC7956C',
            },
            second: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/109576022_290842121971317_7685318430924198327_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=8HZ5nBofr2EAX_k8XwQ&tp=18&oh=85817b28f8f865ee02c2abb80ddb5978&oe=5FC92194',
            },
            third: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/87460049_3197442583622951_4270668998590363472_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=0AGlNGT6kaoAX9q9oq5&tp=18&oh=02423787effd179a104742f2f56d4cb4&oe=5FC898F2',
            },
            four: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/88919997_1228499567345113_8000422990489592736_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=bpfJKFBvHuAAX-lS7NC&tp=18&oh=a8a3c18e8eb5cdcb067e3d57d8653c23&oe=5FC8ACA0',
            },
        },
        {
            first: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/83096170_654281205112104_1145757334278310580_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=tuBJG6sHkKQAX_IPbwQ&tp=18&oh=67233ad4ee49d882e0f15c3c6d4e737c&oe=5FC8A7B2',
            },
            second: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/83895622_909173376165579_6444456371905238332_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=xvIf7SjpajsAX8Egj9K&tp=18&oh=9fbe028587af75422cc0c9337bdfd0a8&oe=5FCAD645',
            },
            third: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/81554494_553675578551984_1541662036113734903_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=dsx3dA-HJFEAX9DzLGE&tp=18&oh=54ffecbd801e6c1a1a18afb141f79a49&oe=5FC855AB',
            },
            four: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/80854128_2578224142406023_8716586405066802232_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=VS_Uk0Z_XJEAX_8Vakm&tp=18&oh=1cae8b52ff88811a250dc64dc5e830cb&oe=5FC80798',
            },
        },
    ];

    headboards = [
        {
            first: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/120183866_679791859313345_357220634875324023_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=w6Ba00dXkmAAX9PooiZ&tp=18&oh=6864a8c3f664e26551f536c4f7814a59&oe=5FC8D364',
            },
            second: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/120581549_147676453685207_4440358675822048908_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=D99KqNZ6N50AX8BGqgs&tp=18&oh=18b0c2026e10a375d8a617e648e20f9b&oe=5FCA4B51',
            },
            third: {
                image: '../../../assets/images/examples/headboards/expl-b2.jpg',
            },
            four: {
                image: '../../../assets/images/examples/headboards/expl-a2.jpg',
            },
        },
        {
            first: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/119660626_190222389135886_3231205820997028860_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=2Kk2fAJzi9gAX_7STbf&tp=18&oh=dc7ce041b09ce3e7672f23cee8cd84bd&oe=5FC9CE52',
            },
            second: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/119667495_2575040746049844_3496153384022384973_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=BANs9sLyuM4AX_Qb405&tp=18&oh=4158a3c366f712063d4d5a5861784ff3&oe=5FCA497D',
            },
            third: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/122108679_140289657793053_2868495247264272253_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=O7QW6aF5IM0AX8KmZYw&tp=18&oh=a33b80ac8dea708a64222c0575265027&oe=5FC9C4D2',
            },
            four: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/122022487_770203457156323_7156743627441711885_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=_fHLF1XXQe0AX_rxLhU&tp=18&oh=43063c3ec496aba9c49649b3bb563c80&oe=5FC896F6',
            },
        },
        {
            first: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/67146733_352890118741533_8580594002496199266_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=zhNE3aZYsEMAX-bHfm1&tp=18&oh=fb8c7555c8d061b229c5bd500fa2bce3&oe=5FCB4F43',
            },
            second: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/66496995_481544382418528_1043420090899230259_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=CAM2FyKNkyIAX9L8ieZ&tp=18&oh=6932bab6f9236be4ef47b5ef1ca81862&oe=5FC80660',
            },
        },
    ];

    poufsAndBanquets = [
        {
            first: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/81567961_163117871582079_9136023183398954173_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=zKgOYpv9OAQAX-zXDnh&tp=18&oh=2fa5514ee645887b709d95bc82fddfb2&oe=5FC9AC90',
            },
            second: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/79447161_1401863739991902_6879493556764002982_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=FmIwN4ELxT0AX9CsUcw&tp=18&oh=07e48bcd30f891d772ca2c0ad1cd4aac&oe=5FCA8002',
            },
            third: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/91194034_162918381846937_8783363467724601674_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=8U9dH7uq1qIAX8tRHYj&tp=18&oh=781b2f0a5614edcf52a97e8bbc28e2db&oe=5FC9E8A1',
            },
            four: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/91232715_531773247481097_371065719023892123_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=aI3CbYrfaa0AX92qLQf&tp=18&oh=e349fb0a47ab44daa3c15eb6971b3146&oe=5FC99DD2',
            },
        },
        {
            first: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/120014883_4485763898162234_8090299828199082961_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=fvxp1Enf2wcAX9OMDtW&tp=18&oh=6ac8c45ef00e3255018066df24b4538b&oe=5FC7C616',
            },
            second: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/120039141_119716049680280_3565512389440452631_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=s9CDjbO-ssgAX-C0vbh&tp=18&oh=24f6b1e209924e032faeb4940d6d01f4&oe=5FCB065A',
            },
            third: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/115674252_1305327269859069_4708093490460953250_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=vVX2YykpzEYAX_3Ig7k&tp=18&oh=337f5d07449f6fe0edff6e510a74960b&oe=5FC8001C',
            },
            four: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/112036064_418953989012736_8139803577739234807_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=wMU80P9KqHMAX9e6OED&tp=18&oh=6a096ed490f954cef9b5ed1222ae78f3&oe=5FCA3621',
            },
        },
        {
            first: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/67093487_152427115845790_8802293735240483240_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=N5Jd5A69i0EAX_0Fbrm&_nc_tp=15&oh=114bdbc9d82d37820abf66e70f1e3da9&oe=5FC9D4BD',
            },
            second: {
                image: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/67406230_180726899624657_4125283791772854836_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=R4hy-p7LL5oAX-TDnza&_nc_tp=15&oh=b53bc5d0091ebf3b85c2240a96c81f58&oe=5FCABA09',
            },

        },
    ];

    tabList = [
        {
            active: false,
            caption: 'прямые диваны',
            id: 'straightSofas',
        },
        {
            active: false,
            caption: 'угловые диваны',
            id: 'cornerSofas',
        },
        {
            active: false,
            caption: 'кресла',
            id: 'armchairs',
        },
        {
            active: false,
            caption: 'стулья',
            id: 'chairs',
        },
        {
            active: false,
            caption: 'кровати',
            id: 'headboards',
        },
        {
            active: false,
            caption: 'пуфы и банкетки',
            id: 'poufsAndBanquets',
        },
    ];

    currentList$: BehaviorSubject<string> = new BehaviorSubject<string>('');

    portfolioList$: BehaviorSubject<any[]> = new BehaviorSubject([]);

    constructor() { }

    ngOnInit(): void {
        this.tabClick('straightSofas', 0);
    }


    tabClick(id: string, index: number): void {
        this.tabList.forEach(tab => tab.active = false);
        this.tabList[index].active = true;
        this.currentList$.next(id);
    }

}
