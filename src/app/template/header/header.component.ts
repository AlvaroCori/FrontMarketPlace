import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public mainRouting: string = "/main/home";
  public constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}
