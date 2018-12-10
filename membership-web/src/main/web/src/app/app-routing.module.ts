import { NgModule,
         InjectionToken } from '@angular/core';
import { Routes,
         RouterModule,
         ActivatedRouteSnapshot } from '@angular/router';

import {WelcomeComponent} from './welcome/welcome.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginComponent} from './login/login.component';
import {EetMainComponent} from './eet-main/eet-main.component';
import {CaDocReportsComponent} from './ca-doc-reports/ca-doc-reports.component';
import {SearchStatusComponent} from './search-status/search-status.component';
import {EetErrorsComponent} from './eet-errors/eet-errors.component';
import {JobScheduleComponent} from './job-schedule/job-schedule.component';
import {GroupMappingComponent} from './group-mapping/group-mapping.component';
import {ExternalLinkComponent} from './external-link/external-link.component';

const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');
const deactivateGuard = new InjectionToken('deactivateGuard');

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome',    component: WelcomeComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'main',       component: EetMainComponent },
  { path: 'cadocs',     component: CaDocReportsComponent },
  { path: 'externalRedirect', canActivate: [externalUrlProvider], component: ExternalLinkComponent },
  { path: 'search',     component: SearchStatusComponent },
  { path: 'eeterrors',  component: EetErrorsComponent },
  { path: 'schedule',   component: JobScheduleComponent },
  { path: 'mapping',    component: GroupMappingComponent },
  { path: '**',         component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: externalUrlProvider,
      useValue: ( route: ActivatedRouteSnapshot ) => {
        const externalUrl = route.paramMap.get('externalUrl');
        window.open( externalUrl, '_self' );
      },
    },
    {
      provide: deactivateGuard,
      useValue: () => {
        console.log('Guard function is called');
        return false;
      }
    }
  ]
})
export class AppRoutingModule { }
