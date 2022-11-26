import { Component, OnInit } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  activity: Observable<any[]>;
  interval: any;
  something: any; 

  constructor(firestore: AngularFirestore, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.activity = firestore.collection('activity', ref => ref.orderBy('datetime', 'desc')).valueChanges();


    this.activity.forEach(val => (console.log(val)));
    this.matIconRegistry.addSvgIcon(
      `poo`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/poo.svg")
    );
  }

  ngOnInit(): void {
    this.interval = setInterval(() => {}, 60000); // auto refresh timestamps
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}