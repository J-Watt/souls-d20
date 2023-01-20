import { Component } from '@angular/core';

@Component({
  selector: 'app-play-info',
  templateUrl: './play-info.component.html',
  styleUrls: ['./play-info.component.css']
})
export class PlayInfoComponent {
  testimonials = [
    {
      name: "Grant 'Showers' Delhaes",
      icon: "DRAGONKIND",
      quote: "The Souls D20 system has been the perfect intro for a first-time TTRPG player. It has the depth to allow for \
      incredible freedom and problem solving, as well as incredible stupidity, and I couldn't ask for anything more."
    },
    {
      name: "Starr 'Dragonfly' Melton",
      icon: "DRAGONKIND",
      quote: "What started off as a homebrew D&D system quickly turned into an official system that many can enjoy." +
        " The insane amount of TLC that went into this really shows. When starting, it can be a bit intimating with the amount" +
        " of detail, but once you get past that you'll see how incredible this is. I have played this for a couple years," +
        " and even though I lost count on how many character I've went through, there was never a dull moment creating my" +
        " characters and playing the story. Dark Souls gameplay experience not required."
    },
    {
      name: "50 drums",
      icon: "HUMAN",
      quote: "Tim has created not only a unique and amazing play system from the ground up, he's also developed a whole world \
      with rich history and so many mind bending mysteries around every corner. As someone who enjoys the Dark Souls games and \
      D&D, this is a beautiful fusing of the two. I love how strategic the play style is, how collaborative with the other \
      players, and the mechanics of healing, AP & FP to manage in combat. You can also be very creative with your own character \
      creation as there are seemingly infinite combinations with the different races, starting background, weapons and feats. \
      10/10 highly recommend for anyone who is interested in delving way too deep... and too greedily."
    }
  ];

}
