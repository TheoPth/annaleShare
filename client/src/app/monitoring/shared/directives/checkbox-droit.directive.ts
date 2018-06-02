import { Directive, HostBinding, Input, OnChanges } from '@angular/core';


@Directive({
  selector: '[appCheckboxDroit]'
})
export class CheckboxDroitDirective implements OnChanges {
  @HostBinding('innerHTML') html : string ;
  @HostBinding('style.color') color : string ;
  @Input('appCheckboxDroit') possedeDroit : boolean;

  ngOnChanges() {
    
    if (this.possedeDroit) {

      this.html = "radio_button_checked";
      this.color = "green";
    } else {
      this.html = "radio_button_unchecked";
      this.color = "red";
    }
  }

  constructor() { }

}
