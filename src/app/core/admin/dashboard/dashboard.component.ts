import { Component, OnInit, NgZone, OnDestroy } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_continentsLow from "@amcharts/amcharts4-geodata/continentsLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Router } from '@angular/router';
import { tileLayer, latLng, marker, icon } from "leaflet";
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  // Chart
  private chart: any
  private chart1: any
  private chart2: any
  private clicked: any = true
  private clicked1: any = false

  options = {
    layers: [
      tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: "...",
      }),
    ],
    zoom: 6,
    center: latLng(3.969900, 102.080900),
  };

  constructor(
    private zone: NgZone
  ) { }

  ngAfterViewInit(): void {
    var map = new mapboxgl.Map({
      container: "mapDB",
      style: "mapbox://styles/mapbox/dark-v10",
      center: [102.080900, 3.969900],
      zoom: 6,
      
    });
    var popup = new mapboxgl.Popup({ closeOnClick: true })
    .setLngLat([101.579524, 3.095902])
    .setHTML('<p>380</p>')
    .addTo(map);

    var kedah = new mapboxgl.Popup({ closeOnClick: true })
    .setLngLat([100.879266, 5.620274])
    .setHTML('<p>1917</p>')
    .addTo(map);

    var perlis = new mapboxgl.Popup({ closeOnClick: true })
    .setLngLat([100.264216, 6.670148])
    .setHTML('<p>261</p>')
    .addTo(map);

    var perak = new mapboxgl.Popup({ closeOnClick: true })
    .setLngLat([101.092234, 3.915394])
    .setHTML('<p>2329</p>')
    .addTo(map);

    var penang = new mapboxgl.Popup({ closeOnClick: true })
    .setLngLat([100.246907, 5.371204])
    .setHTML('<p>547</p>')
    .addTo(map);

    var johor = new mapboxgl.Popup({ closeOnClick: true })
    .setLngLat([103.756931, 1.522090])
    .setHTML('<p>1958</p>')
    .addTo(map);

    var pahang = new mapboxgl.Popup({ closeOnClick: true })
    .setLngLat([102.908760,3.426748])
    .setHTML('<p>2373</p>')
    .addTo(map);

    var terengganu = new mapboxgl.Popup({ closeOnClick: true })
    .setLngLat([103.436104, 4.358421])
    .setHTML('<p>1333</p>')
    .addTo(map);

    var kelantan = new mapboxgl.Popup({ closeOnClick: true })
    .setLngLat([102.356836, 5.910219])
    .setHTML('<p>1824</p>')
    .addTo(map);

    map.scrollZoom.disable();
  }



  ngOnInit() {
    this.getCharts()
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(
      () => {
        if (this.chart) {
          console.log('Chart disposed')
          this.chart.dispose()
        }
        if (this.chart1) {
          console.log('Chart disposed')
          this.chart1.dispose()
        }
      }
    )
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart()
      this.getChart1()
    })
  }

  getChart() {
    let chart = am4core.create('kgvsnegeri', am4charts.XYChart)
    chart.colors.step = 2;

    chart.legend = new am4charts.Legend()
    chart.legend.position = 'top'
    chart.legend.paddingBottom = 20
    chart.legend.labels.template.maxWidth = 95

    let xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    xAxis.dataFields.category = 'category'
    xAxis.renderer.cellStartLocation = 0.1
    xAxis.renderer.cellEndLocation = 0.9
    xAxis.renderer.grid.template.location = 0;

  let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
  yAxis.min = 0;

  function createSeries(value, name) {
      let series = chart.series.push(new am4charts.ColumnSeries())
      series.dataFields.valueY = value
      series.dataFields.categoryX = 'category'
      series.name = name

      series.events.on("hidden", arrangeColumns);
      series.events.on("shown", arrangeColumns);

      let bullet = series.bullets.push(new am4charts.LabelBullet())
      bullet.interactionsEnabled = false
      bullet.dy = 30;
      bullet.label.text = '{valueY}'
      bullet.label.fill = am4core.color('#ffffff')

      return series;
  }

    chart.data = [
        {
            category: 'Perlis',
            second: 261,
            
        },
        {
            category: 'Kedah',
            second: 1917,
          
        },
        {
            category: 'Pulau Pinang',
            second: 547,
            
        },
        {
            category: 'Kelantan',

            second: 1824,
            
        },
        {
          category: 'Terengganu',

          second: 1333,
          
      },
      {
        category: 'Perak',

        second: 2329,
        
    },
    {
      category: 'Jul',

      second: 40,
      
    },
    {
    category: 'Selangor',

    second: 657,   
    },
    {
      category: 'Pahang',

      second: 2373,
     },
     {
      category: 'Okt',

      second: 10, 
    },
    {
      category: 'N. Sembilan',

      second: 1096,
      
    },
    {
      category: 'Melaka',

      second: 769,  
     },
     {
      category: 'Johor',

      second: 1958,
      
    },
    {
      category: 'WP Labuan ',

      second: 27,  
     }
    ]

      createSeries('second', 'Bil Kampung');
      
      
      function arrangeColumns() {
      
          let series = chart.series.getIndex(0);
      
          let w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
          if (series.dataItems.length > 1) {
              let x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
              let x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
              let delta = ((x1 - x0) / chart.series.length) * w;
              if (am4core.isNumber(delta)) {
                  let middle = chart.series.length / 2;
      
                  let newIndex = 0;
                  chart.series.each(function(series) {
                      if (!series.isHidden && !series.isHiding) {
                          series.dummyData = newIndex;
                          newIndex++;
                      }
                      else {
                          series.dummyData = chart.series.indexOf(series);
                      }
                  })
                  let visibleCount = newIndex;
                  let newMiddle = visibleCount / 2;
      
                  chart.series.each(function(series) {
                      let trueIndex = chart.series.indexOf(series);
                      let newIndex = series.dummyData;
      
                      let dx = (newIndex - trueIndex + middle - newMiddle) * delta
      
                      series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                      series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                  })
              }
          }
      }
      
  }

  getChart1() {
    let chart = am4core.create("bajetDB", am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
      {
        item: "Peruntukan",
        value: 40
      },
      {
        item: "Digunakan",
        value: 30
      },
    ];
    chart.radius = am4core.percent(70);
    chart.innerRadius = am4core.percent(40);
    chart.startAngle = 0;
    chart.endAngle = 360;


    let series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "item";
    series.ticks.template.disabled = true;
    series.labels.template.disabled = true;

    series.slices.template.cornerRadius = 10;
    series.slices.template.innerCornerRadius = 7;
    series.slices.template.draggable = true;
    series.slices.template.inert = true;
    series.alignLabels = false;

    series.hiddenState.properties.startAngle = 90;
    series.hiddenState.properties.endAngle = 90;

    //chart.legend = new am4charts.Legend();
    this.chart1 = chart
  }

}
