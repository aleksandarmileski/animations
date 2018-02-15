import {Component, Renderer2} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {animate, animateChild, group, query, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [
        trigger('routeState', [
            transition('* => *', [
                group([
                    query(':enter', [
                        // animateChild(),
                        style({
                            transform: 'translateY(-400px)',
                            color: 'red',
                            opacity: 0
                        }),
                        animate('300ms ease-out')
                    ], {optional: true}),
                    query(':leave', [
                        animate('300ms ease-out', style({
                            transform: 'translateY(600px)',
                            opacity: 0
                        }))
                    ], {optional: true})
                ])
            ])
        ])
    ]
})
export class AppComponent {

    constructor(private renderer: Renderer2) {
    }

    courseGoals = [
        {title: 'Master Angular Styling', isActiveGoal: true},
        {title: 'Understanding Angular Animations', isActiveGoal: false},
        {title: 'Master Angular Animations', isActiveGoal: false}
    ];

    setActiveGoal(index) {
        this.courseGoals.forEach((goal, ind) => {
            goal.isActiveGoal = ind === index;
        });
    }

    onShowBoring(element: HTMLElement) {
        this.renderer.setStyle(element, 'display', 'block');
    }

    getAnimationData(outlet: RouterOutlet) {
        const routeData = outlet.activatedRouteData['animation'];
        if (!routeData) {
            return 'projectsPage';
        }
        return routeData['page'];
    }
}
