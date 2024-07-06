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


