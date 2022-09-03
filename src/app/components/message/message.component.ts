import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mensaje } from 'src/app/models/Mensaje';
import { ConstantProvider } from 'src/app/providers/constant.provider';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {


  @Input() isVisible: boolean;
  @Input() messageName: string;
  @Output() toDo: EventEmitter<any> = new EventEmitter();
  buttonColor;
  fontBtnColor;
  fontTtlColor;
  icoURL;
  textos: Array<Mensaje>;
  mensaje: Mensaje;
  headerTxt;

  // 1-rojo
  // 2-verde
  // 3-amarillo
  constructor(public constants: ConstantProvider) {
    this.textos = constants.TEXTOS;
  }

  ngOnInit() {
    this.mensaje = this.textos.find((item: Mensaje) => {
      return item.name === this.messageName;
    });
    if (this.mensaje.type === 1) {
      this.buttonColor = '#e63d3d'; // rojo
      this.fontBtnColor = '#ffffff'; // blanco
      this.fontTtlColor = '#e94f4d'; // rojo
      this.icoURL = '../../../assets/emergente-riesgo.png';
      this.headerTxt = 'Factor de riesgo';
    } else if (this.mensaje.type === 2) {
      this.buttonColor = '#5fb243'; // rojo
      this.fontBtnColor = '#ffffff'; // blanco
      this.fontTtlColor = '#5fb243'; // rojo
      this.icoURL = '../../../assets/emergente-proteccion.png';
      this.headerTxt = 'Factor de protección';
    } else {
      this.buttonColor = '#ecce39'; // rojo
      this.fontBtnColor = '#000000'; // blanco
      this.fontTtlColor = '#ecce39'; // rojo
      this.icoURL = '../../../assets/emergente-clave.png';
      this.headerTxt = 'Clave para';

    }
  }

  handleOk() {
    this.toDo.emit();
  }

}
