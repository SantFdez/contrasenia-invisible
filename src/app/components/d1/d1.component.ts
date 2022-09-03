import { Component, OnInit } from '@angular/core';
import { AnimationsINIT } from 'src/app/common/animationsINIT';
import { ConstantProvider } from 'src/app/providers/constant.provider';
import { Router } from '@angular/router';
import AOS from 'aos';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { Howl, Howler } from 'howler';


@Component({
  selector: 'app-d1',
  templateUrl: './d1.component.html',
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
  styleUrls: ['./d1.component.scss']
})
export class D1Component implements OnInit {

  isVisible = false;
  visible = 'collapse';
  msgName = 'D1';
  isLoaded = false;
  sound;
  constructor() {
    this.sound = new Howl({
      src: ['../../../assets/music/d1.mp3'],
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

  op1() {
    this.sound.fade(1, 0, 1000);
    setTimeout(() => {
      window.location.href = ('/d2/esperar');
    }, 500);
  }

  op2() {
    this.sound.fade(1, 0, 1000);
    setTimeout(() => {
      window.location.href = ('/d2/buscaralguien');
    }, 500);
  }


}
