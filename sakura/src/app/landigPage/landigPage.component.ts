import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-landigPage',
    standalone: true,
    imports: [CommonModule,],
    template: `
    <section>
    <h1>Hello World!</h1>
    <h2>Best Ramen in Town</h2>
    </section>    
    `,
    styleUrls: ['./landigPage.component.scss'],
})
export class landigPageComponent {

}