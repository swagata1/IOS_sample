"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ProgressbarComponent = (function () {
    function ProgressbarComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ProgressbarComponent.prototype, "animate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ProgressbarComponent.prototype, "max", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ProgressbarComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ProgressbarComponent.prototype, "value", void 0);
    ProgressbarComponent = __decorate([
        core_1.Component({
            selector: 'isc-progressbar',
            template: "\n    <div class=\"isc-progress-bar-xs\">\n      <div isc-progress [animate]=\"animate\" [max]=\"max\">\n        <bar [type]=\"type\" [value]=\"value\">\n            <ng-content></ng-content>\n        </bar>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ProgressbarComponent);
    return ProgressbarComponent;
}());
exports.ProgressbarComponent = ProgressbarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFpQyxlQUFlLENBQUMsQ0FBQTtBQWNqRDtJQUFBO0lBS0EsQ0FBQztJQUpDO1FBQUMsWUFBSyxFQUFFOzt5REFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOztxREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOztzREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzt1REFBQTtJQWhCVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSwrT0FRVDtTQUNGLENBQUM7OzRCQUFBO0lBTUYsMkJBQUM7QUFBRCxDQUxBLEFBS0MsSUFBQTtBQUxZLDRCQUFvQix1QkFLaEMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdpc2MtcHJvZ3Jlc3NiYXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiaXNjLXByb2dyZXNzLWJhci14c1wiPlxyXG4gICAgICA8ZGl2IGlzYy1wcm9ncmVzcyBbYW5pbWF0ZV09XCJhbmltYXRlXCIgW21heF09XCJtYXhcIj5cclxuICAgICAgICA8YmFyIFt0eXBlXT1cInR5cGVcIiBbdmFsdWVdPVwidmFsdWVcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICAgIDwvYmFyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzYmFyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBwdWJsaWMgYW5pbWF0ZTpib29sZWFuO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBtYXg6bnVtYmVyO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB0eXBlOnN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgdmFsdWU6bnVtYmVyO1xyXG59XHJcbiJdfQ==
