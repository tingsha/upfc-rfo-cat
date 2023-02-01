import {Component, QueryList, ViewChildren} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {FileUploadComponent, requiredFileType} from "../../components/file-upload/file-upload.component";
import {EmailService} from "../../services/email.service";

@Component({
    selector: 'app-nursery-page',
    templateUrl: './nursery-page.component.html',
    styleUrls: ['./nursery-page.component.scss']
})
export class NurseryPageComponent {
    types = [
        {type: 'REGISTRATION', name: 'Регистрация нового названия питомника - 1400 рублей'},
        {
            type: 'RE_REGISTRATION',
            name: 'Перерегистрация названия питомника, зарегистрированного в другой системе- 1000 рублей'
        },
        {type: 'CERTIFICATE', name: 'Выдача удостоверения для члена коллективного питомника - 350 рублей'},
    ]

    form = new FormGroup({
        surname: new FormControl<string>('', Validators.required),
        name: new FormControl<string>('', Validators.required),
        address: new FormControl<string>('', Validators.required),
        nameRu1: new FormControl<string>('', Validators.required),
        nameEn1: new FormControl<string>(''),
        nameRu2: new FormControl<string>('', Validators.required),
        nameEn2: new FormControl<string>(''),
        nameRu3: new FormControl<string>('', Validators.required),
        nameEn3: new FormControl<string>(''),
        document: new FormControl(null),
        email: new FormControl<string>('', [Validators.required, Validators.email]),
        phone: new FormControl<string>('', Validators.minLength(10)),
        type: new FormControl<string>('', Validators.required),
        message: new FormControl<string>('')
    })

    @ViewChildren(FileUploadComponent) fileUploadComponents: QueryList<FileUploadComponent>;
    showSuccessLabel: boolean = false;

    constructor(private emailService: EmailService) {
    }

    get surname(): FormControl {
        return this.form.controls.surname
    }

    get name(): FormControl {
        return this.form.controls.name
    }

    get address(): FormControl {
        return this.form.controls.address
    }

    get nameRu1(): FormControl {
        return this.form.controls.nameRu1
    }

    get nameRu2(): FormControl {
        return this.form.controls.nameRu2
    }

    get nameRu3(): FormControl {
        return this.form.controls.nameRu3
    }

    get document(): FormControl {
        return this.form.controls.document
    }

    get email(): FormControl {
        return this.form.controls.email
    }

    get type(): FormControl {
        return this.form.controls.type
    }

    get phone(): FormControl {
        return this.form.controls.phone
    }

    submit() {
        this.showSuccessLabel = this.emailService.sendMessage(this.form, "Регистрация питомника", this.fileUploadComponents)
    }
}
