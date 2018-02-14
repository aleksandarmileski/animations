import {Component, OnInit} from '@angular/core';
import {animate, group, keyframes, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-pro-angular-animations',
    template: `
        <button
            class="btn"
            (click)="isShown = !isShown"
            [ngClass]="{'btn-outline-danger': isShown,'btn-outline-success':!isShown}">
            {{isShown ? 'Hide Element' : 'Show Element'}}
        </button>
        <p
            @showState
            *ngIf="isShown" class="mt-3">
            pro-angular-animations component!
        </p>
        <hr>
        <button class="btn btn-outline-warning "
                (click)="width = width-50">Shrink
        </button>
        <button class="btn btn-outline-success"
                (click)="animate= !animate">Animate
        </button>
        <p
            class="mt-3"
            [@animateState]="animate ? 'animated':'noAnimation'"
            [ngStyle]="{'width.px': width}">
            Shrink this paragraph</p>
        <hr>
        <button class="btn btn-success mb-3" (click)="addElement()">Add lement</button>
        <button class="btn btn-danger mb-3" (click)="removeElement()" *ngIf="testResults.length">Remove element</button>
        <p *ngFor="let element of testResults"
           @listState
           (@listState.start)="onAnimationStarted($event)"
           (@listState.done)="onAnimationDone($event)">
            {{element}}
        </p>
    `,
    styles: [`
        p {
            border: 1px solid black;
            background-color: lightblue;
            padding: 10px;
            min-width: 200px;
        }
    `],
    animations: [
        trigger('showState', [
            state('shown', style({})),
            // transition('void => *', [
            //     style({
            //         opacity: 0
            //     }),
            //     animate(500, style({
            //         opacity: 1
            //     }))]),
            // transition('* => void', [
            //     animate(1000, style({
            //         opacity: 0
            //     }))])
            transition(':enter', [
                style({
                    opacity: 0
                }),
                animate(500, style({
                    opacity: 1
                }))]),
            transition(':leave', [
                animate(1000, style({
                    opacity: 0
                }))])
        ]),
        trigger('animateState', [
            transition('* =>*', [
                animate('4000ms cubic-bezier(.07,.97,0,-1.1)', style({width: 0})),
                // animate(400, style({width: '100%'})),
                animate(400, style({width: '*'})),
            ])
        ]),
        trigger('listState', [
            transition(':enter', [
                style({
                    opacity: 0,
                    backgroundColor: 'white'
                }),
                group([
                    animate(200, style({
                        opacity: 0.5
                    })),
                    animate('500ms ease-out', keyframes([
                        style({
                            backgroundColor: 'white',
                            offset: 0
                        }),
                        style({
                            backgroundColor: 'red',
                            offset: 0.1
                        }),
                        style({
                            backgroundColor: 'green',
                            offset: 1
                        })
                    ])),
                ]),
                animate(300, style({
                    backgroundColor: 'lightblue'
                }))]),
            transition(':leave', [
                animate(300, style({
                    opacity: 0
                }))])
        ]),
    ]
})
export class ProAngularAnimationsComponent implements OnInit {
    isShown: boolean;
    width = 400;
    animate;
    testResults: number[] = [];

    constructor() {
    }

    ngOnInit() {
    }

    addElement() {
        this.testResults.push(Math.random());
    }

    removeElement() {
        if (this.testResults) this.testResults.pop();
    }

    onAnimationStarted(element: AnimationEvent) {
        console.log(element);
    }

    onAnimationDone(element: AnimationEvent) {
        console.log(element);
    }
}
