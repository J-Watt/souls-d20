import { Component } from '@angular/core';

import { CopyService } from '../copy.service';

@Component({
  selector: 'app-play-info',
  templateUrl: './play-info.component.html',
  styleUrls: ['./play-info.component.css']
})
export class PlayInfoComponent {
  testimonials = [
    {
      name: "Zand, longtime player, most deaths in a campaign",
      icon: "GRME",
      quote: "Very few systems let me kill my character every week, then create a new one that is wildly different."
    },
    {
      name: "Kelly",
      icon: "FERNO",
      quote: "So Random! I never know what fresh Hell my toon will fall into each session. It really keeps you on your toes!" +
        " Never get attached to your toon, or build a very thorough character backstory - you're wasting your time."
    },
    {
      name: "Liz",
      icon: "DEMONKIND",
      quote: "I played my character Bazgalith for a year or more, these other fools just didn't realize that there is a" +
        " ring of sacrifice. (Also you can have a cat companion - what's not to love?!)"
    }
  ];
}
