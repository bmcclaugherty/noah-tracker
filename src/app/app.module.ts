import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card'; 
import { HttpClientModule } from "@angular/common/http";
import { DateAgoPipe } from './pipes/date-ago.pipe';
@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    HttpClientModule
  ],
  declarations: [ AppComponent, DateAgoPipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}