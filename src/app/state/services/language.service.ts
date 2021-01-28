import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class LanguageService {
    constructor(private http: HttpClient) {

    }
    getLanguages() {
        const key = 'key from themoviedb.org';

        return this.http.get(`https://api.themoviedb.org/3/configuration/languages?api_key=${key}`
        )
    }
}