import { Component } from '@angular/core';
import { ArtistBanner } from '../../types';

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.scss'
})
export class DiscoverComponent {

  artistsBanner : ArtistBanner[] = [
    {
      isVerified: false,
      monthlyListeners: 43434343,
      artistName: "Billie Eilish",
      artistBanner : "",
      artistIcon: ""
    }
  ]

}
