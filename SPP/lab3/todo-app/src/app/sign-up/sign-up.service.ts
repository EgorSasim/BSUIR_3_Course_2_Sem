import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MAIN_SERVER_URL } from 'src/app/serverUrls/mainServerUrls';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(private httpClient: HttpClient) {}

  public signUp() {
    return this.httpClient.get(MAIN_SERVER_URL + 'sign-in');
  }
}
