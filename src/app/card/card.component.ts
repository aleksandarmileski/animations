import {Component, OnInit} from '@angular/core';
import {animate, group, query, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
    animations: [
        trigger('panelState', [
            transition(':enter', [
                group([
                    query(':self', [
                        style({
                            opacity: 0
                        }),
                        animate(1000)
                    ]),
                    query('.card-header', [
                        style({
                            transform: 'translateY(-300%)',
                            opacity: 0
                        }),
                        animate(300)
                    ]),
                    query('.card-block', [
                        style({
                            transform: 'translateX(-100%)',
                            opacity: 0
                        }),
                        animate(300)
                    ]),
                    query('.card-footer', [
                        style({
                            transform: 'translateY(300%)',
                            opacity: 0
                        }),
                        animate(300)
                    ])
                ])
            ]),
            transition('* => *', [
                query(':enter', [
                    style({
                        transform: 'scale(1)'
                    }),
                    animate(200, style({
                        transform: 'scale(1.1)'
                    })),
                    animate(100)
                ], {optional: true}),
                query('p', [
                    style({
                        backgroundColor: 'orange'
                    }),
                    animate(500)
                ], {optional: true})
            ])
        ])
    ]
})
export class CardComponent implements OnInit {
    needAnimation: boolean;
    showParagraph: boolean;

    constructor() {
    }

    ngOnInit() {
    }

}
