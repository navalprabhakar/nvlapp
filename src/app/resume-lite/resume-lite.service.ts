import { ApiResponse } from '../common/apiresponse';
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class ResumeLiteService {
  private _restUrl = environment.apiHost + '/cv';

  constructor(private _http: HttpClient) {}

  getResume(): Observable<ApiResponse> {
    return this._http.get<ApiResponse>(this._restUrl)
      .map((res) => res)
      .do(data => console.log('NVLAPI services responded with resume data'))
        .catch(this.handleError);
  }

  handleError(err: HttpErrorResponse) {
    console.log("NVLAPI services failed to respond, kindly try later - " + err.message);
    return Observable.throw(err.message);
  }
}
