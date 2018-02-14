import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-author',
    template: `
        <h1>Author Component</h1>
        <div>
            <h1>Author details</h1>
        </div>
    `,
    styles: [`
        h1 {
            margin: 0;
            font-size: 12px;
            color: blue;
        }

        :host {
            display: block;
            border: 1px solid black;
            padding: 20px;
        }

        :host(.favorite) {
            background-color: yellow;
        }

        :host-context(.boring #very-boring) {
            background-color: aquamarine;
        }

        :host-context(.boring #very-boring) /deep/ h1 {
            font-size: 16px;
            color: brown;
        }
    `],
    encapsulation: ViewEncapsulation.Emulated
})
export class AuthorComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
