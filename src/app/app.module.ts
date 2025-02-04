import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Ajoutez cette ligne
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { ScoringFormComponent } from './scoring-form/scoring-form.component';
import { CreditService } from './credit.service';
import { CreditMoneyWidgetComponent } from './credit-money-widget/credit-money-widget.component';
import { PredictionResultDialogComponent } from './prediction-result-dialog/prediction-result-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoringFormComponent,
    CreditMoneyWidgetComponent,
    PredictionResultDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Importez ce module pour activer les animations
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [CreditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
