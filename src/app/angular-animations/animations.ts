import {animate, state, style, transition, trigger} from '@angular/animations';

export const clickedStateTrigger = trigger('clickedState', [
    state('default', style({
        backgroundColor: 'orange',
        width: '100px',
        height: '100px'
    })),
    state('clicked', style({
        backgroundColor: 'blue',
        width: '300px',
        height: '50px'
    })),
    state('mousedown', style({
        backgroundColor: 'red',
        width: '100px',
        height: '100px',
        border: '1px solid black'
    })),
    transition('default <=> clicked', animate('1000ms ease-in')),
    transition('mousedown <=> default', animate('500ms ease-in')),
    transition('mousedown <=> clicked', animate('500ms ease-out')),
]);
export const numberEnteredStateTrigger = trigger('numberEnteredState', [
    state('unselected', style({
        border: '1px solid black',
        margin: '1px',
        padding: '5px'
    })),
    state('selected', style({
        border: '2px solid blue',
        padding: '4px',
        color: 'blue',
        backgroundColor: 'lightblue'
    })),
    transition('unselected <=> selected', [
        style({
            border: '2px solid black',
            padding: '4px'
        }),
        animate('300ms ease-out', style({
            backgroundColor: 'red',
            transform: 'scale(1.1)'
        })),
        animate(300)
    ])
]);
