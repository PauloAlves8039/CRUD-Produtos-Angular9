import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }
  
  /**
    * Responsável pela chamada do método de inserção de produtos.
    * @function
    * @name createProduct
    */
  createProduct(): void{
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado!');
      this.router.navigate(['/products']);
    })    
  }
  
  /**
    * Responsável por navegar para a tela prinicpal do produto cancelando a ação de inserção.
    * @function
    * @name cancel
    */
  cancel(): void{
    this.router.navigate(['/products']);
  }

}
