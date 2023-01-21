import {Component, ElementRef, HostListener, Input} from '@angular/core';
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
export class FileUploadComponent implements ControlValueAccessor {
    @Input() progress: any

    @Input() hasErrors: boolean = false
    onChange: Function
    private file: File | null = null

    @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
        const file = event && event.item(0)
        this.onChange(file)
        this.file = file
    }

    constructor(private host: ElementRef<HTMLInputElement>) {
    }

    writeValue(value: null) {
        // clear file input
        this.host.nativeElement.value = ''
        this.file = null
    }

    registerOnChange(fn: Function) {
        this.onChange = fn
    }

    registerOnTouched(fn: Function) {
    }

    get getFile(): File | null {
        return this.file
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
