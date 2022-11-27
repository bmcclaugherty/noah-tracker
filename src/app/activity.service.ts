import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  constructor(private http: HttpClient) { }

  putActivity(activity: Number) {
    return this.http.post<any>(`https://firestore.googleapis.com/v1/projects/baby-tracker-4068b/databases/(default)/documents/activity`,
      {
        "fields": {
            "datetime": {
                "timestampValue": new Date().toISOString().split('.')[0]+"Z"
            },
            "activity": {
                "integerValue": activity
            }
        }
      }
    )
  }
}
