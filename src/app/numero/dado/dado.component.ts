import { Component } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})


export class DadoComponent {
    public dadoValue: number = 0;

    dadoRoll() {
        let randomNum = Math.floor(Math.random() * 6) + 1;
        this.dadoValue = randomNum;
    }
}

