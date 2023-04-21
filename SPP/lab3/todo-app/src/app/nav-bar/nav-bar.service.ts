import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { displayNetworkErrors } from 'src/app/errors-displayer/network-error-response-displayer/network-error-response-displayer';
import { MAIN_SERVER_URL } from 'src/app/serverUrls/mainServerUrls';

@Injectable({
  providedIn: 'root',
})
export class NabBarService {
  constructor(private httpClient: HttpClient) {}
  public getSecret() {
    this.httpClient
      .post(MAIN_SERVER_URL + 'secret', {
        token: localStorage.getItem('token'),
      })
      .subscribe({
        error: (err: HttpErrorResponse) => {
          displayNetworkErrors(err);
        },
        next: (res) => {
          console.log('res: ', res);
        },
      });
  }
}
