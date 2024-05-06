import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular/standalone';
import { GetDataService, WiLData } from '../get-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage implements OnInit {
  fetchedData: WiLData = {timestamp:Date.now(), data:[]};
  expandedElement: WiLData | null = null;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private getDataService: GetDataService
  ) {}

  async ngOnInit() {
    // Fetch event data from GetDataService
    this.fetchedData = await this.getDataService.loadData();

  }
  goToTab1() {
    this.router.navigateByUrl('/tab1'); // Navigate to 'tab1' route
  }
  goBack() {
    this.navCtrl.pop(); // Navigate back (or perform custom action)
  }
  toggleExpansion(element: WiLData) {
    if (this.expandedElement === element) {
      this.expandedElement = null; // Collapse
    } else {
      this.expandedElement = element; // Expand
    }
  }
}
