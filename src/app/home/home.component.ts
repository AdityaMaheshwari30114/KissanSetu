import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  
  gridItems = [
    { label: 'Government Schemes', icon: 'account_balance', description: 'Information on government schemes for farmers.' },  // New Item
    { label: 'Progress Tracker', icon: 'track_changes', description: 'Track farming progress and milestones.' },              // New Item
    { label: 'Chatbot Help', icon: 'support_agent', description: 'AI-driven chatbot for farmer support and queries.' },       // New Item
    { label: 'Market Insights', icon: 'insights', description: 'Get real-time market data and insights.' },
    { label: 'e-Mandi', icon: 'shopping_bag', description: 'Digital marketplace for farmers.' },
    { label: 'Secure Payment', icon: 'account_balance_wallet', description: 'Safe and secure payment gateway for transactions.' }
  ];

  // Property to track which grid item is clicked
  selectedItemIndex: number | null = null;

  // Function to select a grid item
  selectItem(index: number): void {
    this.selectedItemIndex = this.selectedItemIndex === index ? null : index;
  }
  ngOnInit(): void {
  }

}


