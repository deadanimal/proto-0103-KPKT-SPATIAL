import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, marker, icon } from "leaflet";
import * as mapboxgl from 'mapbox-gl';
import * as MapboxDraw from "@mapbox/mapbox-gl-draw";
import swal from 'sweetalert2';
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import { Map, NavigationControl, Popup } from "mapbox-gl";

@Component({
  selector: 'app-pemetaan',
  templateUrl: './pemetaan.component.html',
  styleUrls: ['./pemetaan.component.scss']
})
export class PemetaanComponent implements OnInit {

  private map: Map;
  private popup: Popup;

  options = {
    layers: [
      tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: "...",
      }),
    ],
    zoom: 6,
    center: latLng(5.035034, 109.505614),
  };

  constructor() { 
    
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/satellite-streets-v11",
      center: [101.579524, 3.095902],
      zoom: 14,
    });

  
    var draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true,
        save: true,
        print: true,
      },
    });
  }

  

  viewData(patient){

    let modaltext = patient.name;
    let test= patient.gender;
    let mmm = patient.age;

    swal.fire({
        title: modaltext,
        html: test +'<br>'+ mmm,
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonClass: 'btn btn-danger',
        confirmButtonText: 'Cetak',
        cancelButtonClass: 'btn btn-secondary'
    }).then((result) => {
        if (result.value) {
            // Show confirmation
            swal.fire({
                title: 'Cetakan!',
                text: 'Fail anda sedang dicetak.',
                type: 'success',
                buttonsStyling: false,
                confirmButtonClass: 'btn btn-primary'
            });
        }
    })
}
  
  patients = [
    {
      mrn_number: '188554',
      name: 'Kampung Bahagia',
      nric: 'Yan',
      date_of_birth: '5/31/1973',
      age: '3,102',
      gender: 'Kampung Tradisional',
      status: 'Kedah'
    },
    {
      mrn_number: '183616',
      name: 'Kampung Bagan',
      nric: 'Yan',
      date_of_birth: '8/14/1999',
      age: '46',
      gender: 'Male',
      status: 'Kedah'
    },
    {
      mrn_number: '962256',
      name: 'Kampung Nomad',
      nric: 'Yan',
      date_of_birth: '5/24/1993',
      age: '44',
      gender: 'Female',
      status: 'Kedah'
    },
    {
      mrn_number: '400420',
      name: 'Kampung Sungai Lintang',
      nric: 'Yan',
      date_of_birth: '8/20/1951',
      age: '31',
      gender: 'Male',
      status: 'Kedah'
    },
    {
      mrn_number: '941579',
      name: 'Kampung Sungai Limau',
      nric: 'Yan',
      date_of_birth: '4/17/1987',
      age: '41',
      gender: 'Male',
      status: 'Kedah'
    },
    {
      mrn_number: '332653',
      name: 'Kampung Dulang',
      nric: 'Yan',
      date_of_birth: '8/5/1954',
      age: '30',
      gender: 'Female',
      status: 'Kedah'
    },
    {
      mrn_number: '016017',
      name: 'Kampung Sungai Yan',
      nric: 'Yan',
      date_of_birth: '9/9/1983',
      age: '95',
      gender: 'Female',
      status: 'Kedah'
    },
    {
      mrn_number: '020271',
      name: 'Kampung Raga',
      nric: 'Yan',
      date_of_birth: '4/29/1955',
      age: '52',
      gender: 'Male',
      status: 'Kedah'
    },
    {
      mrn_number: '497379',
      name: 'Kampung Murni',
      nric: 'Yan',
      date_of_birth: '8/23/1989',
      age: '14',
      gender: 'Male',
      status: 'Kedah'
    },
    {
      mrn_number: '771108',
      name: 'Kampung Seri Badong',
      nric: 'Yan',
      date_of_birth: '10/16/1963',
      age: '89',
      gender: 'Male',
      status: 'Kedah'
    },
    {
      mrn_number: '438596',
      name: 'Kampung Singkir Darat',
      nric: 'Yan',
      date_of_birth: '10/22/1956',
      age: '77',
      gender: 'Kampung Nelayan',
      status: 'Kedah'
    },
    {
      mrn_number: '091109',
      name: 'Kampung Singkir Darat',
      nric: 'Yan',
      date_of_birth: '12/30/1992',
      age: '74',
      gender: 'Kampung Nelayan',
      status: 'Kedah'
    },
  ]
}
