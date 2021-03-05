import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { products } from "../products";
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    // Inyección de dependencias
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const parametros = this.route.snapshot.paramMap;
    const id = Number(parametros.get("id"));

    this.product = products.find(product => product.id === id);
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert("Se ha añadido tu producto al carrito");
  }
}
