import { BrowserModule }            from '@angular/platform-browser';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { ReactiveFormsModule }      from '@angular/forms';
import { HttpClientModule }         from '@angular/common/http';
import { NgModule }                 from '@angular/core';

import { LoginService }             from './service/login/login.service';
import { MenuStateService }         from './service/state/menu-state.service';
import { MenuEnablerService } from './service/enable/menu-enabler.service';

import { AppRoutingModule }         from './app-routing.module';
import { AppComponent }             from './app.component';
import { MaterialModule }           from './material/material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { EetMainComponent } from './eet-main/eet-main.component';
import { CreateEmployerProfileComponent } from './create-employer-profile/create-employer-profile.component';
import { UpdateEmployerProfileComponent } from './update-employer-profile/update-employer-profile.component';
import { ViewEmployerProfileComponent } from './view-employer-profile/view-employer-profile.component';
import { UpdateEmployerContactsComponent } from './update-employer-contacts/update-employer-contacts.component';
import { ViewErrorMessageComponent } from './view-error-message/view-error-message.component';
import { SearchStatusComponent } from './search-status/search-status.component';
import { SearchStatusOptionComponent } from './search-status-option/search-status-option.component';
import { GroupMappingComponent } from './group-mapping/group-mapping.component';
import { GroupMappingOptionComponent } from './group-mapping-option/group-mapping-option.component';
import { JobScheduleComponent } from './job-schedule/job-schedule.component';
import { JobScheduleOptionComponent } from './job-schedule-option/job-schedule-option.component';
import { EetErrorsComponent } from './eet-errors/eet-errors.component';
import { ExternalUrlDirective } from './directive/external-url.directive';
import { CaDocReportsComponent } from './ca-doc-reports/ca-doc-reports.component';
import { ExternalLinkComponent } from './external-link/external-link.component';
import { ClientMaintenanceComponent } from './client-maintenance/client-maintenance.component';
import { EetMemberManuComponent } from './eet-member-manu/eet-member-manu.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    WelcomeComponent,
    LoginComponent,
    EetMainComponent,
    CreateEmployerProfileComponent,
    UpdateEmployerProfileComponent,
    ViewEmployerProfileComponent,
    UpdateEmployerContactsComponent,
    ViewErrorMessageComponent,
    SearchStatusComponent,
    SearchStatusOptionComponent,
    GroupMappingComponent,
    GroupMappingOptionComponent,
    JobScheduleComponent,
    JobScheduleOptionComponent,
    EetErrorsComponent,
    ExternalUrlDirective,
    CaDocReportsComponent,
    ExternalLinkComponent,
    ClientMaintenanceComponent,
    EetMemberManuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    MenuStateService,
    MenuEnablerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
