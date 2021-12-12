import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Comunicacao1Service } from '../service/comunicacao1.service';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.scss']
})
export class Componente2Component implements OnInit, OnDestroy {

  getRegId?: number;
  getRegName?: string;
  comunicacao1Unsuscription!: Subscription;

  constructor(
    private comunicacao1Service : Comunicacao1Service
  ) { }

  ngOnInit(): void {
    this.comunicacao1Unsuscription = this.comunicacao1Service.valorCompoonente1$.subscribe( res => {
      this.getRegId = res.id;
      this.getRegName = res.name;   
    });
  }

  ngOnDestroy(): void {
    console.log("Cancelar a inscrição!");
    this.comunicacao1Unsuscription.unsubscribe();
  } 

}
