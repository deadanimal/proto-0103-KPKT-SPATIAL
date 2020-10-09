import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {

  test: Date = new Date();
  imgLogo = 'assets/img/logo/KPKT_Logo.jpeg'
  imgLogo2 = 'assets/img/logo/Jata_KPKT_25012018.png'
  constructor() {}

  ngOnInit() {}
}
