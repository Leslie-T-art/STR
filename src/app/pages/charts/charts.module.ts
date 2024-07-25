import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// chart
import { NgApexchartsModule } from "ng-apexcharts";
// Page Route
import { ChartsRoutingModule } from './charts-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// Component
import { ApexLineComponent } from './apex-line/apex-line.component';
import { ApexAreaComponent } from './apex-area/apex-area.component';
import { ApexColumnComponent } from './apex-column/apex-column.component';
import { ApexBarComponent } from './apex-bar/apex-bar.component';
import { ApexMixedComponent } from './apex-mixed/apex-mixed.component';
import { ApexTimelineComponent } from './apex-timeline/apex-timeline.component';
import { ApexCandlestickComponent } from './apex-candlestick/apex-candlestick.component';
import { ApexBoxplotComponent } from './apex-boxplot/apex-boxplot.component';
import { ApexBubbleComponent } from './apex-bubble/apex-bubble.component';
import { ApexScatterComponent } from './apex-scatter/apex-scatter.component';
import { ApexHeatmapComponent } from './apex-heatmap/apex-heatmap.component';
import { ApexTreemapComponent } from './apex-treemap/apex-treemap.component';
import { ApexPieComponent } from './apex-pie/apex-pie.component';
import { ApexRadialbarComponent } from './apex-radialbar/apex-radialbar.component';
import { ApexRadarComponent } from './apex-radar/apex-radar.component';
import { ApexPolarComponent } from './apex-polar/apex-polar.component';

@NgModule({
  declarations: [
    ApexLineComponent,
    ApexAreaComponent,
    ApexColumnComponent,
    ApexBarComponent,
    ApexMixedComponent,
    ApexTimelineComponent,
    ApexCandlestickComponent,
    ApexBoxplotComponent,
    ApexBubbleComponent,
    ApexScatterComponent,
    ApexHeatmapComponent,
    ApexTreemapComponent,
    ApexPieComponent,
    ApexRadialbarComponent,
    ApexRadarComponent,
    ApexPolarComponent,

  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    SharedModule,
    NgApexchartsModule
  ]
})
export class ChartsModule { }
