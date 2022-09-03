import { Component, OnInit } from '@angular/core';
import { AnimationsINIT } from 'src/app/common/animationsINIT';
import { ConstantProvider } from 'src/app/providers/constant.provider';
import { Router } from '@angular/router';
import AOS from 'aos';
import { trigger, transition, style, animate } from '@angular/animations';
import {Howl, Howler} from 'howler';


@Component({
  selector: 'app-yasaber',
  templateUrl: './yasaber.component.html',
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
  styleUrls: ['./yasaber.component.scss']
})
export class YasaberComponent implements OnInit {

  isVisible1 = false;
  msgName1 = 'D4-3-1';
  isVisible2 = false;
  msgName2 = 'D4-1-1';
  visible = 'collapse';
  isLoaded = false;

  sound;
  constructor() {
    this.sound = new Howl({
      src: ['../../../assets/music/d4-lose-nointeresa.mp3'],
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

  showMessage1() {
    this.isVisible1 = true;
  }

  showMessage2() {
    this.isVisible2 = true;
  }

  handleOk1(): void {
    console.log('Button ok clicked!');
    this.isVisible1 = false;
  }

  handleOk2(): void {
    console.log('Button ok clicked!');
    this.isVisible2 = false;
  }


  op1() { this.sound.fade(1, 0, 1000);
    setTimeout(() => {
       window.location.href = ('/d5/examenes');
    }, 500);
  }


}
