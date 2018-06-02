import { Directive, HostBinding, Input, OnChanges } from '@angular/core';


@Directive({
  selector: '[appPossedeDroit]'
})
export class PossedeDroitDirective implements OnChanges {
  @HostBinding('innerHTML') html : string ;
  @HostBinding('style.color') color : string ;
  @Input('appPossedeDroit') possedeDroit : boolean;

  ngOnChanges() {
    
    if (this.possedeDroit) {

      this.html = "done";
      this.color = "green";
    } else {
      this.html = "close";
      this.color = "red";
    }
  }

  constructor() { }

}
