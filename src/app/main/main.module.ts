import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { NoibatComponent } from './noibat/noibat.component';
import { MoinhatComponent } from './moinhat/moinhat.component';
import {FotterComponent} from '../shaers/fotter/fotter.component';
import {HeaderComponent} from '../shaers/header/header.component';
import {SlideComponent} from '../shaers/slide/slide.component';
import {Route,ROUTES,RouterModule, Routes} from '@angular/router'

const routes: Routes=[
  {
    path:'',
    loadChildren:()=>import('./noibat/noibat.module').then(m=>m.NoibatModule)
  }
]

@NgModule({
  declarations: [MainComponent, NoibatComponent, MoinhatComponent,FotterComponent,HeaderComponent,SlideComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class MainModule { }
