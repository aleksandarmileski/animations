import {Component, OnInit} from '@angular/core';
import {clickedStateTrigger, numberEnteredStateTrigger} from './animations';

@Component({
    selector: 'app-angular-animations',
    template: `
        <div
            [@clickedState]="clicked"
            (mousedown)="clicked='mousedown'"
            (click)="onClickSimple()"></div>
        <h3
            class="mt-3"
            (click)="headingTriger = 'clicked'"
            [@clickedState]="headingTriger">H3</h3>
        <hr>
        <input type="number" class="mb-3" (input)="numberEntered = $event.target.value">
        <br>
        <span
            class="m-1"
            *ngFor="let number of [0,1,2,3,4,5,6,7,8,9]"
            [@numberEnteredState]="numberEntered == number ? 'selected':'unselected'">{{" " + number + " "}}</span>
    `,
    styles: [`
        /*div {*/
        /*width: 100px;*/
        /*height: 100px;*/
        /*background-color: orange;*/
        /*}*/
        span {
            display: inline-block;
        }
    `],
    animations: [
        clickedStateTrigger,
        numberEnteredStateTrigger
    ]
})
export class AngularAnimationsComponent implements OnInit {
    clicked = 'default';
    headingTriger = 'default';

    constructor() {
    }

    ngOnInit() {
    }

    onClickSimple() {
        this.clicked = 'clicked';
        setTimeout(() => {
            this.clicked = 'default';
        }, 1000);
    }

}
