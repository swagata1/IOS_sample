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
var FloorNonRackComponent = (function () {
    function FloorNonRackComponent() {
        this.valueChange = new core_1.EventEmitter();
    }
    FloorNonRackComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FloorNonRackComponent.prototype, "model", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FloorNonRackComponent.prototype, "valueChange", void 0);
    FloorNonRackComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'floor-non-rack',
            templateUrl: 'floor-non-rack.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FloorNonRackComponent);
    return FloorNonRackComponent;
}());
exports.FloorNonRackComponent = FloorNonRackComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oYXphcmRzL25ldy1oYXphcmQvaGF6YXJkcy1hZGQvaGF6YXJkLXR5cGVzL2Zsb29yLW5vbi1yYWNrL2Zsb29yLW5vbi1yYWNrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW1FLGVBQWUsQ0FBQyxDQUFBO0FBUW5GO0lBS0U7UUFFRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCx3Q0FBUSxHQUFSLGNBQWMsQ0FBQztJQVJmO1FBQUMsWUFBSyxFQUFFOzt3REFBQTtJQUNSO1FBQUMsYUFBTSxFQUFFOzs4REFBQTtJQVRYO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSwrQkFBK0I7U0FDN0MsQ0FBQzs7NkJBQUE7SUFhRiw0QkFBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBWFksNkJBQXFCLHdCQVdqQyxDQUFBIiwiZmlsZSI6ImFwcC9oYXphcmRzL25ldy1oYXphcmQvaGF6YXJkcy1hZGQvaGF6YXJkLXR5cGVzL2Zsb29yLW5vbi1yYWNrL2Zsb29yLW5vbi1yYWNrLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9ICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnZmxvb3Itbm9uLXJhY2snLFxyXG4gIHRlbXBsYXRlVXJsOiAnZmxvb3Itbm9uLXJhY2suY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRmxvb3JOb25SYWNrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0XHJcbntcclxuICBASW5wdXQoKSBtb2RlbDphbnk7XHJcbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlOkV2ZW50RW1pdHRlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoKVxyXG4gIHtcclxuICAgIHRoaXMudmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgfVxyXG4gXHJcbiAgbmdPbkluaXQoKSB7ICB9XHJcbn1cclxuIl19
