import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
    selector: 'app-landigPage',
    standalone: true,
    imports: [CommonModule, NavbarComponent],
    templateUrl : './landigPage.component.html',
    styleUrls: ['./landigPage.component.scss'],
})
export class LandigPageComponent {}