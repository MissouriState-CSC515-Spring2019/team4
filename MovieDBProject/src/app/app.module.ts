import { NgModule }   from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { PageNotFoundComponent }  from './page-not-found.component';
import { ResultsComponent }  from './results/results.component';
import { ViewDetailComponent }  from './results/view-detail.component';
import { SearchMovieComponent }  from './search-movie/search-movie.component';
import { UpdateBookComponent }  from './manage-book/update-book.component';
import { ManageBookComponent }  from './manage-book/manage-book.component';
import { BookService } from './services/book.service';
import { AppRoutingModule }  from './app-routing.module';

@NgModule({
  imports: [     
    BrowserModule,
		FormsModule,
		AppRoutingModule
  ],
  declarations: [
        AppComponent, 
		PageNotFoundComponent,
		ResultsComponent,
		ViewDetailComponent,
		SearchMovieComponent,
		ManageBookComponent,
		UpdateBookComponent
  ],
  providers: [ BookService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
