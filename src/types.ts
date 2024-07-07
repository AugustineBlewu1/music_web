import { ElementRef } from "@angular/core";
import { SafeHtml } from "@angular/platform-browser";

export interface Page {
    name: string;
    link: string;
    icon: SafeHtml;
  }
export interface SubPage {
    name: string;
    link: string;
  }
export interface FriendsList {
  image: string;
    name: string;
  }

  export interface ArtistBanner {
    isVerified: boolean,
    monthlyListeners : number;
    artistBanner: string;
    artistName: string;
    artistIcon:string
  }
  export interface TrendySong {
    isUserFavorite: boolean,
    artistSongTitle : string;
    trendyImage: string;
    artistName: string;
  }


