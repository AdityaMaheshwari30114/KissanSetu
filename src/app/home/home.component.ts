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

  selectedItemIndex: number | null = null;

  selectItem(index: number): void {
    this.selectedItemIndex = this.selectedItemIndex === index ? null : index;
  }
  ngOnInit(): void {
  }

  additionalServices = [
    { title: 'Guaranteed Contract Farming', description: 'Facilitate transparent agreements between farmers and buyers, ensuring trust and fair benefits on both sides.', icon: 'check_circle' },
    { title: 'Crop Progress Monitoring', description: 'Receive updates on crop growth, delivery timelines, and contract milestones to maintain smooth communication.', icon: 'track_changes' },
    { title: 'Government Support Integration', description: 'Benefit from relevant government schemes and subsidies that align with contract farming practices.', icon: 'account_balance' },
    { title: 'Secure Payment Methods', description: 'Enable safe, verified transactions through reliable payment gateways, ensuring financial security.', icon: 'payment' },
    { title: 'Legal Guidance and Support', description: 'Get legal assistance to handle disputes, resolve breaches, and maintain compliance with agricultural laws.', icon: 'gavel' },
    { title: 'Multilingual Service Availability', description: 'Provide support in various languages to cater to farmers and buyers from diverse backgrounds.', icon: 'language' }
  ];
}


