import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IfElse } from '../components/IfElse';

@Injectable({
  providedIn: 'root'
})
export class IfelseService {

  constructor(private httpClient: HttpClient) { }

  
  public getAll(): Observable<IfElse[]> {
    return this.httpClient.get<IfElse[]>('https://1.api.fy23ey05.careers.ifelsecloud.com/');
  }
}
