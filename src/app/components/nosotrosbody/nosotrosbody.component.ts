import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-nosotrosbody',
  templateUrl: './nosotrosbody.component.html',
  styleUrls: ['./nosotrosbody.component.css']
})
export class NosotrosbodyComponent {
  constructor(private router: Router) {}
  
  navigateToLogin() {
    this.router.navigateByUrl('/nosotros');
 }
}
