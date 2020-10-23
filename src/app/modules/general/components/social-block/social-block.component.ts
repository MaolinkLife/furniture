import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-social-block',
    templateUrl: './social-block.component.html',
    styleUrls: ['./social-block.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialBlockComponent implements OnInit {


    socialList = [
        {
            instagramm: '@milaglazova',
            name: '',
            description: 'Вы знаете, у меня отличная интуиция. Когда я увидела вас в соц.Сети, я сразу поняла, что вы – то что мне нужно и что все будет сделано отлично. Живется мне с моим красавцем прекрасно. Он супер! Хожу и любуюсь. Не даю мужу на него пристроиться. Он только мой! Я очень довольна! Спасибо огромное! Вы - профи!',
            screen: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/43817638_326894881328915_7203143983457894400_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_ohc=kJ5q9PK9R9kAX_hQboc&oh=f0712bc37ba7dd5451aa1bf3a54e0072&oe=5FBDF3B4',
        },
        {
            instagramm: '@klever379',
            name: '',
            description: 'Константин и Николай, вернули к жизни мой диван, он стал очень удобный, очень красивый, получаю комплименты от своих гостей в его адрес, и очень тронуло, что в процессе его обновления вы присылали мне фотографии этапов его преображения, спасибо вам огромное!!! Приятно иметь дело с профессионалами',
            screen: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/75379890_421305695240255_828728516882202624_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_ohc=mbd2yHm36AYAX-bccxh&oh=3a8d1c164070da986ce7eb38d75bbc5a&oe=5FBCC11B',
        },
        {
            instagramm: '@annasorokina9243',
            name: '',
            description: 'Константин, здравствуйте. Меня зовут Анна. Ваша компания перетягивала для нас подлокотники к кожаному дивану. Получилось лучше, чем я ожидала!!! Цвет кожи подошел идеально! Строчка – ровнее не придумаешь! Большое спасибо за работу и удачи! ',
            screen: 'https://instagram.frix7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/89833867_1075865589441520_168505113348931584_n.jpg?_nc_ht=instagram.frix7-1.fna.fbcdn.net&_nc_ohc=v-5H5GoZlAUAX-PuGzX&oh=49dd0ec95ad48ea1bd62309873ebab82&oe=5FBB4442',
        },
        {
            instagramm: '',
            name: '',
            description: 'Спасибо вам всем!!! Успеха, процветания и всем огромного здоровья, пусть все ладится и получается у Вас и Вашей команды!!!',
            screen: '',
        },
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
