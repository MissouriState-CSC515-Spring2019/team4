import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsListComponent } from './results-list/results-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component'; 
import { HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'results', component: ResultsListComponent},
  {path: 'details', component: MovieDetailsComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rountingComponents = [ResultsListComponent, MovieDetailsComponent];
