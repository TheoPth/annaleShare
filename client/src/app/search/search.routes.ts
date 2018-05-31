import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { SearchComponent } from './search.component';


// Routes marche avec un s à la fin ou simplement un tableau 
export const SEARCH_ROUTES : Routes = [
    { 
        path: '', 
        component: SearchComponent
    }

]