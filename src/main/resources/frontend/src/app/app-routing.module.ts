import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import {RegionsPageComponent} from "./pages/regions-page/regions-page.component";
import {CertificatePageComponent} from "./pages/certificate-page/certificate-page.component";
import {DeliveryPageComponent} from "./pages/delivery-page/delivery-page.component";
import {EmptyPageComponent} from "./pages/empty-page/empty-page.component";
import {ErrorPageComponent} from "./pages/error-page/error-page.component";
import {ChildrenPageComponent} from "./pages/children-page/children-page.component";
import {MembershipPageComponent} from "./pages/membership-page/membership-page.component";
import {NurseryPageComponent} from "./pages/nursery-page/nursery-page.component";
import {PaymentPageComponent} from "./pages/payment-page/payment-page.component";
import {PaymentResultPageComponent} from "./pages/payment-result-page/payment-result-page.component";
import {PedigreePageComponent} from "./pages/pedigree-page/pedigree-page.component";
import {PersonalDataPageComponent} from "./pages/personal-data-page/personal-data-page.component";
import {RequisitesPageComponent} from "./pages/requisites-page/requisites-page.component";
import {ReturnPageComponent} from "./pages/return-page/return-page.component";
import {SchoolPageComponent} from "./pages/school-page/school-page.component";
import {SuccessPageComponent} from "./pages/success-page/success-page.component";
import {TechnicalWorksPageComponent} from "./pages/technical-works-page/technical-works-page.component";
import {TransferPageComponent} from "./pages/transfer-page/transfer-page.component";
import {ContactsPageComponent} from "./pages/contacts-page/contacts-page.component";
import {ManagementPageComponent} from "./pages/management-page/management-page.component";

const routes: Routes = [
    {
        path: '',
        component: AboutPageComponent,
        title: 'Региональное отделение Российской фелинологической организации &quot;Уральский племенной фелинологический центр&quot;'
    },
    {
        path: 'regions',
        component: RegionsPageComponent,
        title: 'Номера субъектов РФ'
    },
    {
        path: 'certificate',
        component: CertificatePageComponent,
        title: 'Справка об отсутствии племенной ценности (для вывоза за пределы РФ)'
    },
    {
        path: 'delivery',
        component: DeliveryPageComponent,
        title: 'Информация о способах доставки'
    },
    {
        path: 'empty',
        component: EmptyPageComponent,
        title: 'В работе'
    },
    {
        path: 'error',
        component: ErrorPageComponent,
        title: 'Ошибка'
    },
    {
        path: 'children',
        component: ChildrenPageComponent,
        title: 'Регистрация помета'
    },
    {
        path: 'membership',
        component: MembershipPageComponent,
        title: 'Оплата членского взноса'
    },
    {
        path: 'nursery',
        component: NurseryPageComponent,
        title: 'Регистрация питомника'
    },
    {
        path: 'payment',
        component: PaymentPageComponent,
        title: 'Информация о способах оплаты'
    },
    {
        path: 'payment-result',
        component: PaymentResultPageComponent,
        title: 'Результат оплаты'
    },
    {
        path: 'pedigree',
        component: PedigreePageComponent,
        title: 'Родословная'
    },
    {
        path: 'personal-data',
        component: PersonalDataPageComponent,
        title: 'Соглашение об обработке персональных данных'
    },
    {
        path: 'requisites',
        component: RequisitesPageComponent,
        title: 'Реквизиты'
    },
    {
        path: 'return',
        component: ReturnPageComponent,
        title: 'Информация о возврате'
    },
    {
        path: 'school',
        component: SchoolPageComponent,
        title: 'Школа фелинологов'
    },
    {
        path: 'success',
        component: SuccessPageComponent,
        title: 'Заявка отправлена'
    },
    {
        path: 'technical-works',
        component: TechnicalWorksPageComponent,
        title: 'Технические работы'
    },
    {
        path: 'transfer',
        component: TransferPageComponent,
        title: 'Трансфер'
    },
    {
        path: 'contacts',
        component: ContactsPageComponent,
        title: 'Контакты'
    },
    {
        path: 'management',
        component: ManagementPageComponent,
        title: 'Правление'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
