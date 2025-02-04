
// src/app/credit.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CreditPredictionResponse {
  credit_decision: string;
  repayment_probability: number;
}

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  // Remplacez l'URL par celle de votre API FastAPI
  private apiUrl = 'http://192.168.100.206:8000/predict/';

  constructor(private http: HttpClient) { }

  predictCredit(data: any): Observable<CreditPredictionResponse> {
    return this.http.post<CreditPredictionResponse>(this.apiUrl, data);
  }
}
