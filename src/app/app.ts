import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Hero } from "./components/hero/hero";
import { Features } from "./components/features/features";
import { Stats } from "./components/stats/stats";
import { Investors } from './components/investors/investors';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, Hero, Features, Stats , Investors],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {}
