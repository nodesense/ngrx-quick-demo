import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Language } from './state/models/Language';
import { LanguageState } from './state/reducers/language.reducer';


// inject store
// use selector to get the data needed, rxjs, select and susbcribe
// when store data updated, susbcribe is called
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-demo';

  languageState$: Observable<LanguageState>;

  // <Store <{ stateName: StateType from reducer}
  constructor(private store: Store< {languages: LanguageState} >, 
              private http: HttpClient ) {
    // select (stateName)
     store.pipe(select('languages'))
          .subscribe( languageState => {
            console.log("Languages at component ", languageState)
          })

    // for async pipe
    this.languageState$ =  store.pipe(select('languages'));
  }
 
  ngOnInit() {
    // BAD
    // typically effect is used to pull the data or services
    // dispatch by hardcoding
    const langs: Language[] = [
      {name: 'en', iso_639_1: 'en-us', english_name: 'en'}
    ]

    // dispatch and initialize store
    // const action = {
    //   type: '[Language] Set',
    //   languages: langs
    // }

    // dispatch will call reducers,
    // while calling, it will take prev state from store, action from dispatch
    // after store is updatd, your selector subscribe called with updated data
   // this.store.dispatch(action)

   // bad, typically done in effects

   const key = 'key from themoviedb.org';

   this.http.get(`https://api.themoviedb.org/3/configuration/languages?api_key=${key}`)
            .subscribe(languages => {
              // dispatch here
              // dispatch and initialize store
              const action = {
                type: '[Language] Set',
                languages: languages
              }

              this.store.dispatch(action)
            })

  }

  fetchLanguages() {
    // dispatch and initialize store
    const action = {
      type: '[Language] fetchLanguages',
    }

    // goes via effect
    this.store.dispatch(action)
  }
}
