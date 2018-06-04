import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnDestroy {
  subscription: Subscription;

  constructor() {


    this.subscription =  this.regresaObservable().subscribe(
      numero => {
        console.log('Subs ', numero);
      },
      err => console.log(err),
      () => console.log('Se ha acabado el observable')
    );
  }

  regresaObservable(): Observable<any> {
    return  new Observable(observer => {
      let contador = 1;


      const intervalo = setInterval(() => {

        const salida = {
          valor: contador
        };

        observer.next(salida);

        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }
        // if (contador === 2) {
        //   clearInterval(intervalo);
        //   observer.error('Ha ocurrido un error');
        // }
        contador += 1;
      }, 1000);
    }).pipe(
      retry(2),
      map((resp: any) => {
        return resp.valor;
      }),
      filter((valor, index) => {
        if(valor % 2 !== 0) {
          return valor;
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
