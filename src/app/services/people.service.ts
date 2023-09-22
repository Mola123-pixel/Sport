import { Injectable,Inject } from '@angular/core';
import { People } from '../interfaces/people';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private endpoint: string = "sports";

  constructor(@Inject('BASE_API_URL') private baseApiUrl: string, private httpClient: HttpClient) { }

  public findAll<T>(keyword: string, statusId: any, pageNumber: any, pageSize: any): Observable<T> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('keyword', keyword).set('pageNumber', pageNumber).set('pageSize', pageSize);

    return this.httpClient.get<T>(`${this.baseApiUrl}api/${this.endpoint}/find`, {
      params: httpParams
    });
  }

  public create<T>(People: People): Observable<People> {
    //People.people = null;
    return this.httpClient.post<People>(`${this.baseApiUrl}api/${this.endpoint}`, People);
  }
  

  public update(People: People): Observable<Object> {
    //People.People = null;
    return this.httpClient.put(`${this.baseApiUrl}api/${this.endpoint}/${People.personId}`, People);
  }
}
