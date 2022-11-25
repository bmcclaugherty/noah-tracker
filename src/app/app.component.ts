import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  activity: Observable<any[]>;
  constructor(firestore: AngularFirestore, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.activity = firestore.collection('activity').valueChanges();

    this.matIconRegistry.addSvgIcon(
      `poo`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/poo.svg")
    );
  }
}