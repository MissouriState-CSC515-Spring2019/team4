import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent }  from './page-not-found.component';
import { ResultsComponent }  from './results/results.component';
import { ViewDetailComponent }  from './results/view-detail.component';
import { SearchMovieComponent }  from './search-movie/search-movie.component';
import { identifierModuleUrl } from '@angular/compiler';

const routes: Routes = [
		{ path: 'results', component: ResultsComponent },
		{ path: 'results/:id', component: ResultsComponent },
		//{ path: 'results;title=:id', component: ResultsComponent },
	{ path: 'view-detail', component: ViewDetailComponent },
	{ path: 'view-detail/:id', component: ViewDetailComponent },		  
	{ path: 'search-movie', component: SearchMovieComponent },
	{ path: '', redirectTo: '/search-movie', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule{ }
