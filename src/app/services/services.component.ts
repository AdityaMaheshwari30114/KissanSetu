import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    
    { title: 'Market Insights & Access', description: 'Offer real-time data on market trends, pricing, and demand to help farmers make informed decisions.', image: 'assets/market_insights.jpeg' },
    { title: 'AI-Powered Buyer Matching', description: 'Use AI to connect farmers with ideal buyers, based on crop types, quantities, and current market needs.', image: 'assets/Ai.jpeg' },
   
  ];
  
}