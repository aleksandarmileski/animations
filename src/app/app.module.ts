import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {GoalComponent} from './goal/goal.component';
import {QuoteComponent} from './quote/quote.component';
import {AuthorComponent} from './author/author.component';
import {RouterModule, Routes} from '@angular/router';
import {ProjectsComponent} from './projects/projects.component';
import {HeaderComponent} from './header/header.component';
import {ProjectComponent} from './project/project.component';
import {ProjectsService} from './projects.service';
import {CssTransitionComponent} from './css-transition/css-transition.component';
import {CssAnimationComponent} from './css-animation/css-animation.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularAnimationsComponent} from './angular-animations/angular-animations.component';
import {ProAngularAnimationsComponent} from './pro-angular-animations/pro-angular-animations.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UsersComponent} from './comopnents/users/users.component';
import {CardComponent} from './card/card.component';
import {ProgramaticalAnimationsComponent} from './programatical-animations/programatical-animations.component';

const routes: Routes = [
    {path: 'goal', component: GoalComponent, data: {animation: {page: 'goal'}}},
    {path: 'quote', component: QuoteComponent, data: {animation: {page: 'quote'}}},
    {path: 'author', component: AuthorComponent, data: {animation: {page: 'author'}}},
    {path: 'projects', component: ProjectsComponent, data: {animation: {page: 'projects'}}},
    {path: 'transitions', component: CssTransitionComponent, data: {animation: {page: 'transitions'}}},
    {path: 'animations', component: CssAnimationComponent, data: {animation: {page: 'animations'}}},
    {path: 'ng-animations', component: AngularAnimationsComponent, data: {animation: {page: 'ng-animations'}}},
    {path: 'pro-ng-animations', component: ProAngularAnimationsComponent, data: {animation: {page: 'pro-ng-animations'}}},
    {path: 'users', component: UsersComponent, data: {animation: {page: 'users'}}},
    {path: 'card', component: CardComponent, data: {animation: {page: 'users'}}},
    {path: 'programatical-animations', component: ProgramaticalAnimationsComponent, data: {animation: {page: 'programatical-animations'}}},
    {path: '', redirectTo: '/projects', pathMatch: 'full'},
];

@NgModule({
    declarations: [
        AppComponent,
        GoalComponent,
        QuoteComponent,
        AuthorComponent,
        ProjectsComponent,
        HeaderComponent,
        ProjectComponent,
        CssTransitionComponent,
        CssAnimationComponent,
        AngularAnimationsComponent,
        ProAngularAnimationsComponent,
        UsersComponent,
        CardComponent,
        ProgramaticalAnimationsComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes)
    ],
    providers: [ProjectsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
