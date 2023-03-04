import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-about-page',
    templateUrl: './about-page.component.html',
    styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
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
