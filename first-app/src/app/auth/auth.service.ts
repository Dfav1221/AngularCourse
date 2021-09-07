import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {Observable, throwError} from "rxjs";

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey = 'AIzaSyBVZTbnAJylMFzJ3Ev8U3m2Q6dfPcVyhJM';
  private loginUri = 'signInWithPassword';
  private registerUri = 'signUp';

  constructor(
    private http: HttpClient
  ) {
  }

  signup(email: string, password: string) {
    const registerUrl = `${this.baseUrl}${this.registerUri}`
    return this.sendPostRequest(registerUrl, email, password);
  }

  login(email: string, password: string) {
    const loginUrl = `${this.baseUrl}${this.loginUri}`
    return this.sendPostRequest(loginUrl, email, password);
  }

  sendPostRequest(url: string, email: string, password: string): Observable<AuthResponseData> {
    let params = new HttpParams();
    params = params.append('key', this.apiKey);

    return this.http
      .post<AuthResponseData>(
        url,
        {
          email: email,
          password: password,
          returnSecureToken: true
        },
        {
          params: params
        }
      ).pipe(catchError(error => {
        let errorMessage = 'An unknown error occurred!';

        if (!error.error || !error.error.error)
          return throwError(errorMessage);

        switch (error.error.error.message) {
          case 'EMAIL_EXISTS':
            errorMessage = 'This email exist';
            break;
          case 'EMAIL_NOT_FOUND':
            errorMessage = 'This email don\'t exist';
            break;
        }
        return throwError(errorMessage);
      }))
  }
}
