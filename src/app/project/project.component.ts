import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Project} from '../project';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
    @Input() project: Project;
    @Output() projectStatus: EventEmitter<any> = new EventEmitter<any>();
    @Output() deleteProject: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
    }

    onUpdateStatus(status) {
        this.projectStatus.emit(status);
    }

    onDelete() {
        this.deleteProject.emit(true);
    }

}
