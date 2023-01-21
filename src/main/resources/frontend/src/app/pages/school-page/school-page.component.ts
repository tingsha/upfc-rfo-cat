import {Component, QueryList, ViewChildren} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FileUploadComponent, requiredFileType} from "../../components/file-upload/file-upload.component";
import {EmailService} from "../../services/email.service";

@Component({
    selector: 'app-school-page',
    templateUrl: './school-page.component.html',
    styleUrls: ['./school-page.component.scss']
})
export class SchoolPageComponent {
    schoolForm = new FormGroup({
        surname: new FormControl<string>('', Validators.required),
        name: new FormControl<string>('', Validators.required),
        patronymic: new FormControl<string>(''),
        breed: new FormControl<string>('', Validators.required),
        experience: new FormControl<string>('', Validators.required),
        email: new FormControl<string>('', [Validators.required, Validators.email]),
        phone: new FormControl<string>('', Validators.minLength(10)),
        message: new FormControl<string>('')
    })

    certificateForm = new FormGroup({
        email: new FormControl<string>('', Validators.required),
        phone: new FormControl<string>(''),
        photo: new FormControl(null, [Validators.required, requiredFileType(['png', 'jpg', 'jpeg'])]),
        message: new FormControl<string>('')
    })

    @ViewChildren(FileUploadComponent) fileUploadComponents: QueryList<FileUploadComponent>;

    constructor(private emailService: EmailService) {
    }

    get surname(): FormControl {
        return this.schoolForm.controls.surname
    }

    get name(): FormControl {
        return this.schoolForm.controls.name
    }

    get breed(): FormControl {
        return this.schoolForm.controls.breed
    }

    get experience(): FormControl {
        return this.schoolForm.controls.experience
    }

    get schoolEmail(): FormControl {
        return this.schoolForm.controls.email
    }

    get certificateEmail(): FormControl {
        return this.certificateForm.controls.email
    }

    get photo(): FormControl {
        return this.certificateForm.controls.photo
    }

    get phone(): FormControl {
        return this.schoolForm.controls.phone
    }

    schoolSubmit() {
        this.emailService.sendMessage(this.schoolForm, "Школа фелинологов", this.fileUploadComponents)
    }

    certificateSubmit() {
        this.emailService.sendMessage(this.certificateForm, "Регистрация сертификата фелинолога в реестре «ЕВРД»")
    }
}
