import {Component, Renderer2} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    isFavorite = false;

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


}
