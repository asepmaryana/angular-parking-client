import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/catch'

const TOKEN_HEADER_KEY = environment.tokenHeaderKey

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private token: TokenStorageService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.headers.has('Content-type')) {
      request = request.clone({
        headers: request.headers.set('Content-type', 'application/json')
      })
    }

    let authReq = request
    const token = this.token.getToken()
    if (token != null) {
      authReq = request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer '+token) })
    }
    return next.handle(authReq).catch(x => this.handleAuthError(x))
  }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    //handle your auth error or rethrow
    if (err.status === 401 || err.status === 403) {
      //clean token
      this.token.signOut()
      // redirect to login
      this.router.navigate(['/login'])
      return of(err.message)
    }
    return throwError(err)
  }

}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true }
]
