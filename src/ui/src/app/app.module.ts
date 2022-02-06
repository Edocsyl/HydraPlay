import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './components/player/player.component';
import { StreamComponent } from './components/stream/stream.component';
import { MediaComponent } from './components/media/media.component';
import { NoopAnimationsModule} from '@angular/platform-browser/animations';
import { TrackItemComponent } from './components/trackItem/trackItem.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatSliderModule} from "@angular/material/slider";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from "@angular/material/core";
import {MatListModule} from "@angular/material/list";
import {MatTabsModule} from "@angular/material/tabs";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";
import {FormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatBadgeModule} from "@angular/material/badge";
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { TunevolumesComponent } from './components/tunevolumes/tunevolumes.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    StreamComponent,
    MediaComponent,
    TrackItemComponent,
    PlaylistsComponent,
    TunevolumesComponent
  ],
  imports: [
    MatSliderModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatRippleModule,
    MatListModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatInputModule,
    MatMenuModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatSnackBarModule
  ],
  exports: [],
  providers: [
      /*//
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      deps: [AppConfig],
      multi: true
    }

       */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
