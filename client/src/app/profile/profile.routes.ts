import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';


// Routes marche avec un s à la fin ou simplement un tableau 
export const PROFILE_ROUTES : Routes = [
    { 
        path: '', 
        component: ProfileComponent
    }

]