import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ClientData {
  income: number;
  employment: string;
  education: string;
  transaction_history: number;
}

interface PredictionResponse {
  probability_of_repayment: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://192.168.1.101:8000/predict/';

  constructor(private http: HttpClient) {}

getPrediction(clientData: ClientData): Observable<PredictionResponse> {
    return this.http.post<PredictionResponse>(this.apiUrl, clientData);
  }
}
