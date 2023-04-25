import { Component,TemplateRef } from '@angular/core';
import { Input } from '@angular/core';
  @Component({
    selector: 'app-page-list',
        templateUrl: '<ng-content></ng-content>'

  })
  class ContentComponent{

    @Input() temRef:TemplateRef<any>;
  }
