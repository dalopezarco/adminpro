import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html'
})
export class GraficoDonaComponent implements OnInit {
  @Input() labels: string[];
  @Input() data: string[];
  @Input() type: string;
  @Input() leyenda: string;


  constructor() {}

  ngOnInit() {}
}
