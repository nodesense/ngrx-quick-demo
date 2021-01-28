import { SET_LANGUAGES } from "../actions/language.actions";
import { Language } from '../models/Language';

export interface LanguageState {
    languages: Language[]
}

const INITIAL_STATE: LanguageState = {
    languages: []
}

// return values are managed by store
// should not make api call/async work here
// store will call reducer first time to initialize the state first time
// reducer will be called on every dispatch
// state is from store
// action is from dispatch
export function languageReducer(state = INITIAL_STATE, action: any): LanguageState {
    console.log('languageReducer called ')
    console.log('prev/current state ', state)
    console.log('action', action)
    switch(action.type) {
        case '[Language] Set': {
            return {languages: [...action.languages]}
        }

        default: return state;
    }
}