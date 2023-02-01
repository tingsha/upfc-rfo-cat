import {Component, ElementRef, Input} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: FileUploadComponent,
            multi: true
        }
    ]
})
export class FileUploadComponent {

    selectedFiles?: FileList;

    @Input() hasErrors: boolean = false

    selectFile(event: any): void {
        this.selectedFiles = event.target.files;
    }

    get getFile(): File | null {
        return this.selectedFiles ? this.selectedFiles.item(0) : null;
    }
}

export function requiredFileType(types: string[]) {
    return function (control: FormControl) {
        const file = control.value
        if (file) {
            const extension = file.name.split('.')[1].toLowerCase();
            if (!types.map(t => t.toLowerCase()).includes(extension.toLowerCase())) {
                return {
                    requiredFileType: true
                }
            }
            return null
        }
        return null
    };
}
