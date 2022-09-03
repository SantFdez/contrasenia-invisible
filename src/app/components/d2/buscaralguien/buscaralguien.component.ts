import { Component, OnInit } from '@angular/core';
import { ConstantProvider } from 'src/app/providers/constant.provider';
import { AnimationsINIT } from 'src/app/common/animationsINIT';
import { Router } from '@angular/router';
import AOS from 'aos';
import { trigger, transition, style, animate } from '@angular/animations';
import {Howl, Howler} from 'howler';


@Component({
  selector: 'app-buscaralguien',
  templateUrl: './buscaralguien.component.html',
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: 0, opacity: 0 }),
            animate('0.1s ease-out',
              style({ height: '*', opacity: 1, position: 'relative' }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ height: '*', opacity: 1, position: 'relative' }),
            animate('0.1s ease-in',
              style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    ),
    trigger(
      'inOutRightAnimation',
      [
        transition(':enter', [
          style({ height: 0, opacity: 0 }),
          animate('0.1s ease-out', style({ transform: 'translateX(0%)', height: '*', opacity: 1 }))
        ]),
        transition(':leave', [
          animate('0.1s ease-in', style({ height: 0, opacity: 0 }))
        ])
      ]
    )
  ],
  styleUrls: ['./buscaralguien.component.scss']
})
export class BuscaralguienComponent implements OnInit {

  isVisible = false;
  msgName = 'D2';
  visible = 'collapse';
  isLoaded = false;

  sound;
  constructor() {
    this.sound = new Howl({
      src: ['../../../assets/music/d2-buscar-esperar.mp3'],
      loop: true,
      volume: 1,
      autoplay: true,
      onload: (event2) => {
        console.log('sound loaded');
        // this.sound.play();
      },
      onplay: (event2) => {
        console.log('sound played');
      },
      onloaderror: (event2, msg) => {
        console.log('onloaderror ', event2);
        console.log('onloaderror ', msg);
      },
      onplayerror: (event2, msg) => {
        console.log('onplayerror ', event2);
        console.log('onplayerror ', msg);
        console.log('onplayerror ', 'try second play');
        this.sound.once('unlock', (event3) => {
          console.log('second play');
          this.sound.play();
        });
      },
    });
  }

  ngOnInit() {
    AOS.init({
      duration: 800,
      anchorPlacement: 'center-bottom',
      // delay: 300,
    });
    window.scrollTo(0, 0);

    window.addEventListener('load', (event) => {
      this.isLoaded = true;
      setTimeout(() => {
        AOS.refreshHard();
        this.visible = 'visible';
      }, 500);
    });
  }

  showMessage() {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  op1() { this.sound.fade(1, 0, 1000);
    setTimeout(() => {
      window.location.href = ('/d3/vacilar');
    }, 500);
  }

  op2() { this.sound.fade(1, 0, 1000);
    setTimeout(() => {
      window.location.href = ('/d3/seguirbebiendo');
    }, 500);
  }

  op3() { this.sound.fade(1, 0, 1000);
    setTimeout(() => {
      window.location.href = ('/d3/hacertarea');
    }, 500);
  }

}
