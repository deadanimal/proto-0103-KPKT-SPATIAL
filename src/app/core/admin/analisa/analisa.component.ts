import { Component, OnInit, NgZone } from '@angular/core';
import { tileLayer, latLng, marker, icon } from "leaflet";
import { MocksService } from 'src/app/shared/services/mocks/mocks.service';
import swal from 'sweetalert2';
import * as mapboxgl from 'mapbox-gl';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_material from "@amcharts/amcharts4/themes/material";
am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_material);

@Component({
  selector: 'app-analisa',
  templateUrl: './analisa.component.html',
  styleUrls: ['./analisa.component.scss']
})
export class AnalisaComponent implements OnInit {

  chart: any
  chart1: any
  dataChart: any[] = []
  dataChart2: any[] = []
  dataChart3: any[] = []

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
  layers = [
    // circle([ 46.95, -122 ], { radius: 5000 }),
    // polygon([[ 46.8, -121.85 ], [ 46.92, -121.92 ], [ 46.87, -121.8 ]]),
    marker([5.876007, 100.416525], {
      icon: icon({
        iconSize: [40, 40],
        iconAnchor: [13, 41],
        iconUrl: "../assets/img/icons/10821-location-marker-clipart.png",
      }),
    }),
    // circle([ 46.95, -122 ], { radius: 5000 }),
    // polygon([[ 46.8, -121.85 ], [ 46.92, -121.92 ], [ 46.87, -121.8 ]]),
    marker([5.972806, 100.360435], {
      icon: icon({
        iconSize: [20, 30],
        iconAnchor: [13, 41],
        iconUrl: "../assets/img/icons/map-pin-yellow-clip-art-at-clkercom-vector-clip-art-online-yellow-map-pin-png-372_594.png",
      }),
    }),
    marker([5.923217, 100.393513], {
      icon: icon({
        iconSize: [40, 40],
        iconAnchor: [13, 41],
        iconUrl: "../assets/img/icons/Map-Marker-Push-Pin-2-Right-Chartreuse-icon.png",
      }),
    }),
    marker([5.900328, 100.376734], {
      icon: icon({
        iconSize: [40, 40],
        iconAnchor: [13, 41],
        iconUrl: "../assets/img/icons/10821-location-marker-clipart.png",
      }),
    }),
    marker([6.028689, 100.493174], {
      icon: icon({
        iconSize: [40, 40],
        iconAnchor: [13, 41],
        iconUrl: "../assets/img/icons/10821-location-marker-clipart.png",
      }),
    }),
    marker([6.042386, 102.062831], {
      icon: icon({
        iconSize: [20, 30],
        iconAnchor: [13, 41],
        iconUrl: "../assets/img/icons/map-pin-yellow-clip-art-at-clkercom-vector-clip-art-online-yellow-map-pin-png-372_594.png",
      }),
    }),
    marker([5.123785, 102.974610], {
      icon: icon({
        iconSize: [40, 40],
        iconAnchor: [13, 41],
        iconUrl: "../assets/img/icons/10821-location-marker-clipart.png",
      }),
    }),
    marker([5.687390, 102.111409], {
      icon: icon({
        iconSize: [40, 40],
        iconAnchor: [13, 41],
        iconUrl: "../assets/img/icons/10821-location-marker-clipart.png",
      }),
    }),
    marker([5.216825, 101.941385], {
      icon: icon({
        iconSize: [40, 40],
        iconAnchor: [13, 41],
        iconUrl: "../assets/img/icons/10821-location-marker-clipart.png",
      }),
    }),
    marker([4.280256, 101.046421], {
      icon: icon({
        iconSize: [40, 40],
        iconAnchor: [13, 41],
        iconUrl: "../assets/img/icons/10821-location-marker-clipart.png",
      }),
    }),
    marker([3.724395, 101.066597], {
      icon: icon({
        iconSize: [40, 40],
        iconAnchor: [13, 41],
        iconUrl: "../assets/img/icons/10821-location-marker-clipart.png",
      }),
    }),
    marker([3.512366, 102.711394], {
      icon: icon({
        iconSize: [40, 40],
        iconAnchor: [13, 41],
        iconUrl: "../assets/img/icons/10821-location-marker-clipart.png",
      }),
    }),
    marker([2.372811, 102.231661], {
      icon: icon({
        iconSize: [40, 40],
        iconAnchor: [13, 41],
        iconUrl: "../assets/img/icons/10821-location-marker-clipart.png",
      }),
    }),
    marker([1.790666, 103.105460], {
      icon: icon({
        iconSize: [40, 40],
        iconAnchor: [13, 41],
        iconUrl: "../assets/img/icons/10821-location-marker-clipart.png",
      }),
    }),
    marker([2.720887, 103.469629], {
      icon: icon({
        iconSize: [40, 40],
        iconAnchor: [13, 41],
        iconUrl: "../assets/img/icons/10821-location-marker-clipart.png",
      }),
    }),
    marker([2.650374, 103.423070], {
      icon: icon({
        iconSize: [40, 40],
        iconAnchor: [13, 41],
        iconUrl: "../assets/img/icons/10821-location-marker-clipart.png",
      }),
    }),
    marker([1.538074, 104.108254], {
      icon: icon({
        iconSize: [40, 40],
        iconAnchor: [13, 41],
        iconUrl: "../assets/img/icons/Map-Marker-Push-Pin-2-Right-Chartreuse-icon.png",
      }),
    }),
    marker([1.887986, 102.937114], {
      icon: icon({
        iconSize: [40, 40],
        iconAnchor: [13, 41],
        iconUrl: "../assets/img/icons/Map-Marker-Push-Pin-2-Right-Chartreuse-icon.png",
      }),
    }),
    marker([2.816467, 101.536837], {
      icon: icon({
        iconSize: [40, 40],
        iconAnchor: [13, 41],
        iconUrl: "../assets/img/icons/Map-Marker-Push-Pin-2-Right-Chartreuse-icon.png",
      }),
    }),
    marker([5.021839, 100.603362], {
      icon: icon({
        iconSize: [40, 40],
        iconAnchor: [13, 41],
        iconUrl: "../assets/img/icons/Map-Marker-Push-Pin-2-Right-Chartreuse-icon.png",
      }),
    }),
    
    marker([4.734350, 101.799931], {
      icon: icon({
        iconSize: [40, 40],
        iconAnchor: [13, 41],
        iconUrl: "../assets/img/icons/Map-Marker-Push-Pin-2-Right-Chartreuse-icon.png",
      }),
    }),
    marker([4.352067, 103.323406], {
      icon: icon({
        iconSize: [20, 30],
        iconAnchor: [13, 41],
        iconUrl: "../assets/img/icons/map-pin-yellow-clip-art-at-clkercom-vector-clip-art-online-yellow-map-pin-png-372_594.png",
      }),
    }),
    marker([2.125546, 103.378338], {
      icon: icon({
        iconSize: [20, 30],
        iconAnchor: [13, 41],
        iconUrl: "../assets/img/icons/map-pin-yellow-clip-art-at-clkercom-vector-clip-art-online-yellow-map-pin-png-372_594.png",
      }),
    }),
    marker([3.420387, 101.829266], {
      icon: icon({
        iconSize: [20, 30],
        iconAnchor: [13, 41],
        iconUrl: "../assets/img/icons/map-pin-yellow-clip-art-at-clkercom-vector-clip-art-online-yellow-map-pin-png-372_594.png",
      }),
    }),
  ];
  
