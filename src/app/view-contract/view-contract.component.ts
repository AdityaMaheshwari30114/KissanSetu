import { Component } from '@angular/core';

export interface Contract {
  id: string;
  crop: string;
  status: string;
}

const CONTRACT_DATA: Contract[] = [
  {id: 'C001', crop: 'Wheat', status: 'Active'},
  {id: 'C002', crop: 'Rice', status: 'Completed'},
  {id: 'C003', crop: 'Maize', status: 'Pending'}
];

@Component({
  selector: 'app-view-contract',
  templateUrl: './view-contract.component.html',
  styleUrls: ['./view-contract.component.css']
})
export class ViewContractComponent {
  displayedColumns: string[] = ['contractId', 'crop', 'status', 'action'];
  contracts = CONTRACT_DATA;
}