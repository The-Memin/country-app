import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenu } from '../../components/top-menu/top-menu';

@Component({
  selector: 'app-country-layout',
  templateUrl: './CountryLayout.html',
  imports: [RouterOutlet, TopMenu],
})
export class CountryLayout {}
