import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-farmer-dialog',
  templateUrl: './contact-farmer-dialog.component.html',
  styleUrls: ['./contact-farmer-dialog.component.css']
})
export class ContactFarmerDialogComponent {
  constructor(private dialogRef: MatDialogRef<ContactFarmerDialogComponent>) {}

  onSend() {
    // Logic to send the message goes here
    this.dialogRef.close(); // Close the dialog after sending
  }

  onClose() {
    this.dialogRef.close(); // Close the dialog without action
  }
}
