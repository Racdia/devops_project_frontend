import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreditService, CreditPredictionResponse } from '../credit.service';
import { MatDialog } from '@angular/material/dialog';
import { PredictionResultDialogComponent } from '../prediction-result-dialog/prediction-result-dialog.component';

@Component({
  selector: 'app-scoring-form',
  templateUrl: './scoring-form.component.html',
  styleUrls: ['./scoring-form.component.css']
})
export class ScoringFormComponent implements OnInit {
  creditForm!: FormGroup;
  topFeatures: string[] = [
    'num__EXT_SOURCE_2',
    'num__EXT_SOURCE_3',
    'num__DAYS_BIRTH',
    'num__DAYS_ID_PUBLISH',
    'num__DAYS_REGISTRATION',
    'num__SK_ID_CURR',
    'num__AMT_ANNUITY',
    'num__DAYS_LAST_PHONE_CHANGE',
    'num__DAYS_EMPLOYED',
    'num__AMT_CREDIT',
    'num__AMT_INCOME_TOTAL',
    'num__REGION_POPULATION_RELATIVE',
    'num__AMT_GOODS_PRICE',
    'num__HOUR_APPR_PROCESS_START',
    'num__TOTALAREA_MODE',
    'num__AMT_REQ_CREDIT_BUREAU_YEAR',
    'num__YEARS_BEGINEXPLUATATION_MEDI',
    'num__YEARS_BEGINEXPLUATATION_MODE',
    'num__YEARS_BEGINEXPLUATATION_AVG',
    'num__OBS_60_CNT_SOCIAL_CIRCLE'
  ];
  
  errorMessage?: string;

  constructor(
    private fb: FormBuilder,
    private creditService: CreditService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.creditForm = this.fb.group({});
    this.topFeatures.forEach(feature => {
      this.creditForm.addControl(feature, this.fb.control('', Validators.required));
    });
  }

  onSubmit(): void {
    if (this.creditForm.valid) {
      const formData = this.creditForm.value;
      this.creditService.predictCredit(formData).subscribe(
        (response: CreditPredictionResponse) => {
          // Ouvrir le dialogue avec le résultat
          this.dialog.open(PredictionResultDialogComponent, {
            data: response,
            width: '400px'
          });
          this.errorMessage = undefined;
        },
        error => {
          console.error('Erreur lors de l\'appel à l\'API :', error);
          this.errorMessage = 'Une erreur est survenue lors de la prédiction.';
        }
      );
    } else {
      this.creditForm.markAllAsTouched();
    }
  }

  // Méthode pour formater les labels (optionnelle)
  getLabel(feature: string): string {
    if (feature.startsWith('num__')) {
      feature = feature.substring(5);
    }
    feature = feature.replace(/_/g, ' ').toLowerCase();
    return feature.charAt(0).toUpperCase() + feature.slice(1);
  }
}
