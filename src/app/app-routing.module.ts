import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BlogComponent } from "./blog/blog.component";
import { ResumeComponent } from "./user-story/resume/resume.component";
import { ResumeComponent as CarResume }  from "./car-story/resume/resume.component";
import { CustomPreloader } from "../utils/CustomPreloader";

const routes: Routes = [
  { path: "", component: BlogComponent, data: {preload: true} },
  { path: "home", component: BlogComponent, data: {preload: true}},
  { path: "resume", component: ResumeComponent },
  { path: "my-car", component: CarResume }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
