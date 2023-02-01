import {Injectable, QueryList} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormGroup, ValidationErrors} from "@angular/forms";
import {FileUploadComponent} from "../components/file-upload/file-upload.component";

@Injectable({
    providedIn: 'root'
})
export class EmailService {

    constructor(private http: HttpClient) {
    }

    sendMessage(form: FormGroup, subject: string, fileUploadComponents?: QueryList<FileUploadComponent>): boolean {
        form.markAllAsTouched()
        let hasErrors: boolean = false
        Object.keys(form.controls).forEach(key => {
            const controlErrors: ValidationErrors | null = form.get(key)!.errors
            if (controlErrors != null) {
                hasErrors = true
            }
        })
        if (hasErrors) {
            return false
        }
        const dataToSend = this.getDataToSend(form, subject, fileUploadComponents)
        let headers = new HttpHeaders()
        headers.set('content-type', 'application/json')
        this.http.post('https://upfc-rfo-cat.ru/send-form', dataToSend, {headers: headers}).subscribe(() => {})
        form.reset();
        return true
    }

    private getDataToSend(form: FormGroup, subject: string, fileUploadComponents: QueryList<FileUploadComponent> | undefined) {
        const formData: FormData = new FormData();
        formData.append("subject", subject)
        formData.append('form', JSON.stringify(form.value))
        if (fileUploadComponents) {
            fileUploadComponents.map(c => c.getFile).forEach(file => {
                if (file) {
                    formData.append('files', file);
                }
            })
        }
        return formData;
    }
}
