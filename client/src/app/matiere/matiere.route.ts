import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MatiereComponent } from './matiere/matiere.component';
import { RessourcesComponent } from './shared/components/ressources/ressources.component';
import { AffRessourceComponent } from './shared/components/aff-ressource/aff-ressource.component';


// Routes marche avec un s à la fin ou simplement un tableau 
export const MATIERE_ROUTES : Routes = [
    { path: '', component: MatiereComponent, children : [
        {path: 'ressources', component: RessourcesComponent},
        {path: 'affRessource', component: AffRessourceComponent}
    ] },
   
]