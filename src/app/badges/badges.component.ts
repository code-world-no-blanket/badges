import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {BadgeInfoComponent} from "../badge-info/badge-info.component";

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class BadgesComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(BadgeInfoComponent);
  }

}
