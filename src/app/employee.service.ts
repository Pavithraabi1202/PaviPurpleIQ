import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'https://cmxwebapi.purpleiq.ai/api/administrator/Configuration/Employee/EmployeeSummary?clientId=C01';
  private authToken = localStorage.getItem('token');

  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.authToken}`
  });

  private pdfHeaders: HttpHeaders = new HttpHeaders({
    'Authorization': `Bearer ${this.authToken}`
  });

  private csvHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'text/csv',
    'Authorization': `Bearer ${this.authToken}`
  });

  constructor(private http: HttpClient) { }

  getEmployeeList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, { headers: this.headers });
  }
}
