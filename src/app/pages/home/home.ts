import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Features } from '../../components/features/features';
import { Stats } from '../../components/stats/stats';
import { Header } from "../../components/header/header";
import { Investors } from '../../components/investors/investors';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, Features, Stats, Header , Investors],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {}
