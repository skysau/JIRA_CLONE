import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms'
import {  HttpClientModule } from '@angular/common/http';
import { CardDataService } from './card-data.service';
import { FilterPipe } from './shared/filter.pipe';
import { AlbumComponent } from './details/album/album.component';
import { BlogsComponent } from './details/blogs/blogs.component';
import { AuthGardGuard } from './shared/auth-gard.guard';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    DashboardComponent,
    DetailsComponent,
    FilterPipe,
    AlbumComponent,
    BlogsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CardDataService,AuthGardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
