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
            screen: '',
        },
        {
            instagramm: '@klever379',
            name: '',
            description: 'Константин и Николай, вернули к жизни мой диван, он стал очень удобный, очень красивый, получаю комплименты от своих гостей в его адрес, и очень тронуло, что в процессе его обновления вы присылали мне фотографии этапов его преображения, спасибо вам огромное!!! Приятно иметь дело с профессионалами',
            screen: '',
        },
        {
            instagramm: '@annasorokina9243',
            name: '',
            description: 'Константин, здравствуйте. Меня зовут Анна. Ваша компания перетягивала для нас подлокотники к кожаному дивану. Получилось лучше, чем я ожидала!!! Цвет кожи подошел идеально! Строчка – ровнее не придумаешь! Большое спасибо за работу и удачи! ',
            screen: '',
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
