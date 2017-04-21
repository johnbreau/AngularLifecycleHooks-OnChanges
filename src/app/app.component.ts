import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  numberToChange = 90;
  objectToChange = {numberToChange: this.numberToChange};
  title = 'app works!';

  // This resets onlyt the binding so ngOnChanges is not triggered
  resetToDefaultValue(event){
    this.objectToChange.numberToChange = this.numberToChange;
  }

  // This reset the actual object in the parent so ngOnChanges is triggered in the child (child.component.ts)
  resetToNewReference(){
    this.objectToChange = {numberToChange: this.numberToChange};
  }

  // This sets a new "base" vaule in the Parent
  keepChildValue(childValue: number){
    this.numberToChange = childValue;
  }

}
