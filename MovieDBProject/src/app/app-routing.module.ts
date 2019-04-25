import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsListComponent } from './results-list/results-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component'; 

const routes: Routes = [
  {path: 'results', component: ResultsListComponent},
  {path: 'details', component: MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rountingComponents = [ResultsListComponent, MovieDetailsComponent];
