import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DecimalPipe } from '@angular/common';

// Data Get
import { OrderModel } from './ecommerce.model';
import { customer, products, report } from '../../../core/data/exommerce';
import { EcommerceService } from './ecommerce.service';


@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss'],
  providers: [EcommerceService, DecimalPipe]
})

// ecommerce component
export class EcommerceComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  monthlyprofitChart: any;
  columnstackedChart: any;
  customerimpressionCharts: any;

  // Table data
  orderList!: Observable<OrderModel[]>;
  total: Observable<number>;
  orders: any;

  customerList: any;
  productsList: any;
  reportList: any;

  constructor(public service: EcommerceService) {
    this.orderList = service.countries$;
    this.total = service.total$;
  }


  ngOnInit(): void {

    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Dashboards', active: true },
      { label: 'Ecommerce', active: true }
    ];

    // Fetch Data
    this.customerList = customer;
    this.productsList = products;
    this.reportList = report;

    setTimeout(() => {
      this.orderList.subscribe(x => {
        this.orders = Object.assign([], x);
      });
      document.getElementById('elmLoader')?.classList.add('d-none')
    }, 1200)

    // Chart Color Data Get Function
    this._monthlyprofitChart('["--tb-primary", "--tb-info", "--tb-warning", "--tb-success"]');
    this._columnstackedChart('["--tb-primary", "--tb-success"]');
    this._customerimpressionCharts('["--tb-secondary", "--tb-success", "--tb-danger"]');
  }

  config = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
  };

  num: number = 0;

  option = {
    startVal: this.num,
    useEasing: true,
    duration: 2,
    decimalPlaces: 2,
  };

  // Chart Colors Set
  private getChartColorsArray(colors: any) {
    colors = JSON.parse(colors);
    return colors.map(function (value: any) {
      var newValue = value.replace(" ", "");
      if (newValue.indexOf(",") === -1) {
        var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
        if (color) {
          color = color.replace(" ", "");
          return color;
        }
        else return newValue;;
      } else {
        var val = value.split(',');
        if (val.length == 2) {
          var rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
          rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
          return rgbaColor;
        } else {
          return newValue;
        }
      }
    });
  }

  /**
 * Bubble Chart
 */
  // Bubble Charts Generate Data
  generateData(baseval: any, count: any, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (100 - 1 + 1)) + 1;;
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 200;
      i++;
    }
    return series;
  }
  private _monthlyprofitChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.monthlyprofitChart = {
      series: [{
        name: 'Product1',
        data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 8, {
          min: 1,
          max: 15
        })
      },
      {
        name: 'Product2',
        data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 8, {
          min: 1,
          max: 15
        })
      }
      ],
      chart: {
        height: 248,
        type: 'bubble',
        toolbar: {
          show: false,
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false,
      },
      grid: {
        padding: {
          top: 0,
          right: 0,
          bottom: 0
        }
      },
      xaxis: {
        show: false,
        tickAmount: 6,
        type: 'datetime',
        labels: {
          rotate: 0,
        }
      },
      yaxis: {
        max: 15
      },
      theme: {
        palette: 'palette2'
      },
      colors: colors
    };
  }

  // Product Overview Chart
  private _columnstackedChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.columnstackedChart = {
      series: [{
        name: 'Views',
        data: [44, 55, 41, 67, 22, 43, 21, 49]
      }, {
        name: 'Orders',
        data: [13, 23, 20, 50, 13, 27, 33, 27]
      }],
      chart: {
        type: 'bar',
        height: 252,
        stacked: true,
        stackType: '100%',
        toolbar: {
          show: false,
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        }
      },
      grid: {
        show: false,
        yaxis: {
          lines: {
            show: false
          }
        },
        padding: {
          top: -25,
          left: -15,
          right: 0,
          bottom: 0
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        show: false,
      },
      colors: colors,
    };
  }

  // Revenue Overview Chart
  private _customerimpressionCharts(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.customerimpressionCharts = {
      series: [{
        name: "Orders",
        data: [34, 65, 46, 68, 49, 61, 42, 44, 78, 52, 63, 67],
      },
      {
        name: "Earnings",
        data: [
          89.25, 98.58, 68.74, 108.87, 77.54, 84.03, 51.24, 28.57, 92.57, 42.36,
          88.51, 36.57,
        ],
      },
      {
        name: "Refunds",
        data: [8, 12, 7, 17, 21, 11, 5, 9, 7, 29, 12, 35],
      },
      ],
      chart: {
        height: 322,
        type: "line",
        toolbar: {
          show: false,
        },
      },
      stroke: {
        curve: "smooth",
        dashArray: [0, 0, 8],
        width: [1, 1, 2],
      },
      fill: {
        opacity: [1, 1, 1],
      },
      markers: {
        size: [0, 0, 0],
        strokeWidth: 3,
        hover: {
          size: 4,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      grid: {
        show: true,
        padding: {
          right: -2,
          bottom: -10,
          left: 10,
        },
      },
      legend: {
        show: true,
        horizontalAlign: "right",
        position: 'top',
        offsetX: 0,
        offsetY: 5,
        markers: {
          width: 9,
          height: 9,
          radius: 6,
        },
        itemMargin: {
          horizontal: 10,
          vertical: 0,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "20%",
          barHeight: "100%",
          borderRadius: [8],
        },
      },
      colors: colors,
      tooltip: {
        shared: true,
        y: [{
          formatter: function (y: any) {
            if (typeof y !== "undefined") {
              return y.toFixed(0);
            }
            return y;
          },
        },
        {
          formatter: function (y: any) {
            if (typeof y !== "undefined") {
              return "$" + y.toFixed(2) + "k";
            }
            return y;
          },
        },
        {
          formatter: function (y: any) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " Sales";
            }
            return y;
          },
        },
        ],
      },
    }
  }

}
