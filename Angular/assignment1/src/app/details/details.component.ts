import { Products } from "../products";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  details = {
    id: null,
    serial_number: null,
    name: "",
    image: "",
    description: "",
    cost: null
  };
  products = Products;

  constructor(public route: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    if (this.route.snapshot.paramMap.get("id") !== "null") {
      const id = parseInt(this.route.snapshot.paramMap.get("id"), 0);
      this.details = this.products.find(x => x.id === id);
    }
  }
}
