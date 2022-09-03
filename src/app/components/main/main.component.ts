import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { AnimationsINIT } from 'src/app/common/animationsINIT';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(public router:Router) { }
  ngOnInit() {
    AOS.init({
      duration: 800,
      anchorPlacement: 'center-bottom',
      // delay: 300,
    });
  }

  op1(){
    setTimeout(() => {
      this.router.navigate(['/d2']);
    }, 500);
  }
}
