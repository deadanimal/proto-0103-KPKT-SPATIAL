import { Component, OnInit, OnDestroy, NgZone, TemplateRef } from '@angular/core';
import { User } from 'src/assets/mock/admin-user/users.model'
import { MocksService } from 'src/app/shared/services/mocks/mocks.service';
import swal from 'sweetalert2';

import * as moment from 'moment';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit, OnDestroy {

  // Chart
  chart: any
  chart1: any
  chart2: any
  chart3: any
  dataChart: any[] = []
  dataChart2: any[] = []
  dataChart3: any[] = []

  // Datepicker
  bsDPConfig = { 
    isAnimated: true, 
    containerClass: 'theme-default'
  }

  constructor(
    private mockService: MocksService,
    private zone: NgZone
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
      if (this.chart2) {
        this.chart2.dispose()
      }
      if (this.chart3) {
        this.chart3.dispose()
      }
    })
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
      this.getChart2()
      this.getChart3()
    })
  }

  getChart() {
    let chart = am4core.create("pieDasar", am4charts.PieChart);

      // Add data
      chart.data = [ {
        "Kod": "AD",
        "Dasar": 4
      }, {
        "Kod": "SD",
        "Dasar": 2
      }, {
        "Kod": "DD",
        "Dasar": 5
      }, {
        "Kod": "ED",
        "Dasar": 3
      }, {
        "Kod": "PD",
        "Dasar": 3
      }
      ];

      // Add and configure Series
      let pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "Dasar";
      pieSeries.dataFields.category = "Kod";
      pieSeries.slices.template.stroke = am4core.color("#fff");
      pieSeries.slices.template.strokeOpacity = 1;

      // This creates initial animation
      pieSeries.hiddenState.properties.opacity = 1;
      pieSeries.hiddenState.properties.endAngle = -90;
      pieSeries.hiddenState.properties.startAngle = -90;

      chart.hiddenState.properties.radius = am4core.percent(0);

      this.chart = chart
        
  }

  getChart1() {
    let chart = am4core.create("pieStrategi", am4charts.ChordDiagram);


chart.data = [
    { from: "A", to: "D", value: 10 },
    { from: "B", to: "D", value: 8 },
    { from: "B", to: "E", value: 4 },
    { from: "B", to: "C", value: 2 },
    { from: "C", to: "E", value: 14 },
    { from: "E", to: "D", value: 8 },
    { from: "C", to: "A", value: 4 },
    { from: "G", to: "A", value: 7 },
    { from: "D", to: "B", value: 1 }
];

chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";

// make nodes draggable
let nodeTemplate = chart.nodes.template;
nodeTemplate.readerTitle = "Click to show/hide or drag to rearrange";
nodeTemplate.showSystemTooltip = true;

let nodeLink = chart.links.template;
let bullet = nodeLink.bullets.push(new am4charts.CircleBullet());
bullet.fillOpacity = 1;
bullet.circle.radius = 5;
bullet.locationX = 0.5;

// create animations
chart.events.on("ready", function() {
    for (var i = 0; i < chart.links.length; i++) {
        let link = chart.links.getIndex(i);
        let bullet = link.bullets.getIndex(0);

        animateBullet(bullet);
    }
})

function animateBullet(bullet) {
    let duration = 3000 * Math.random() + 2000;
    let animation = bullet.animate([{ property: "locationX", from: 0, to: 1 }], duration)
    animation.events.on("animationended", function(event) {
        animateBullet(event.target.object);
    })
  }

    this.chart1 = chart
  }

  getChart2() {
    let chart = am4core.create("pieLangkah", am4charts.PieChart);

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";

    // Let's cut a hole in our Pie chart the size of 30% the radius
    chart.innerRadius = am4core.percent(50);

    // Put a thick white border around each Slice
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template
      // change the cursor on hover to make it apparent the object can be interacted with
      .cursorOverStyle = [
        {
          "property": "cursor",
          "value": "pointer"
        }
      ];

    pieSeries.alignLabels = false;
    pieSeries.labels.template.bent = true;
    pieSeries.labels.template.radius = 3;
    pieSeries.labels.template.padding(0,0,0,0);

    pieSeries.ticks.template.disabled = true;

    // Create a base filter effect (as if it's not there) for the hover to return to
    let shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
    shadow.opacity = 0;

    // Create hover state
    let hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

    // Slightly shift the shadow and make it more prominent on hover
    let hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
    hoverShadow.opacity = 0.7;
    hoverShadow.blur = 5;

    // Add a legend
    

    chart.data = [{
      "country": "AD",
      "litres": 24
    },{
      "country": "DD",
      "litres": 9
    }, {
      "country": "SD",
      "litres": 52
    }, {
      "country": "ED",
      "litres": 14
    }, {
      "country": "PD",
      "litres": 14
    }];


    this.chart2 = chart
  }

  getChart3() {
    let chart = am4core.create("chartdiv3", am4charts.XYChart);

    // Add data
    chart.data = this.dataChart3

    // Set input format for the dates
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.dateX = "date";
    series.tooltipText = "{value}"
    series.strokeWidth = 2;
    series.minBulletDistance = 15;

    // Drop-shaped tooltips
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.strokeOpacity = 0;
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.label.minWidth = 40;
    series.tooltip.label.minHeight = 40;
    series.tooltip.label.textAlign = "middle";
    series.tooltip.label.textValign = "middle";

    // Make bullets grow on hover
    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.strokeWidth = 2;
    bullet.circle.radius = 4;
    bullet.circle.fill = am4core.color("#fff");

    let bullethover = bullet.states.create("hover");
    bullethover.properties.scale = 1.3;

    // Make a panning cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "panXY";
    chart.cursor.xAxis = dateAxis;
    chart.cursor.snapToSeries = series;

    // Create vertical scrollbar and place it before the value axis
    chart.scrollbarY = new am4core.Scrollbar();
    chart.scrollbarY.parent = chart.leftAxesContainer;
    chart.scrollbarY.toBack();

    // Create a horizontal scrollbar with previe and place it underneath the date axis
    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;
    chart.scrollbarX.parent = chart.bottomAxesContainer;

    dateAxis.start = 0.79;
    dateAxis.keepSelection = true;

    this.chart3 = chart

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
