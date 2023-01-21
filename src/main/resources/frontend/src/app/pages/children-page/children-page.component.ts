import {Component, QueryList, ViewChildren} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FileUploadComponent, requiredFileType} from "../../components/file-upload/file-upload.component";
import {EmailService} from "../../services/email.service";

@Component({
    selector: 'app-children-page',
    templateUrl: './children-page.component.html',
    styleUrls: ['./children-page.component.scss']
})
export class ChildrenPageComponent {
    types = [
        {type: 'ELECTRONIC', name: 'Справка электронная форма 2000 рублей'},
        {type: 'PHYSICAL', name: 'Справка бумажный носитель 2500 рублей'},
        {type: 'ALL', name: 'Справка полный комплект 4300 рублей'}
    ]

    form = new FormGroup({
        name: new FormControl<string>('', Validators.required),
        nurseryName: new FormControl<string>('', Validators.required),
        birthDate: new FormControl<string>('', Validators.required),
        cat1: new FormControl<string>(''),
        cat2: new FormControl<string>(''),
        cat3: new FormControl<string>(''),
        cat4: new FormControl<string>(''),
        cat5: new FormControl<string>(''),
        cat6: new FormControl<string>(''),
        cat7: new FormControl<string>(''),
        cat8: new FormControl<string>(''),
        cat9: new FormControl<string>(''),
        cat10: new FormControl<string>(''),
        father: new FormControl<string>('', Validators.required),
        mother: new FormControl<string>('', Validators.required),
        email: new FormControl<string>('', [Validators.required, Validators.email]),
        phone: new FormControl<string>('', Validators.minLength(10)),
        fatherPedigree: new FormControl(null, [Validators.required, requiredFileType(['png', 'jpg', 'jpeg'])]),
        fatherCertificate: new FormControl(null, [Validators.required, requiredFileType(['png', 'jpg', 'jpeg'])]),
        motherPedigree: new FormControl(null, [Validators.required, requiredFileType(['png', 'jpg', 'jpeg'])]),
        motherCertificate: new FormControl(null, [Validators.required, requiredFileType(['png', 'jpg', 'jpeg'])]),
        type: new FormControl<string>('', Validators.required),
        message: new FormControl<string>('')
    })

    @ViewChildren(FileUploadComponent) fileUploadComponents: QueryList<FileUploadComponent>;

    constructor(private emailService: EmailService) {
    }

    get name(): FormControl {
        return this.form.controls.name
    }

    get nurseryName(): FormControl {
        return this.form.controls.nurseryName
    }

    get birthDate(): FormControl {
        return this.form.controls.birthDate
    }

    get father(): FormControl {
        return this.form.controls.father
    }

    get mother(): FormControl {
        return this.form.controls.mother
    }

    get email(): FormControl {
        return this.form.controls.email
    }

    get fatherPedigree(): FormControl {
        return this.form.controls.fatherPedigree
    }

    get fatherCertificate(): FormControl {
        return this.form.controls.motherCertificate
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
        this.emailService.sendMessage(this.form, "Регистрация помета", this.fileUploadComponents)
    }
}
