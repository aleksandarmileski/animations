import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-css-animation',
    template: `
        <div
            (click)="animate= !animate"
            [ngClass]="{animate: animate}"></div>
    `,
    styles: [`
        div {
            width: 150px;
            height: 75px;
            background-color: green;
        }

        .animate {
            animation: moved 3s ease-out forwards;
        }

        @keyframes moved {
            0% {
                transform: translateX(0) scale(1);
                opacity: 1;
            }
            50% {
                transform: translateX(300px) scale(1.2);
            }
            75% {
                transform: translateX(400px) scale(1);
                opacity: 0.3;
            }
            100% {
                transform: translateX(400px) scale(1);
                opacity: 0.1;
            }
        }
    `]
})
export class CssAnimationComponent implements OnInit {
    animate = false;

    constructor() {
    }

    ngOnInit() {
    }

}
