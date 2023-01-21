import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {provideNgxMask} from "ngx-mask";
import {EmailService} from "../../services/email.service";

@Component({
    selector: 'app-feedback-form',
    templateUrl: './feedback-form.component.html',
    styleUrls: ['./feedback-form.component.scss'],
    providers: [
        provideNgxMask(),
    ]
})
export class FeedbackFormComponent {

    feedbackForm = new FormGroup({
        name: new FormControl<string>('', Validators.required),
        phone: new FormControl<string>('', Validators.minLength(10)),
        email: new FormControl<string>('', [
            Validators.required,
            Validators.email
        ]),
        message: new FormControl<string>('', Validators.required)
    })

    constructor(private emailService: EmailService) {
    }

    get name(): FormControl {
        return this.feedbackForm.controls.name
    }

    get email(): FormControl {
        return this.feedbackForm.controls.email
    }

    get phone(): FormControl {
        return this.feedbackForm.controls.phone
    }

    get message(): FormControl {
        return this.feedbackForm.controls.message
    }

    submit() {
        this.emailService.sendMessage(this.feedbackForm, 'Обратная связь')
    }
}
