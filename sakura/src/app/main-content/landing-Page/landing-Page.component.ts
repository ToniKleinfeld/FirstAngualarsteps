import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
    selector: 'app-landigPage',
    standalone: true,
    imports: [CommonModule, NavbarComponent],
    templateUrl : './landing-Page.component.html',
    styleUrls: ['./landing-Page.component.scss'],
})
export class LandingPageComponent {}