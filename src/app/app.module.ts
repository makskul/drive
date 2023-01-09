import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostComponent } from './blog/post/post.component';
import { ThumbComponent } from './blog/thumb/thumb.component';
import { CarStoryComponent } from './car-story/car-story.component';
import { ResumeComponent } from './car-story/resume/resume.component';
import { CaseComponent } from './car-story/case/case.component';
import { FormComponent } from './car-story/form/form.component';
import { UserStoryComponent } from './user-story/user-story.component';
import { StoryComponent } from './user-story/story/story.component';
import { MaterialModule } from '../material.module';
import { HeaderComponent } from './header/header.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogComponent,
    PostComponent,
    ThumbComponent,
    CarStoryComponent,
    ResumeComponent,
    CaseComponent,
    FormComponent,
    UserStoryComponent,
    StoryComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    FormBuilder,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
