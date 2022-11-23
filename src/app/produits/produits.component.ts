import { Component, OnInit } from '@angular/core';
import { Produit } from '../Model/produit.model';
import { ProduitService } from '../produit.service';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
})
export class ProduitsComponent implements OnInit {
  produits: Produit[];

  constructor(private produitService: ProduitService) {
    this.produits = this.produitService.listeProduits();
  }

  ngOnInit(): void {}
  supprimerProduit(p: Produit) {
    //console.log(p);
    //this.produitService.supprimerProduit(p);
    let conf = confirm('Etes-vous sûr ?');
    if (conf) this.produitService.supprimerProduit(p);
  }
}