  constructor(
    private zone: NgZone,
    private mockService: MocksService,
  ) { 
    this.getData()
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose()
      }
      if (this.chart1) {
        this.chart1.dispose()
      }
    })
  }

  ngAfterViewInit(): void {
    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/light-v10",
      center: [101.579524, 3.095902],
      zoom: 14,
    });

    map.on("load", function () {
      map.addSource("mapbox-terrain", {
        type: "vector",
        url: "mapbox://mapbox.mapbox-terrain-v2",
      });
      map.addLayer({
        id: "terrain-data",
        type: "line",
        source: "mapbox-terrain",
        "source-layer": "contour",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#ff69b4",
          "line-width": 1,
        },
      });
    });
  }

  getData() {
    this.mockService.getAll('admin-report/report-data-1.json').subscribe(
      (res) => {
        // Success
        this.dataChart = res
      },
      () => {
        // Unsuccess
      },
      () => {
        // After
        this.mockService.getAll('admin-report/report-data-2.json').subscribe(
          (res) => {
            // Success
            this.dataChart2 = res
          },
          () => {
            // Unsuccess
          },
          () => {
            // After
            this.mockService.getAll('admin-report/report-data-3.json').subscribe(
              (res) => {
                // Success
                this.dataChart3 = res
              },
              () => {
                // Unsuccess
              },
              () => {
                // After
                this.getCharts()
              }
            )
          }
        )
      }
    )
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart()
      this.getChart1()
    })
  }

  getChart(){

    let chart = am4core.create( "chartKemudahan", am4charts.XYChart );
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    chart.colors.step = 2;

    // X axis
    let xAxis = chart.xAxes.push( new am4charts.CategoryAxis() );
    xAxis.dataFields.category = "x";
    xAxis.renderer.grid.template.location = 0;
    xAxis.renderer.minGridDistance = 10;
    xAxis.renderer.labels.template.disabled = true;
    xAxis.data = [{ x: "1" }, { x: "2" }, { x: "3" }, { x: "4" }, { x: "5" }, { x: "6" }, { x: "7" }, { x: "8" }, { x: "9" }, { x: "10" }];

    // Y axis
    let yAxis = chart.yAxes.push( new am4charts.CategoryAxis() );
    yAxis.renderer.labels.template.disabled = true;
    yAxis.renderer.grid.template.location = 0;
    yAxis.renderer.minGridDistance = 10;
    yAxis.dataFields.category = "y";
    yAxis.data = [{ y: "1" }, { y: "2" }, { y: "3" }, { y: "4" }, { y: "5" }, { y: "6" }, { y: "7" }, { y: "8" }, { y: "9" }, { y: "10" }];

    // Legend
    chart.legend = new am4charts.Legend();

    // Create series
    function createSeries(name) {
      let series = chart.series.push( new am4charts.ColumnSeries() );
      series.dataFields.categoryX = "x";
      series.dataFields.categoryY = "y";
      series.sequencedInterpolation = true;
      series.defaultState.transitionDuration = 3000;
      series.name = name;

      // Set up column appearance
      let column = series.columns.template;
      column.strokeWidth = 1;
      column.strokeOpacity = 1;
      column.stroke = am4core.color( "#ffffff" );
      column.width = am4core.percent( 100 );
      column.height = am4core.percent( 100 );
      //column.column.cornerRadius(6, 6, 6, 6);
      
      return series;
    }

    let series1 = createSeries("Kritikal");
    series1.data = [
      { x: "1", y: "1" },
      { x: "1", y: "2" },
      { x: "1", y: "3" },
      { x: "1", y: "4" },
      { x: "1", y: "5" },
      { x: "1", y: "6" },
      { x: "1", y: "7" },
      { x: "1", y: "8" },
      { x: "1", y: "9" },
      { x: "1", y: "10" },
      
      { x: "2", y: "1" },
      { x: "2", y: "2" },
      { x: "2", y: "3" },
      { x: "2", y: "4" },
      { x: "2", y: "5" },
      { x: "2", y: "6" },
      { x: "2", y: "7" },
      { x: "2", y: "8" },
      { x: "2", y: "9" },
      { x: "2", y: "10" },
      
      { x: "3", y: "1" },
      { x: "3", y: "2" },
      { x: "3", y: "3" },
    ];

    let series2 = createSeries("Sederhana");
    series2.data = [
      { x: "3", y: "4" },
      { x: "3", y: "5" },
      { x: "3", y: "6" },
      { x: "3", y: "7" },
      { x: "3", y: "8" },
      { x: "3", y: "9" },
      { x: "3", y: "10" },
      
      { x: "4", y: "1" },
      { x: "4", y: "2" },
      { x: "4", y: "3" },
      { x: "4", y: "4" },
      { x: "4", y: "5" },
      { x: "4", y: "6" },
      { x: "4", y: "7" },
      { x: "4", y: "8" },
      { x: "4", y: "9" },
      { x: "4", y: "10" },
      
      { x: "5", y: "1" },
      { x: "5", y: "2" },
      { x: "5", y: "3" },
      { x: "5", y: "4" },
      { x: "5", y: "5" },
      { x: "5", y: "6" },
      { x: "5", y: "7" },
      { x: "5", y: "8" },
      { x: "5", y: "9" },
      { x: "5", y: "10" },

      { x: "6", y: "1" },
    ];

    let series3 = createSeries("Rendah");
    series3.data = [
      { x: "6", y: "2" },
      { x: "6", y: "3" },
      { x: "6", y: "4" },
      { x: "6", y: "5" },
      { x: "6", y: "6" },
      { x: "6", y: "7" },
      { x: "6", y: "8" },
      { x: "6", y: "9" },
      { x: "6", y: "10" },
      
      { x: "7", y: "1" },
      { x: "7", y: "2" },
      { x: "7", y: "3" },
      { x: "7", y: "4" },
      { x: "7", y: "5" },
      { x: "7", y: "6" },
      { x: "7", y: "7" },
      { x: "7", y: "8" },
      { x: "7", y: "9" },
    ];
    this.chart = chart
  }

  getChart1(){
    let chart = am4core.create("chartRisiko", am4charts.XYChart);
    chart.scrollbarX = new am4core.Scrollbar();

    // Add data
    chart.data = [{
      "country": "Mampan",
      "visits": 980
    }, {
      "country": "Sederhana",
      "visits": 3190
    }, {
      "country": "Rendah",
      "visits": 1880
    }];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.tooltip.disabled = true;
    categoryAxis.renderer.minHeight = 110;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 50;

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series.columns.template.strokeWidth = 0;

    series.tooltip.pointerOrientation = "vertical";

    series.columns.template.column.cornerRadiusTopLeft = 10;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.fillOpacity = 0.8;

    // on hover, make corner radiuses bigger
    let hoverState = series.columns.template.column.states.create("hover");
    hoverState.properties.cornerRadiusTopLeft = 0;
    hoverState.properties.cornerRadiusTopRight = 0;
    hoverState.properties.fillOpacity = 1;

    series.columns.template.adapter.add("fill", function(fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    // Cursor
    chart.cursor = new am4charts.XYCursor();

    this.chart1 = chart
  }

  print() {
    swal.fire({
      title: "Berjaya",
      text: "Fail anda telah dicetak!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Tutup"
    })
  }


}
