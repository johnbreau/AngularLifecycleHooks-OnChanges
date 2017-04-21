import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges {
  @Input() valueToChange: any;
  @Output() resetValueAtParent = new EventEmitter();
  @Output() resetReferenceOnParent = new EventEmitter();
  @Output() parentValueChanged = new EventEmitter();

  ngOnChanges(changes: SimpleChanges){
    console.log(JSON.stringify(changes));
  }

  increment(){
    this.valueToChange.numberToChange += 1;
  }

  // This resets only the binding so ngOnChanges is not triggered
  resetToParentValue(){
    this.resetValueAtParent.emit();
  }

  // This reset the actual object in the parent so ngOnChanges is triggered.
  resetParentReference(){
    this.resetReferenceOnParent.emit();
  }

  // This emits a new "base" vaule to be set in the Parent
  saveValueToParent(){
    this.parentValueChanged.emit(this.valueToChange.numberToChange);
  }
}
