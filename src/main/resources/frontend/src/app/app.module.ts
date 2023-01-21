import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutPageComponent} from './pages/about-page/about-page.component';
import {RegionsPageComponent} from './pages/regions-page/regions-page.component';
import {CertificatePageComponent} from './pages/certificate-page/certificate-page.component';
import {DeliveryPageComponent} from './pages/delivery-page/delivery-page.component';
import {EmptyPageComponent} from './pages/empty-page/empty-page.component';
import {ErrorPageComponent} from './pages/error-page/error-page.component';
import {ChildrenPageComponent} from './pages/children-page/children-page.component';
import {MembershipPageComponent} from './pages/membership-page/membership-page.component';
import {NurseryPageComponent} from './pages/nursery-page/nursery-page.component';
import {PaymentPageComponent} from './pages/payment-page/payment-page.component';
import {PaymentResultPageComponent} from './pages/payment-result-page/payment-result-page.component';
import {PedigreePageComponent} from './pages/pedigree-page/pedigree-page.component';
import {PersonalDataPageComponent} from './pages/personal-data-page/personal-data-page.component';
import {RequisitesPageComponent} from './pages/requisites-page/requisites-page.component';
import {ReturnPageComponent} from './pages/return-page/return-page.component';
import {SchoolPageComponent} from './pages/school-page/school-page.component';
import {SuccessPageComponent} from './pages/success-page/success-page.component';
import {TechnicalWorksPageComponent} from './pages/technical-works-page/technical-works-page.component';
import {TransferPageComponent} from './pages/transfer-page/transfer-page.component';
import {FeedbackFormComponent} from './components/feedback-form/feedback-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgxMaskDirective, provideEnvironmentNgxMask} from "ngx-mask";
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        AboutPageComponent,
        RegionsPageComponent,
        CertificatePageComponent,
        DeliveryPageComponent,
        EmptyPageComponent,
        ErrorPageComponent,
        ChildrenPageComponent,
        MembershipPageComponent,
        NurseryPageComponent,
        PaymentPageComponent,
        PaymentResultPageComponent,
        PedigreePageComponent,
        PersonalDataPageComponent,
        RequisitesPageComponent,
        ReturnPageComponent,
        SchoolPageComponent,
        SuccessPageComponent,
        TechnicalWorksPageComponent,
        TransferPageComponent,
        FeedbackFormComponent,
        FileUploadComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        NgxMaskDirective,
        HttpClientModule
    ],
    providers: [provideEnvironmentNgxMask()],
    bootstrap: [AppComponent]
})
export class AppModule {
}
