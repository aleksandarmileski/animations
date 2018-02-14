import {animate, style, transition, trigger} from '@angular/animations';

export const routeFadeStateTrigger = trigger('routeFadeState', [
    transition(':enter', [
        style({
            opacity: 0
        }),
        animate(400)
    ]),
    transition(':leave', [
        style({
            opacity: 0
        }),
        animate(100)
    ])
]);

export const routeSlideStateTrigger = trigger('routeSlideState', [
    transition(':enter', [
        style({
            transform: 'translateY(-100%)',
            opacity: 0
        }),
        animate(400)
    ]),
    transition(':leave',
        animate(400, style({
            transform: 'translateY(100%)',
            opacity: 0
        }))
    )
]);
