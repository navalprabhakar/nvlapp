import { ApiResponse } from '../common/apiresponse';
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class ResumeLiteService {
  private _restUrl = 'https://nvlapi.herokuapp.com/cv';

  constructor(private _http: HttpClient) {}

  getResume(): Observable<ApiResponse> {
    return this._http.get<ApiResponse>(this._restUrl)
      .map((res) => res)
      .do(data => console.log('resume summary downloaded'))
        .catch(this.handleError);
  }

  handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
