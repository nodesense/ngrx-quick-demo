import { createAction, props } from '@ngrx/store';
import { Language } from '../models/Language';

export const increment = createAction('[Counter Component] Increment');



export const FETCH_LANGAGES = createAction(
    '[Language] fetchLanguages', // TYPE
  );
  

export const SET_LANGUAGES = createAction(
  '[Language] Set', // TYPE
  props< {languages: Language[]}>()  // PAYLOAD
);
