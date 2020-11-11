import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-quality-block',
    templateUrl: './quality-block.component.html',
    styleUrls: ['./quality-block.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class QualityBlockComponent implements OnInit {


    formGroup: FormGroup = new FormGroup({
        name: new FormControl('', Validators.required),
        phone: new FormControl(null, Validators.required),
    });

    constructor() { }

    ngOnInit(): void {
    }

}

enum FORMS {
    NAME = 'name',
    PHONE = 'phone',
}
