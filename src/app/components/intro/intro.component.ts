import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { Router } from '@angular/router';
import { Howl, Howler } from 'howler';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
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
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  isLoaded = false;
  visible="collapse";
  
  sound;
  constructor() {
    this.sound = new Howl({
      src: ['../../../assets/music/intro.mp3'],
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
    // setTimeout(() => {
    //   this.sound.play();
    // }, 2000);


    window.addEventListener('load', (event) => {
      this.isLoaded = true;
      setTimeout(() => {
        AOS.refreshHard();
        this.visible="visible";
      }, 500);
    });

    // window.addEventListener('scroll', (event) => {
    //   if (!this.sound.playing()) {
    //     this.sound.play();
    //   }
    // });


  }

  op1() { this.sound.fade(1, 0, 1000);
    setTimeout(() => {
      window.location.href = ('/d1');
    }, 500);
  }

  swipe() {
    document.getElementById('next').scrollIntoView({ block: 'start', behavior: 'smooth' });
    console.log("swipe");
    // this.sound.stop();
    // this.sound =  new Howl({
    //   src: ['../../../assets/music/d1.mp3'],
    //   autoplay: true,
    //   loop: true,
    //   volume: 1,
    //   html5: true,
    //   onload: (event) =>  {
    //     console.log('sound loaded');
    //   },
    //   onplay: (event) =>  {
    //     console.log('sound played');
    //   } 
    // });
  }
}
