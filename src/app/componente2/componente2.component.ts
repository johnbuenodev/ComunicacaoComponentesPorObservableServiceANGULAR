import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Comunicacao1Service } from '../service/comunicacao1.service';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.scss']
})
export class Componente2Component implements OnInit {

  getRegId?: number;
  getRegName?: string;

  constructor(
    private comunicacao1Service : Comunicacao1Service
  ) { }

  ngOnInit(): void {
    this.comunicacao1Service.valorCompoonente1$.subscribe( res => {
      this.getRegId = res.id;
      this.getRegName = res.name;   
    });
  }

}
