import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app.routing-module";
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { HfirstComponent } from "./home/hfirst/hfirst.component";
import { HsecondComponent } from "./home/hsecond/hsecond.component";
import { OutstationComponent } from "./home/hsecond/outstation/outstation.component";
import { CarRentalComponent } from "./home/hsecond/car-rental/car-rental.component";
import { AirportTaxiComponent } from "./home/hsecond/airport-taxi/airport-taxi.component";
import { CityRidesComponent } from "./home/hsecond/city-rides/city-rides.component";
import { HthirdComponent } from "./home/hthird/hthird.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { AboutComponent } from "./about/about.component";
import { AfirstComponent } from "./about/afirst/afirst.component";
import { AsecondComponent } from "./about/asecond/asecond.component";
import { AthirdComponent } from "./about/athird/athird.component";
import { FromComponent } from "./from/from.component";



@NgModule({
    declarations:[AppComponent,
       HomeComponent, HeaderComponent ,HfirstComponent,HsecondComponent ,OutstationComponent ,CarRentalComponent,AirportTaxiComponent,CityRidesComponent ,HthirdComponent,SidebarComponent,AboutComponent,AfirstComponent,AsecondComponent, AthirdComponent,FromComponent ],
    bootstrap:[AppComponent],
    imports: [FormsModule,
         BrowserModule,
         CommonModule
         ,AppRoutingModule,
        ReactiveFormsModule,
    HttpClientModule]
})

export class AppModule{}