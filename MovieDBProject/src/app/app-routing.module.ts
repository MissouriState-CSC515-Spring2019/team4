import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent }  from './page-not-found.component';
import { ResultsComponent }  from './results/results.component';
import { ViewDetailComponent }  from './results/view-detail.component';
import { SearchMovieComponent }  from './search-movie/search-movie.component';
import { UpdateBookComponent }  from './manage-book/update-book.component';
import { ManageBookComponent }  from './manage-book/manage-book.component';

const routes: Routes = [
	//{ path: 'results', component: ResultsComponent },
	{ path: 'results/:id', component: ResultsComponent },
	{ path: 'view-detail/:id', component: ViewDetailComponent },		  
	{ path: 'search-movie', component: SearchMovieComponent },
	{ path: 'manage-book', component: ManageBookComponent },
	{ path: 'update-book/:id', component: UpdateBookComponent }, 
	{ path: '', redirectTo: '/search-movie', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule{ }
