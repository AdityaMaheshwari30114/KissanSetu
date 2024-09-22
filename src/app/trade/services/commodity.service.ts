import { Injectable } from '@angular/core';
import { Commodity } from '../models/commodity';

@Injectable({
  providedIn: 'root'
})
export class CommodityService {
  // List of commodities and their respective varieties
  commodities: Commodity[] = [
    { name: 'Wheat', varieties: ['Durum', 'Hard Red', 'Soft Red'] },
    { name: 'Rice', varieties: ['Basmati', 'Jasmine', 'Brown Rice'] },
    { name: 'Corn', varieties: ['Sweet Corn', 'Field Corn'] }
  ];

  // Method to get the list of commodities
  getCommodities(): Commodity[] {
    return this.commodities;
  }
}
