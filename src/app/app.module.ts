import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { languageReducer } from './state/reducers/language.reducer';
import {HttpClientModule} from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { LanguageEffect } from './state/effects/language.effect';
import { LanguageService } from './state/services/language.service';
import { Store } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ 
      //stateName: reducerFunc
      languages: languageReducer,
      //favorites: favoriteReduers
     }),

    // EffectsModule.forFeature([LanguageEffect])
  ],
  providers: [LanguageService, Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
