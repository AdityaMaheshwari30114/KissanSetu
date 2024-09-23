import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactFarmerDialogComponent } from '../contact-farmer-dialog/contact-farmer-dialog.component';

@Component({
  selector: 'app-view-farmers-profile',
  templateUrl: './view-farmers-profile.component.html',
  styleUrls: ['./view-farmers-profile.component.css']
})

export class FarmerProfileComponent implements OnInit {
  farmer = {
    location: 'Indore, M.P.',
    farmSize: 15,
    experience: 10,
    crops: ['Wheat', 'Rice', 'Maize', 'Pulse', 'Millets'],
    pastContracts: [
      {id: 'C001', crop: 'Wheat', status: 'Active', completionDate: '2024-08-10'},
      {id: 'C002', crop: 'Rice', status: 'Completed', completionDate: '2024-09-01'},
      {id: 'C003', crop: 'Maize', status: 'Active', completionDate: '2024-09-05'},
      {id: 'C004', crop: 'Pulse', status: 'Active', completionDate: '2024-10-07'},
    ],
    reviews: [
      { buyerName: 'Acme Corp', comment: 'Great quality crops, timely delivery.' },
      { buyerName: 'Fresh Farms', comment: 'Reliable and professional.' },
      { buyerName: 'Green Valley', comment: 'Excellent communication and crop quality.' },
      { buyerName: 'Harvest Co.', comment: 'Always delivers on time, great service.' },
      { buyerName: 'AgriSolutions', comment: 'Very satisfied with the contract process and outcome.' }
        ]
  };

  constructor(private dialog: MatDialog) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // Method to open the dialog
  openContactFarmerDialog() {
    const dialogRef = this.dialog.open(ContactFarmerDialogComponent, {
      width: '90%', // Set width to 90% for better responsiveness
      maxWidth: '400px' // Limit max width for larger screens
    });
  
    dialogRef.afterClosed().subscribe(result => {
      // Handle any actions after the dialog is closed
    });
  }
  

}
