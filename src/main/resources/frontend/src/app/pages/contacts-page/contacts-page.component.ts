import {Component, OnInit} from '@angular/core';
import {EmailService} from "../../services/email.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-contacts-page',
    templateUrl: './contacts-page.component.html',
    styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

    feedbackForm = new FormGroup({
        name: new FormControl<string>('', Validators.required),
        phone: new FormControl<string>('', Validators.minLength(10)),
        email: new FormControl<string>('', [
            Validators.required,
            Validators.email
        ]),
        message: new FormControl<string>('', Validators.required)
    })

    showSuccessLabel: boolean = false;

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
        this.showSuccessLabel = this.emailService.sendMessage(this.feedbackForm, 'Обратная связь')
    }

    ngOnInit(): void {
        //@ts-ignore
        ymaps.ready(init);

        function init() {
            //@ts-ignore
            const myMap = new ymaps.Map("map", {
                center: [57.254271, 60.108602],
                zoom: 14,
                controls: ["zoomControl"],
            });
            //@ts-ignore
            if ($(window).width() <= 1100) {
                myMap.behaviors.disable(["scrollZoom"]);
            }
            myMap.geoObjects.add(
                //@ts-ignore
                new ymaps.Placemark(
                    [57.254271, 60.108602],
                    {
                        balloonContent:
                            "624130, Россия, Новоуральск, Красногвардейский проезд, д. 4",
                        iconCaption:
                            'Региональное отделение Российской фелинологической организации "Уральский племенной фелинологический центр',
                    },
                    {
                        preset: "islands#icon",
                        iconColor: "#0095b6",
                    }
                )
            );
        }
    }
}
