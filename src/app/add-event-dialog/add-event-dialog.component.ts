import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivityService } from '../activity.service';
import { MatDialogRef  } from '@angular/material/dialog';

@Component({
  selector: 'app-add-event-dialog',
  templateUrl: './add-event-dialog.component.html',
  styleUrls: ['./add-event-dialog.component.css']
})
export class AddEventDialogComponent {
  message: string = "";
  constructor(private activityService: ActivityService, public dialog: MatDialogRef<AddEventDialogComponent> ) { }

  putActivity(activity: Number) {
    this.activityService.putActivity(activity).subscribe(resp => {
      console.log(resp);
      this.dialog.close(AddEventDialogComponent);
      this.message = "";
    },
    (error: HttpErrorResponse) => {
      console.log('err', error)
      this.message = "something went wrong!"
    });
  }
}
