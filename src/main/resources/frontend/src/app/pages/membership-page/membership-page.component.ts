import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmailService} from "../../services/email.service";

@Component({
    selector: 'app-membership-page',
    templateUrl: './membership-page.component.html',
    styleUrls: ['./membership-page.component.scss']
})
export class MembershipPageComponent {

    constructor(private emailService: EmailService) {
    }

    form = new FormGroup({
        surname: new FormControl<string>('', Validators.required),
        name: new FormControl<string>('', Validators.required),
        patronymic: new FormControl<string>(''),
        region: new FormControl<string>('', Validators.required),
        address: new FormControl<string>('', Validators.required),
        email: new FormControl<string>('', [Validators.required, Validators.email]),
        phone: new FormControl<string>('', Validators.minLength(10)),
        message: new FormControl<string>('')
    })

    get surname(): FormControl {
        return this.form.controls.surname
    }

    get name(): FormControl {
        return this.form.controls.name
    }

    get region(): FormControl {
        return this.form.controls.region
    }

    get address(): FormControl {
        return this.form.controls.address
    }

    get email(): FormControl {
        return this.form.controls.email
    }

    get phone(): FormControl {
        return this.form.controls.phone
    }

    submit() {
        this.emailService.sendMessage(this.form, "Оплата членского взноса")
    }
}
