import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../../model/login';
import { LoginStatus } from '../../model/login-status';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor( private httpClient: HttpClient ) { }

  login( loginModel: Login ): Observable<LoginStatus> {

    const httpHeaders = new HttpHeaders()
      .set( 'Content-Type', 'application/json' )
      .set( 'Cache-Control', 'no-cache' );

    const options = {
      headers: httpHeaders
    };

    return this.httpClient.post<LoginStatus>('/login', loginModel, options );
  }
}
