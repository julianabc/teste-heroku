import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {catchError, tap, map } from 'rxjs/operators';
// criar apenas para participantes afins de testes
import { Participante } from './participante';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'aplication/json'})
};

const apiUrl = 'http/localhost:500/api/participante';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  getParticipante(): Observable<Participante[]>{

    return this.http.get<Participante[]>(apiUrl)
    .pipe(
      tap(produtos => console.log('leu os participantes')),

      catchError(this.handleError('getParticipante', []))

    );

  } // fim do get participante

  addParticipante (participante): Observable<Participante>{

    return this.http.post<Participante>(apiUrl, participante, httpOptions).pipe(
      tap((participante: Participante) => console.log('adicionou participante ao banco')),

      catchError(this.handleError<Participante>('addParticipante'))
    )

  } // fim do addparticipante

  private handleError <T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> =>{
      console.error(error);

      return of(result as T);

    };
  } // fim do handle error

} // fim do serviço



