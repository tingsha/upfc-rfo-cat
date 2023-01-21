import {Component, QueryList, ViewChildren} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FileUploadComponent, requiredFileType} from "../../components/file-upload/file-upload.component";
import {EmailService} from "../../services/email.service";

@Component({
    selector: 'app-transfer-page',
    templateUrl: './transfer-page.component.html',
    styleUrls: ['./transfer-page.component.scss']
})
export class TransferPageComponent {
    types = [
        {type: 'ELECTRONIC', name: 'Трансфер электронная форма 750 рублей'},
        {type: 'PHYSICAL', name: 'Трансфер бумажный носитель 750 рублей'},
        {type: 'ALL', name: 'Трансфер полный комплект 1500 рублей'}
    ]

    form = new FormGroup({
        nickname: new FormControl<string>('', Validators.required),
        sex: new FormControl<string>('', Validators.required),
        breed: new FormControl<string>('', Validators.required),
        color: new FormControl<string>('', Validators.required),
        birthDate: new FormControl<string>('', Validators.required),
        microchipNumber: new FormControl<string>(''),
        breeder: new FormControl<string>('', Validators.required),
        owner: new FormControl<string>('', Validators.required),
        email: new FormControl<string>('', [Validators.required, Validators.email]),
        phone: new FormControl<string>('', Validators.minLength(10)),
        catCard: new FormControl(null, [Validators.required, requiredFileType(['png', 'jpg', 'jpeg'])]),
        fatherPedigree: new FormControl(null, [Validators.required, requiredFileType(['png', 'jpg', 'jpeg'])]),
        fatherCertificate: new FormControl(null, [Validators.nullValidator, requiredFileType(['png', 'jpg', 'jpeg'])]),
        motherPedigree: new FormControl(null, [Validators.required, requiredFileType(['png', 'jpg', 'jpeg'])]),
        motherCertificate: new FormControl(null, [Validators.nullValidator, requiredFileType(['png', 'jpg', 'jpeg'])]),
        type: new FormControl<string>('', Validators.required),
        message: new FormControl<string>('')
    })

    @ViewChildren(FileUploadComponent) fileUploadComponents: QueryList<FileUploadComponent>;

    constructor(private emailService: EmailService) {
    }

    get nickname(): FormControl {
        return this.form.controls.nickname
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

    get breeder(): FormControl {
        return this.form.controls.breeder
    }

    get owner(): FormControl {
        return this.form.controls.owner
    }

    get email(): FormControl {
        return this.form.controls.email
    }

    get catCard(): FormControl {
        return this.form.controls.catCard
    }

    get fatherPedigree(): FormControl {
        return this.form.controls.fatherPedigree
    }

    get fatherCertificate(): FormControl {
        return this.form.controls.fatherCertificate
    }

    get motherPedigree(): FormControl {
        return this.form.controls.motherPedigree
    }

    get motherCertificate(): FormControl {
        return this.form.controls.motherCertificate
    }

    get type(): FormControl {
        return this.form.controls.type
    }

    get phone(): FormControl {
        return this.form.controls.phone
    }

    submit() {
        this.emailService.sendMessage(this.form, "Трансфер", this.fileUploadComponents)
    }
}
