import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommodityService } from './services/commodity.service';
import { Commodity } from './models/commodity';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent {
  trade: FormGroup;
  isSeller: boolean = true; // Default as seller
  commodities: Commodity[] = []; // Holds list of commodities
  commodityVarieties: string[] = []; // Holds the varieties based on selected commodity

  constructor(private fb: FormBuilder, private commodityService: CommodityService) {
    this.commodities = this.commodityService.getCommodities(); // Fetch commodity list

    // Initialize the form
    this.trade = this.fb.group({
      userType: ['seller', Validators.required], // Seller or Buyer
      commodity: ['', Validators.required],      // Commodity
      variety: ['', Validators.required],        // Variety based on Commodity
      quantity: ['', Validators.required],       // Quantity
      quantityUnit: ['QTL', Validators.required], // Quantity unit
      price: ['', Validators.required],          // Price
      priceUnit: ['INR', Validators.required],   // Price unit
      location: ['', Validators.required],       // Location
      startDate: ['', Validators.required],      // Start date
      endDate: ['', Validators.required],        // End date
      description: [''],                         // Additional information
      terms: [false, Validators.requiredTrue],   // T&C checkbox
      uploadedDocument: [null, Validators.required] // Uploaded document
    });
  }

  // Event handler for commodity selection change
  onCommodityChange(event: any): void {
    const selectedCommodity = this.commodities.find(commodity => commodity.name === event.target.value);
    this.commodityVarieties = selectedCommodity ? selectedCommodity.varieties : [];
    this.trade.controls['variety'].setValue(''); // Reset variety when commodity changes
  }

  // Toggles between seller and buyer
  toggleUserType(userType: string): void {
    this.isSeller = userType === 'seller';
  }

  // Handle file change for document upload
  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.trade.patchValue({ uploadedDocument: file });
    }
  }

  // Submit handler for form
  onSubmit(): void {
    if (this.trade.valid) {
      console.log(this.trade.value); // Replace with actual form submission logic
    } else {
      console.log('Form is invalid');
    }
  }
}
