import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { TokenstorageService } from './tokenstorage.service';
import { AlertService } from './alert.service';
import { Network, NetworkStatus } from '@capacitor/network';
import { AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { LoaderService } from './loader.service';

const TOKEN_HEADER_KEY = 'x-auth-token';

@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorService {
  token = '';

  constructor(
    public _router: Router,
    private _tokenService: TokenstorageService,
    private _alertService: AlertService,
    private _loaderService: LoaderService
  ) { }

  getToken() {
    this.token = this._tokenService.getToken();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._loaderService.loading.next(true);
    this.getToken();

    req = req.clone({
      headers: req.headers.set(TOKEN_HEADER_KEY, this.token)
    });

    return next.handle(req).pipe(
      catchError((error) => {
        this._loaderService.loading.next(false);
        if (error instanceof HttpErrorResponse) {
          // console.log(error)
          if (Array.isArray(error.error.errors)) {
            this._alertService.presentToast(error.error.errors[0].msg, 'danger');
          } else {
            switch (error.status) {
              case 401:
                this._router.navigate(['login']);
                break;
              case 404:
                this._router.navigate(['pagenotfound']);
                break;
              case 500:
                this._router.navigate(['servererror']);
                break;
            }
          }
        }
        return EMPTY;
      })
    )
  }
}