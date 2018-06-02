import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-liste-clickable',
  templateUrl: './liste-clickable.component.html',
  styleUrls: ['./liste-clickable.component.css']
})

/* Comment utiliser ce petit component de selectiond dans une liste ?
Passer un nom, et la liste doit etre de la form {'id': id: 'text': text}; */

export class ListeClickableComponent implements OnInit {

  @Input() listePick: Observable<any[]>;
  @Input() id: string;
  @Input() args: string[];
  @Output() pickedEvent: EventEmitter<number> = new EventEmitter<number>();


  public liste: any[] = [];
  public listeUntouched: any[] = [];

  public search = "";
  public picked: string;
  constructor() { }

  ngOnInit() {
    this.listePick.subscribe( listePick => {
    
      if (listePick) {
        
        this.listeUntouched = listePick;
        this.liste = this.listToListPick(listePick, this.id, this.args);
        if (this.liste.length > 0) {
          this.picked = this.liste[0].text;
        }     
      }
    });
  }

  emitPick(pick: any): void {
    
    let truePick = this.returnPickId(pick.id, this.id, this.listeUntouched);
    this.pickedEvent.emit(truePick);
    this.picked = pick.text;
  }

  listToListPick(listPick: any[], identifiant: string, property: string[]) {
    // Transforme une liste normale en listPick avec seulement id et property
    
    let res = [];
    Array.prototype.forEach.call(listPick, elem => {
      
      var elemRes = {id: "", text: ""};
      elemRes.id = elem[identifiant];
      
      // Création du text à afficher dans les options
      var elemText = "";
      Array.prototype.forEach.call(property, ((prop, index) => {
        if (index >= property.length - 1) {
          elemText += elem[prop];
        } else {
          elemText += elem[prop] + " ";
        }
      }));
      elemRes.text = elemText;
      

      res.push(elemRes);
    });

    return res;
  }

  returnPickId (id: number, identifiant: string, listeUntouched): any {
    // Recherche dans la liste de base l'id qui correspond
    let pickRes: any;
    listeUntouched.forEach(element => {
      if (element[identifiant] == id) {
        pickRes =  element;
      }
    });
    return pickRes;
  }
}
