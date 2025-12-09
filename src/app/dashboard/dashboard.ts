import {Component, OnInit} from '@angular/core';
import {Service} from '../services/movieDatabase';

interface Movie {
  id: number;
  title: string;
  episode?: string;
  duration?: string;
  progress?: number;
  thumbnail: string;
}

interface NavItem {
  id: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [

  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit{
  activeNav: string = 'home';
  getMovieData: { results: any[] } = { results: [] };
  searchMovieData: any;

  constructor(private movieDatabase: Service) {
  }

  ngOnInit() {
    this.movieDatabase.getPopularMovies().subscribe(data => {
      this.getMovieData = Array.isArray(data.results) ? data : { results: [] };
      console.log(this.getMovieData);
    });
  }


  navItems: NavItem[] = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'explore', label: 'Explore', icon: 'compass' },
    { id: 'genres', label: 'Genres', icon: 'gamepad' },
    { id: 'favourites', label: 'Favourites', icon: 'bookmark' }
  ];

  secondaryNavItems: NavItem[] = [
    { id: 'continue', label: 'Continue Watching', icon: 'clock' },
    { id: 'recent', label: 'Recently Added', icon: 'clock' },
    { id: 'collections', label: 'My Collections', icon: 'folder' },
    { id: 'downloads', label: 'Downloads', icon: 'download' }
  ];

  setActiveNav(navId: string): void {
    this.activeNav = navId;
  }

  onSearch(event: Event): void {
    const query = (event.target as HTMLInputElement).value;
    if (query.trim().length > 0) {
      this.movieDatabase.searchMovies(query).subscribe(data => {
        this.searchMovieData = data;
        console.log('Suchergebnisse:', this.searchMovieData);
      });
    } else {
      this.movieDatabase.getPopularMovies().subscribe(data => {
        this.searchMovieData = data;
      });
    }
  }


  playMovie(): void {
    console.log('Playing movie...');
  }

  downloadMovie(): void {
    console.log('Downloading movie...');
  }

  showMore(): void {
    console.log('Show more options...');
  }

  logout(): void {
    console.log('Logging out...');
  }
}
