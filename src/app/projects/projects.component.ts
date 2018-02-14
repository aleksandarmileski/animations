import {Component, HostBinding, OnInit} from '@angular/core';
import {ProjectsService} from '../projects.service';
import {buttonSateTrigger, itemStateTrigger, markedTrigger, slideStateTrigger} from '../project/project-animations';
import {Project} from '../project';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {routeSlideStateTrigger} from '../shared/route-animations';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css'],
    animations: [
        markedTrigger,
        itemStateTrigger,
        slideStateTrigger,
        buttonSateTrigger,
        routeSlideStateTrigger
    ]
})
export class ProjectsComponent implements OnInit {

    @HostBinding('@routeSlideState') routeAnimation = true;

    projects = [];
    markedPrjIndex;
    progress = 'progressing';
    createNew: boolean;
    statuses = ['active', 'inactive', 'critical'];
    projectForm: FormGroup;

    constructor(private projectsService: ProjectsService, private fb: FormBuilder) {
    }

    ngOnInit() {
        this.projectsService.getProjects()
            .subscribe(p => {
                p.forEach((project, i) => {
                    setTimeout(function () {
                        this.projects.push(project);
                    }.bind(this), i * 200);
                });
                this.progress = 'finished';
            });
        this.createForm();
    }

    createForm() {
        this.projectForm = this.fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            status: ['inactive', Validators.required],
        });
    }

    onStatusChange(newStatus) {
        if (newStatus) this.projects[this.markedPrjIndex]['status'] = newStatus;
    }

    onProjectCreated(project: Project) {
        this.createNew = false;
        this.projects.unshift(project);
    }

    deleteProject(o) {
        const delInd = this.projects.findIndex(project => project.name === o.name);
        this.projects.splice(delInd, 1);
    }

    onAnimationExecuted(project, i) {
        // console.log(project, ' ', i);
    }

    onAddGroup() {
        ((project) => {
            console.log(project);
            setTimeout(function () {
                this.projects.unshift(project);
                setTimeout(function () {
                    this.createNew = false;
                }.bind(this), 800);
            }.bind(this), 300);
        })(<Project>this.projectForm.value);
        this.createForm();
    }
}
