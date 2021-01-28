import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LanguageService } from '../services/language.service';

// effect is a service
@Injectable()
export class LanguageEffect {
    // whenever an action is dispatched, the effects can intercept them
    // and implement the logic
    // async/api calls/timers calls all implemented in effects

    constructor(private languageService: LanguageService, 
                private actions$: Actions) {

                    // interceptors
                    // whenever action is dispatced it can intercept
                    this.actions$.pipe(
                        ofType('[Language] fetchLanguages')) // only allow fetchLanguage action processed
                        .subscribe( action => {
                            console.log("pipe typeof subcriber interceptor ", action)
                        })
                }

    
 



}
