import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductService } from './shared/services';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        FlexLayoutModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [ProductService],
    bootstrap: [AppComponent]
})
export class AppModule { }
