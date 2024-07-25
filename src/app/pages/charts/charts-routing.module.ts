import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { ApexRadarComponent } from './apex-radar/apex-radar.component';
import { ApexRadialbarComponent } from './apex-radialbar/apex-radialbar.component';
import { ApexPolarComponent } from './apex-polar/apex-polar.component';

const routes: Routes = [
  {
    path: 'apex-line',
    component: ApexLineComponent
  },
  {
    path: 'apex-area',
    component: ApexAreaComponent
  },
  {
    path: 'apex-column',
    component: ApexColumnComponent
  },
  {
    path: 'apex-bar',
    component: ApexBarComponent
  },
  {
    path: 'apex-mixed',
    component: ApexMixedComponent
  },
  {
    path: 'apex-timeline',
    component: ApexTimelineComponent
  },
  {
    path: 'apex-candlestick',
    component: ApexCandlestickComponent
  },
  {
    path: 'apex-boxplot',
    component: ApexBoxplotComponent
  },
  {
    path: 'apex-bubble',
    component: ApexBubbleComponent
  },
  {
    path: 'apex-scatter',
    component: ApexScatterComponent
  },
  {
    path: 'apex-heatmap',
    component: ApexHeatmapComponent
  },
  {
    path: 'apex-treemap',
    component: ApexTreemapComponent
  },
  {
    path: 'apex-pie',
    component: ApexPieComponent
  },
  {
    path: 'apex-radar',
    component: ApexRadarComponent
  },
  {
    path: 'apex-radialbar',
    component: ApexRadialbarComponent
  },
  {
    path: 'apex-polar',
    component: ApexPolarComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
