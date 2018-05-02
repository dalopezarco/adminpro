import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
    this.subscription = this.regresaObservable().subscribe(
      numero => {
        console.log(numero);
      },
      error => console.error(error),
      () => console.log('Terminado')
    );
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable(observer => {
      let contador = 0;

      const intervalo = setInterval(() => {
        contador++;
        let salida = {
          valor: contador
        };
        observer.next(salida);
        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }
      }, 500);
    })
      .retry(1)
      .map((resp: any) => {
        return resp.valor;
      })
      .filter(resp => {
        return resp % 2 === 0;
      });
  }
}
