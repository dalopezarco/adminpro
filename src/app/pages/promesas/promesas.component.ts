import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {
  constructor() {
    this.contar3segundos().then(() => console.log('Terminó!'));
  }

  ngOnInit() {}

  contar3segundos(): Promise<void> {
    return new Promise((resolve, reject) => {
      let contador = 0;
      setInterval(() => {
        contador += 1;
        if (contador === 3) {
          resolve();
        }
      }, 1000);
    });
  }
}
