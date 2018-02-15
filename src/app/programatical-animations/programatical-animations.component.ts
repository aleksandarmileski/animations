import {Component, OnInit} from '@angular/core';
import {animate, AnimationBuilder, style} from '@angular/animations';

@Component({
    selector: 'app-programatical-animations',
    templateUrl: './programatical-animations.component.html',
    styleUrls: ['./programatical-animations.component.css']
})
export class ProgramaticalAnimationsComponent implements OnInit {

    constructor(private builder: AnimationBuilder) {
    }

    ngOnInit() {
    }

    animate(element: any) {
        const animation = this.builder.build([
            style({
                backgroundColor: 'red',
                width: '100px'
            }),
            animate(300, style({
                width: '500px'
            })),
            animate(200)
        ]);

        const player = animation.create(element);
        player.play();
    }
}
