import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmailService} from "./services/email.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    footerForm = new FormGroup({
        name: new FormControl<string>('', Validators.required),
        phone: new FormControl<string>('', Validators.required)
    })

    constructor(private emailService: EmailService) {
    }

    get name(): FormControl {
        return this.footerForm.controls.name
    }

    get phone(): FormControl {
        return this.footerForm.controls.phone
    }

    submit() {
        this.emailService.sendMessage(this.footerForm, 'Обратный звонок')
    }
}
