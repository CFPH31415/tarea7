import { Component } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})


export class DadoComponent {

  numero= 0;
  resultado=0;
  tirarDado(){
    
    this.resultado = this.numero = Math.floor((Math.random() * 6) + 1);

  }
}
