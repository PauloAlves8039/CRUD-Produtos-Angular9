import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }
  
  /**
    * Responsável pela criação do produto.
    * @function
    * @name createProduct
    */
  createProduct(): void{
    this.productService.showMessage('Produto criado!');
  }
  
  /**
    * Responsável pelo cancelamento da criação do produto.
    * @function
    * @name cancel
    */
  cancel(): void{
    this.router.navigate(['/products'])
  }

}
