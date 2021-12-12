import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Comunicacao1Service {

  valorCompoonente1$ = new EventEmitter<any>();

  constructor() { }
}
