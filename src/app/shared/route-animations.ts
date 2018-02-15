import {animate, animation, style, transition, trigger, useAnimation} from '@angular/animations';

const fadeAnimation = animation([
    style({
        opacity: '{{ startOpacity }}'
    }), animate('{{ duration }}')
], {params: {startOpacity: 0, duration: '100ms'}});

export const routeFadeStateTrigger = (params) => trigger('routeFadeState', [
    transition(':enter', [
        useAnimation(fadeAnimation, {params: params})
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
