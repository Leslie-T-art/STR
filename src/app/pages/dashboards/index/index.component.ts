import { Component, Renderer2} from '@angular/core';
import { Observable } from 'rxjs';

// Get Data
import { SourceModel, campaignModel } from './index.model';
import { campaign, sourceData, sessionData } from '../../../core/data/analytics';
import { DecimalPipe } from '@angular/common';
import { IndexService } from './index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [IndexService, DecimalPipe]
})

// Index Xomponent
export class IndexComponent {

  performanceChart: any;
  realizedChart: any;
  balanceoverviewChart: any;
  usersActivityChart: any;
  shadesheatmapChart: any;
  semiradialbarChart: any;
  SourceList!: SourceModel[];
  CampaignList!: Observable<campaignModel[]>;
  total: Observable<number>;
  sources: any;
  campaigns: any;
  sessionList: any;
  stacked: any;
  selectSort: any = 'Source';

  constructor(public service: IndexService,private renderer: Renderer2) {
    this.CampaignList = service.countries$;
    this.total = service.total$;
  }

  ngOnInit(): void {

    // Chart Color Data Get Function
    this._performanceChart('["--tb-primary", "--tb-warning"]');
    this._realizedChart('["--tb-warning", "--tb-success", "--tb-danger"]');
    this._balanceoverviewChart('["--tb-primary", "--tb-success","--tb-info"]');
    this._usersActivityChart('["--tb-primary", "--tb-primary-rgb, 0.75"]');
    this._shadesheatmapChart('["--tb-info-rgb, 0.7", "--tb-info-rgb, 0.35"]');
    this._semiradialbarChart('["--tb-secondary"]');

    // Fetch Data
    this.sources = sourceData;
    this.sessionList = sessionData;

    setTimeout(() => {
      this.CampaignList.subscribe(x => {
        this.campaigns = Object.assign([], x);
      });
      document.getElementById('elmLoader')?.classList.add('d-none')
    }, 1000)

    this.stacked = [
      {
        type: undefined,
        value: 69,
      },
      {
        type: 'success',
        value: 31,
      },
    ]

  }

  ngAfterViewInit() {
    this.renderer.addClass(document.body, 'dashboard-topbar-wrapper');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'dashboard-topbar-wrapper');
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
   * Performance overview Chart
   */
  private _performanceChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.performanceChart = {
      series: [{
        name: 'Website',
        type: 'column',
        data: [30, 57, 25, 33, 20, 39, 47, 36, 22, 51, 38, 27, 38, 49, 42, 58, 33, 46, 40, 34, 41, 53, 19, 23, 36, 52, 58, 43]
      }, {
        name: 'Social Media',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16, 33, 20, 39, 47, 36, 22, 51, 38, 27, 38, 49, 33, 20, 39, 47, 36]
      }],
      chart: {
        height: 350,
        type: 'line',
        toolbar: {
          show: false
        },
      },
      stroke: {
        width: [0, 2],
        curve: 'smooth'
      },
      plotOptions: {
        bar: {
          columnWidth: '100%',
          borderRadiusOnAllStackedSeries: true

        },
      },
      colors: colors,
      dataLabels: {
        enabled: false,
        enabledOnSeries: [1]
      },
      legend: {
        show: false,
      },
      grid: {
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
          top: 0,
          right: -8,
          left: -16
        }
      },
      yaxis: {
        show: false,
      },
      xaxis: {
        type: 'datetime',
        categories: ['01/01/2023 GMT', '01/02/2023 GMT', '01/03/2023 GMT', '01/04/2023 GMT',
          '01/05/2023 GMT', '01/06/2023 GMT', '01/07/2023 GMT', '01/08/2023 GMT', '01/09/2023 GMT', '01/10/2023 GMT', '01/11/2023 GMT', '01/12/2023 GMT', '01/13/2023 GMT',
          '01/14/2023 GMT', '01/15/2023 GMT', '01/16/2023 GMT', '01/17/2023 GMT', '01/18/2023 GMT', '01/19/2023 GMT', '01/20/2023 GMT', '01/21/2023 GMT', '01/22/2023 GMT',
          '01/23/2023 GMT', '01/24/2023 GMT', '01/25/2023 GMT', '01/26/2023 GMT', '01/27/2023 GMT', '01/28/2023 GMT'
        ],
        labels: {
          show: false,
        },
        axisTicks: {
          show: false,
        }
      }
    };
  }

  /**
   * realized rate Chart
   */
  private _realizedChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.realizedChart = {
      series: [{
        name: 'Read',
        data: [80, 50, 30, 40, 100, 20],
      },
      {
        name: 'Delivery',
        data: [20, 30, 40, 80, 20, 80],
      },
      {
        name: 'Failed',
        data: [44, 76, 78, 13, 43, 10],
      }
      ],
      chart: {
        height: 403,
        type: 'radar',
        toolbar: {
          show: false
        },
      },
      stroke: {
        width: 1
      },
      fill: {
        opacity: 0.2
      },
      markers: {
        size: 3,
        hover: {
          size: 4,
        }
      },
      tooltip: {
        y: {
          formatter: function (val: any) {
            return val
          }
        }
      },
      colors: colors,
      xaxis: {
        categories: ['2018', '2019', '2020', '2021', '2022', '2023'],
      }
    };
  }

  /**
   * Session Overview Chart
   */
  private _balanceoverviewChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.balanceoverviewChart = {
      series: [{
        name: 'Total Revenue',
        data: [49, 62, 55, 67, 73, 89, 110, 120, 115, 129, 123, 133]
      }, {
        name: 'Total Expense',
        data: [62, 76, 67, 49, 63, 77, 70, 86, 92, 103, 87, 93]
      }, {
        name: 'Profit Ratio',
        data: [12, 36, 29, 33, 37, 42, 58, 67, 49, 33, 24, 18]
      }],
      chart: {
        height: 320,
        type: 'line',
        toolbar: {
          show: false
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 3,
          color: colors,
          opacity: 0.25
        }
      },
      markers: {
        size: 0,
        strokeColors: colors,
        strokeWidth: 2,
        strokeOpacity: 0.9,
        fillOpacity: 1,
        radius: 0,
        hover: {
          size: 5,
        }
      },
      grid: {
        show: true,
        padding: {
          top: -20,
          right: 0,
          bottom: 0,
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: {
          rotate: -90
        },
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          stroke: {
            width: 1
          },
        },
      },
      stroke: {
        width: [2, 2, 2],
        curve: 'smooth'
      },
      colors: colors,
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
        height: 340,
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
        height: 340,
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

  private _semiradialbarChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.semiradialbarChart = {
      series: [74.36],
      chart: {
        type: 'radialBar',
        height: 350,
        offsetY: -20,
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#e7e7e7",
            strokeWidth: '97%',
            margin: 5, // margin is in pixels
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              offsetY: -2,
              fontSize: '22px'
            }
          }
        }
      },
      grid: {
        padding: {
          top: -10
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          shadeIntensity: 0.4,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 53, 91]
        },
      },
      labels: ['Average Results'],
      colors: colors
    };
  }

  // Sort Data
  direction: any = 'asc';

  changeSort(column: any){
    this.selectSort = column
    this.onSort(column)
  }

  onSort(column: any) {
    if (this.direction == 'asc') {
      this.direction = 'desc'
    } else {
      this.direction = 'asc'
    }
    campaign.sort((a: any, b: any) => {
      const res = this.compare(a[column], b[column]);
      return this.direction === 'asc' ? res : -res;
    });
  }

  compare(v1: string | number, v2: string | number) {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
  }
}
