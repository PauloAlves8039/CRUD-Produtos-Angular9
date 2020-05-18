import { map, catchError } from 'rxjs/operators';
import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  
  /**
    * Realiza a exibição de uma mensagem toast.
    * @function
    * @name showMessage
    * @param msg parâmetro responsável pelo conteúdo da mensagem exibida.
    */
  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }
  
  /**
   * Responsável pela inserção de um novo produto.
   * @function
   * @name  create
   * @param product parâmetro responsável por representar a entidade Produto.
   */
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map((obj) => obj),
      catchError(e => this.errorHendle(e))
    );
  }
  
  /**
   * Responsável por obter uma lista de produtos.
   * @function
   * @name read
   * @returns uma lista de produtos.
   */
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHendle(e))
    );
  }
  
  /**
   * Responsável pela pesquisa do produto por id.
   * @function
   * @name readById
   * @param id parâmetro de pesquisa do objeto produto.
   * @returns um registro do produto selecionado por id.
   */
  readById(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHendle(e))
    );
  }
  
  /**
   * Responsável por atualizar registro de um produto.
   * @function
   * @name update
   * @param product parâmetro de representação do objeto produto.
   * @returns um registro do produto atualizado por id.
   */
  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj),
      catchError(e => this.errorHendle(e))
    );
  }
  
  /**
   * Responsável por excluir produto por id.
   * @function
   * @name delete
   * @param id parâmetro responsável pela exlcusão do produto.
   */
  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHendle(e))
    );
  }

  /**
   * Responsável pelo tratamento de erro. 
   * @function
   * @name errorHendle
   * @param e parâmetro para tratamento de erro.
   */
  errorHendle(e: any): Observable<any> {
    console.log(e);
    this.showMessage('Ocorreu um erro! ', true);
    return EMPTY;
  }

}
