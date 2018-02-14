import {animate, group, keyframes, state, style, transition, trigger} from '@angular/animations';

export const markedTrigger = trigger('markedState', [
    state('default', style({
        border: '1px solid black',
        backgroundColor: 'transparent',
    })),
    state('marked', style({
        border: '2px solid blue',
        backgroundColor: '#caeff9'
    })),
    transition('default => marked', [
        style({
            border: '1px solid black'
        }),
        animate('200ms ease-in', style({
            backgroundColor: '#caeff9',
            border: '2px solid blue',
            transform: 'scale(1.05)'
        })),
        animate('200ms ease-in', style({
            transform: 'scale(1)'
        }))
    ])
]);

export const itemStateTrigger = trigger('itemState', [
    transition(':enter', [
        animate('800ms ease-out', keyframes([
            style({
                opacity: 0,
                transform: 'translateX(-100%)',
                offset: 0
            }),
            style({
                opacity: 1,
                transform: 'translateX(10%)',
                offset: 0.7
            }),
            style({
                opacity: 1,
                transform: 'translateX(0)',
                offset: 1
            }),
        ]))
    ]),
    transition(':leave', [
        animate('300ms ease-in', keyframes([
            style({
                opacity: 1,
                transform: 'translateX(0)'
            }),
            style({
                transform: 'translateX(-10%)'
            }),
            style({
                opacity: 0,
                transform: 'translateX(100%)'
            })
        ]))
    ]),
    transition('slidUp=>slidDown', [
        style({
            opacity: 0,
            transform: 'translateY(-100%)'
        }),
        animate('300ms ease-out', style({
            opacity: 1,
            transform: 'translateY(0)'
        }))
    ]),
    transition('slidDown=>slidUp', [
        style({
            transform: 'translateY(0)'
        }),
        animate('300ms ease-in', style({
            transform: 'translateY(-100%)'
        }))
    ])

]);

export const slideStateTrigger = trigger('slideState', [
    transition(':enter', [
        style({
            opacity: 0,
            transform: 'translateY(-100%)'
        }),
        animate('300ms ease-out', style({
            opacity: 0.3,
            transform: 'translateY(20%)'
        })),
        animate('100ms ease-out', style({
            opacity: 1,
            transform: 'translateY(0)'
        }))
    ]),
    transition(':leave', [
        animate('400ms ease-in', keyframes([
            style({
                opacity: 0.3,
                transform: 'translateY(0)'
            }),
            style({
                opacity: 0,
                transform: 'translateY(-100%)'
            })
        ]))
    ])
]);

export const buttonSateTrigger = trigger('buttonState', [
    state('valid', style({
        // backgroundColor: 'green'
    })),
    state('invalid', style({
        // backgroundColor: 'red'
    })),
    transition('invalid=>valid', [
        group([
            animate(100, style({
                transform: 'scale(1.05)'
            })),
            animate(100, style({
                color: 'white',
                backgroundColor: '#5cb85c'
            }))
        ]),
        animate(200, style({
            transform: 'scale(1)'
        }))
    ]),
    transition('valid=>invalid', [
        group([
            animate(100, style({
                transform: 'scale(1.05)'
            })),
            animate(100, style({
                color: 'white',
                backgroundColor: '#d9534f'
            }))
        ]),
        animate(200, style({
            transform: 'scale(1)'
        }))
    ])
]);
