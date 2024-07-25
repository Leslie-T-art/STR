import { Component } from '@angular/core';
import { widgetsourceData, widgetcustomer, widgetincome, widgetproducts } from 'src/app/core/data';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  sources: any;
  productsList: any;
  customerList: any;
  shadesheatmapChart: any;
  usersActivityChart: any;
  columnstackedChart: any;
  Incomelist: any;

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Vixon', active: true },
      { label: 'Widgets', active: true }
    ];
    // chart color
    this._shadesheatmapChart('["--tb-info-rgb, 0.7", "--tb-info-rgb, 0.35"]');
    this._usersActivityChart('["--tb-primary", "--tb-primary-rgb, 0.75"]');
    this._columnstackedChart('["--tb-primary", "--tb-success"]');

    // fetch data
    this.sources = widgetsourceData;
    this.productsList = widgetproducts;
    this.customerList = widgetcustomer;
    this.Incomelist = widgetincome;
  }

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
    * Slaes Per Week Chart
    */

  generateData(count: any, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = (i + 1).toString();
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }
  private _shadesheatmapChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.shadesheatmapChart = {
      series: [{
        name: '7 AM',
        data: this.generateData(7, {
          min: 0,
          max: 90
        })
      },
      {
        name: '8 AM',
        data: this.generateData(7, {
          min: 0,
          max: 90
        })
      },
      {
        name: '9 AM',
        data: this.generateData(7, {
          min: 0,
          max: 90
        })
      },
      {
        name: '10 AM',
        data: this.generateData(7, {
          min: 0,
          max: 90
        })
      },
      {
        name: '11 AM',
        data: this.generateData(7, {
          min: 0,
          max: 90
        })
      },
      {
        name: '12 PM',
        data: this.generateData(7, {
          min: 0,
          max: 90
        })
      },
      {
        name: '1 PM',
        data: this.generateData(7, {
          min: 0,
          max: 90
        })
      },
      {
        name: '2 PM',
        data: this.generateData(7, {
          min: 0,
          max: 90
        })
      },
      {
        name: '3 PM',
        data: this.generateData(7, {
          min: 0,
          max: 90
        })
      }
      ],
      chart: {
        height: 300,
        type: 'heatmap',
        toolbar: {
          show: false
        }
      },
      stroke: {
        width: 3
      },
      plotOptions: {
        heatmap: {
          radius: 2,
          enableShades: false,
          colorScale: {
            ranges: [{
              from: 0,
              to: 50,
              color: colors[0]
            },
            {
              from: 51,
              to: 100,
              color: colors[1]
            },
            ],
          },

        }
      },
      grid: {
        show: true,
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        },
        padding: {
          top: -18,
          right: 0,
          bottom: 0,
        },
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        type: 'category',
      },
    };
  }

  /**
   * Total Leads Chart
   */
  private _usersActivityChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.usersActivityChart = {
      series: [{
        name: 'Created',
        data: [20, 17, 11, 15, 20, 15, 20]
      }, {
        name: 'Converted',
        data: [13, 23, 18, 8, 27, 10, 12]
      }],
      chart: {
        type: 'bar',
        height: 300,
        stacked: true,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: true
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '35%',
        },
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'],
      },
      grid: {
        show: true,
        xaxis: {
          lines: {
            show: false
          }
        },
        padding: {
          top: -18,
          right: 0,
          bottom: 0,
        },
      },
      legend: {
        position: 'bottom',
      },
      fill: {
        opacity: 1
      },
      colors: colors,
    };
  }
  // / Product Overview Chart
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
        height: 300,
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

}
