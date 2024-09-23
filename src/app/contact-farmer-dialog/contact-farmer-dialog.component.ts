import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-farmer-dialog',
  templateUrl: './contact-farmer-dialog.component.html',
  styleUrls: ['./contact-farmer-dialog.component.css']
})
export class ContactFarmerDialogComponent {
  contactForm: FormGroup;
  constructor(private dialogRef: MatDialogRef<ContactFarmerDialogComponent>,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }
  


  handleLinkTap() {
    this.snackBar.open('Message Sent', 'Close', {
      duration: 3000, // Display message for 3 seconds
    }); // Close navbar and dropdowns on link click
    this.dialogRef.close();
    
  }

  onClose() {
    this.dialogRef.close(); // Close the dialog without action
  }
  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }
}
