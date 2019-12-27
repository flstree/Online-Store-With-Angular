import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NewsletterComponent } from './shared/components/newsletter/newsletter.component';
import { BreadcrumbComponent } from './shared/components/breadcrumb/breadcrumb.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NewsletterComponent,
    BreadcrumbComponent,
    HeaderComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule, StoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
