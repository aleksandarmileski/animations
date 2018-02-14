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

const routes: Routes = [
    {path: 'goal', component: GoalComponent},
    {path: 'quote', component: QuoteComponent},
    {path: 'author', component: AuthorComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'transitions', component: CssTransitionComponent},
    {path: 'animations', component: CssAnimationComponent},
    {path: 'ng-animations', component: AngularAnimationsComponent},
    {path: 'pro-ng-animations', component: ProAngularAnimationsComponent},
    {path: 'users', component: UsersComponent},
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
        UsersComponent
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
