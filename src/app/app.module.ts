import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TopBarComponent } from './main/top-bar/top-bar.component';

@NgModule({ declarations: [
        AppComponent,
        TopBarComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        FormsModule], providers: [
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
