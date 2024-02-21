import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './home/banner/banner.component';
import { MentorsComponent } from './home/mentors/mentors.component';
import { OrganizersComponent } from './home/organizers/organizers.component';
import { PartnersComponent } from './home/partners/partners.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { ParticipantsComponent } from './home/participants/participants.component';
import { LayoutModule } from './layout/layout.module';
import { MainArticlesComponent } from './home/main-articles/main-articles.component';
import { ArticleCardModule } from './shared/article-card/article-card.module';
import { OrganizerModalContentModule } from './shared/organizer-modal-content/organizer-modal-content.module';
import { PeopleListModule } from './shared/people-list/people-list.module';
import { CommunityPartnersComponent } from './home/community-partners/community-partners.component';
import { SponsorsComponent } from './home/sponsors/sponsors.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    MentorsComponent,
    OrganizersComponent,
    PartnersComponent,
    AboutUsComponent,
    ParticipantsComponent,
    MainArticlesComponent,
    CommunityPartnersComponent,
    SponsorsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    JwBootstrapSwitchNg2Module,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    ScullyLibModule,
    LayoutModule,
    ArticleCardModule,
    OrganizerModalContentModule,
    PeopleListModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
