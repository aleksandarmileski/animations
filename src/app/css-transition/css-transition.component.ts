import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-css-transition',
    template: `
        <div
            (click)="setDivClicked()"
            [ngClass]="{marked: divClicked}"
            [ngStyle]="{backgroundColor: divClicked?'red':'blue'}"></div>
    `,
    styles: [`
        div {
            height: 100px;
            width: 100px;
        }

        .marked {
            width: 300px;
            background-color: blue;
            transition: background-color 1000ms ease-out 500ms, width 1000ms ease-in;
        }
    `]
})
export class CssTransitionComponent implements OnInit {
    private divClicked: boolean;

    constructor() {
    }

    ngOnInit() {
    }

    setDivClicked() {
        this.divClicked = !this.divClicked;
    }
}
