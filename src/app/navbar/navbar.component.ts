import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  dropdownVisible: string | null = null; // Track which dropdown is visible

  toggleNavbar() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
      navLinks.classList.toggle('responsive');
    }
  }

  closeNavbar() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks && navLinks.classList.contains('responsive')) {
      navLinks.classList.remove('responsive');
    }
    this.dropdownVisible = null; // Hide any open dropdown
  }

  showDropdown(dropdown: string) {
    this.dropdownVisible = dropdown;
  }

  hideDropdown() {
    this.dropdownVisible = null;
  }

  handleLinkClick() {
    this.closeNavbar(); // Close navbar and dropdowns on link click
  }

  constructor(private snackBar: MatSnackBar) {}
  
  handleLinkTap() {
    this.snackBar.open('Coming soon!', 'Close', {
      duration: 3000, // Display message for 3 seconds
    }); // Close navbar and dropdowns on link click
  }
}
