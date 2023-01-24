import {Component, QueryList, ViewChildren} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FileUploadComponent, requiredFileType} from "../../components/file-upload/file-upload.component";
import {EmailService} from "../../services/email.service";

@Component({
    selector: 'app-certificate-page',
    templateUrl: './certificate-page.component.html',
    styleUrls: ['./certificate-page.component.scss']
})
export class CertificatePageComponent {

    constructor(private emailService: EmailService) {
    }

    types = [
        {type: 'ELECTRONIC', name: 'Карточка котенка электронная форма 200 рублей'},
        {type: 'PHYSICAL', name: 'Карточка котенка бумажный носитель 200 рублей'},
        {type: 'ALL', name: 'Карточка котенка полный комплект 400 рублей'}
    ]
    form = new FormGroup({
        nicknameRu: new FormControl<string>('', Validators.required),
        nicknameEn: new FormControl<string>('', Validators.required),
        sex: new FormControl<string>('', Validators.required),
        breed: new FormControl<string>('', Validators.required),
        color: new FormControl<string>('', Validators.required),
        birthDate: new FormControl<string>('', Validators.required),
        microchipNumber: new FormControl<string>(''),
        nameRu: new FormControl<string>('', Validators.required),
        nameEn: new FormControl<string>('', Validators.required),
        email: new FormControl<string>('', [Validators.required, Validators.email]),
        phone: new FormControl<string>('', Validators.minLength(10)),
        photo1: new FormControl(null, [Validators.required, requiredFileType(['png', 'jpg', 'jpeg'])]),
        photo2: new FormControl(null, [Validators.required, requiredFileType(['png', 'jpg', 'jpeg'])]),
        photo3: new FormControl(null, [Validators.required, requiredFileType(['png', 'jpg', 'jpeg'])]),
        type: new FormControl<string>('', Validators.required),
        message: new FormControl<string>('')
    })

    @ViewChildren(FileUploadComponent) fileUploadComponents: QueryList<FileUploadComponent>;
    showSuccessLabel: boolean = false;

    get nicknameRu(): FormControl {
        return this.form.controls.nicknameRu
    }

    get nicknameEn(): FormControl {
        return this.form.controls.nicknameEn
    }

    get sex(): FormControl {
        return this.form.controls.sex
    }

    get breed(): FormControl {
        return this.form.controls.breed
    }

    get color(): FormControl {
        return this.form.controls.color
    }

    get birthDate(): FormControl {
        return this.form.controls.birthDate
    }

    get microchipNumber(): FormControl {
        return this.form.controls.microchipNumber
    }

    get nameRu(): FormControl {
        return this.form.controls.nameRu
    }

    get nameEn(): FormControl {
        return this.form.controls.nameEn
    }

    get email(): FormControl {
        return this.form.controls.email
    }

    get photo1(): FormControl {
        return this.form.controls.photo1
    }

    get photo2(): FormControl {
        return this.form.controls.photo2
    }

    get photo3(): FormControl {
        return this.form.controls.photo3
    }

    get type(): FormControl {
        return this.form.controls.type
    }

    get phone(): FormControl {
        return this.form.controls.phone
    }

    submit() {
        this.showSuccessLabel = this.emailService.sendMessage(this.form, "Справка об отсутствии племенной ценности (для вывоза за пределы РФ)", this.fileUploadComponents)
    }
}
