import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-quote',
    template: `
        <h1>Dreams</h1>
        <p>You only dream when you sleep</p>
        <app-author></app-author>
    `,
    styles: [`
        h1 {
            color: red;
        }
    `]
})
export class QuoteComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
