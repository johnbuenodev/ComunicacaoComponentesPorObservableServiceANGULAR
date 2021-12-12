import { Component, OnInit } from '@angular/core';
import { registro } from '../interfaces/registro';
import { Comunicacao1Service } from '../service/comunicacao1.service';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.scss']
})
export class Componente1Component implements OnInit {

  registros: registro[] = [
    {'id':1,'name':"motley crue"},
    {'id':2,'name':"alice cooper"},
    {'id':3,'name':"Fastway"},
    {'id':4,'name':"L.A guns"}
  ];

  constructor(
    private comunicacao1Service : Comunicacao1Service
  ) { }

  ngOnInit(): void {
  }

  acessandoRegistro(regSelected: registro) {
   //console.log(regSelected.id);
   //console.log(regSelected.name);
   this.comunicacao1Service.valorCompoonente1$.emit(regSelected);
  }
}
