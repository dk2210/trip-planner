import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './mycomponents/navbar/navbar.component';
import { HomepageComponent } from './mycomponents/homepage/homepage.component';
import { ScollprogressDirective } from './directives/scollprogress.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddDetailsComponent } from './mycomponents/add-details/add-details.component';
import { TimelineCardsComponent } from './mycomponents/timeline-cards/timeline-cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    ScollprogressDirective,
    AddDetailsComponent,
    TimelineCardsComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
