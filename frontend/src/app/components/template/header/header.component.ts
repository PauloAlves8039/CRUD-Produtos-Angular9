import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }
  
  /**
   * Realiza uma alteração do título da página.
   * @function
   * @name title
   */
  get title(): string {
    return this.headerService.headerData.title
  }
  
  /**
   * Realiza uma alteração do ícone.
   * @function
   * @name icon
   */
  get icon(): string {
    return this.headerService.headerData.icon
  }
  
  /**
   * Realiza uma alteração da url.
   * @function
   * @name routerUrl
   */
  get routerUrl(): string {
    return this.headerService.headerData.routerUrl
  }

}
