import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  displayContentInfo(contentItem: Content) {
    console.log(`ID: ${contentItem.id} and Title: ${contentItem.title}`);
    }
  @Input () contentItems: Content[] = [];

  ngOnInit(): void {
    this.contentItems = [
      {
        id: 0,
        title: "Classical Maestros",
        description: "A deep dive into the lives and works of classical music legends, from Beethoven to Chopin.",
        creator: "Amadeus Mozart",
        imgURL: "https://img.freepik.com/premium-vector/square-poster-flyer-template-music-event-dj_85212-198.jpg",
        type: "Documentary",
        tags: ["Classical", "Composers"]
      },
      {
        id: 1,
        title: "The Jazz Experience",
        description: "Exploring the rich history of jazz music, its evolution, and its profound impact on music today.",
        creator: "Ella Fitzgerald",
        imgURL: "https://img.freepik.com/premium-vector/square-poster-flyer-template-music-event-dj_85212-198.jpg",
        type: "Series",
        tags: ["Jazz", "History"]
      },
      {
        id: 2,
        title: "Rock Revolution",
        description: "A series that chronicles the rise of rock music, featuring iconic bands and their journey to fame.",
        creator: "Jimmy Page",
        imgURL: "https://img.freepik.com/premium-vector/square-poster-flyer-template-music-event-dj_85212-198.jpg",
        type: "Documentary",
        tags: ["Rock", "Bands"]
      },
      {
        id: 3,
        title: "Electronic Waves",
        description: "Dive into the world of electronic music, from the early days of techno and house to the modern EDM scene.",
        creator: "Daft Punk",
        imgURL: "https://img.freepik.com/premium-vector/square-poster-flyer-template-music-event-dj_85212-198.jpg",
        type: "Series",
        tags: ["Electronic", "EDM"]
      },
      {
        id: 4,
        title: "Hip-Hop Chronicles",
        description: "An in-depth look at the hip-hop genre, its cultural significance, and the artists who shaped its direction.",
        creator: "Nasir Jones",
        imgURL: "https://img.freepik.com/premium-vector/square-poster-flyer-template-music-event-dj_85212-198.jpg",
        type: "Documentary",
        tags: ["Hip-Hop", "Culture"]
      }
    ];
  }
  
}