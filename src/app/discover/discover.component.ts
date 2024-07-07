import { Component, ElementRef, ViewChild } from '@angular/core';
import { ArtistBanner, TrendySong } from '../../types';

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.scss'
})
export class DiscoverComponent {

  @ViewChild('scrollableDiv') private scrollable!: ElementRef<HTMLDivElement>;
  scrollPosition: 'left' | 'right' | null  = null;

  artistsBanner : ArtistBanner[] = [
    {
      isVerified: false,
      monthlyListeners: 43434343,
      artistName: "Billie Eilish",
      artistBanner : "",
      artistIcon: ""
    }
  ];


  trendySongs: TrendySong[] = [
    {
      trendyImage: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      artistName: "Darwin",
      artistSongTitle:"Brainwash",
      isUserFavorite: false
    },
    {
      trendyImage: "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      artistName: "Ninesoul",
      artistSongTitle:"Heatin` Up",
      isUserFavorite: true
    },
    {
      trendyImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG11c2ljfGVufDB8fDB8fHww",
      artistName: "The Freak",
      artistSongTitle:"Rounds",
      isUserFavorite: false
    },
    {
      trendyImage: "https://plus.unsplash.com/premium_photo-1683140707316-42df87760f3f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      artistName: "White man's",
      artistSongTitle:"Born to die",
      isUserFavorite: false
    },
    {
      trendyImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      artistName: "White Darwin",
      artistSongTitle:"Washing",
      isUserFavorite: false
    },
    {
      trendyImage: "https://images.unsplash.com/photo-1548502632-6b93092aad0b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fG11c2ljfGVufDB8fDB8fHww",
      artistName: "Vivian",
      artistSongTitle:"Look Up",
      isUserFavorite: false
    }
  ]


  scrollToRight(): void {
    console.log('Testing')
    console.log(this.scrollable.nativeElement.scrollWidth);
    this.scrollable.nativeElement?.scroll({
      left: this.scrollable.nativeElement.scrollWidth,
      behavior: "smooth"
    })
  }
  scrollToLeft(): void {
    console.log('Testing')
    console.log(this.scrollable.nativeElement.scrollWidth);

    this.scrollable.nativeElement?.scroll({
      left: 0,
      behavior: "smooth"
    })
  }


  onScroll(){
    const divElement = this.scrollable?.nativeElement;
    const scrolltoleft = divElement.scrollLeft;
    const scrollWidth =  divElement.scrollWidth;
    const clientWidth = divElement.clientWidth;
    if(scrolltoleft + clientWidth >= scrollWidth){
      this.scrollPosition = 'right';

    }else if(scrolltoleft === 0){
      this.scrollPosition = 'left'
    } else {
      this.scrollPosition = null;
    }

    
  }

}
