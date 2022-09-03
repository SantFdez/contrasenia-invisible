import AOS from 'aos';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class AnimationsINIT {
    public animate() {
        AOS.init({
            duration: 800,
            anchorPlacement: 'center-bottom',
            // delay: 300,
          });
    }
}
