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
var AmmoniaRefrigerationComponent = (function () {
    function AmmoniaRefrigerationComponent() {
        this.valueChange = new core_1.EventEmitter();
    }
    AmmoniaRefrigerationComponent.prototype.ngOnInit = function () {
        this.model["OFFLN_HAZARD_NM"] = this.model["OFFLN_HAZARD_NM"] ? this.model["OFFLN_HAZARD_NM"] : "";
        this.model["OFFLN_AREA_SIZE"] = this.model["OFFLN_AREA_SIZE"] ? this.model["OFFLN_AREA_SIZE"] : 0;
        this.model["OFFLN_AMMONIA_QUANTITY"] = this.model["OFFLN_AMMONIA_QUANTITY"] ? this.model["OFFLN_AMMONIA_QUANTITY"] : 0;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AmmoniaRefrigerationComponent.prototype, "model", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], AmmoniaRefrigerationComponent.prototype, "valueChange", void 0);
    AmmoniaRefrigerationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ammonia-refrigeration',
            templateUrl: 'ammonia-refrigeration.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AmmoniaRefrigerationComponent);
    return AmmoniaRefrigerationComponent;
}());
exports.AmmoniaRefrigerationComponent = AmmoniaRefrigerationComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oYXphcmRzL25ldy1oYXphcmQvaGF6YXJkcy1hZGQvaGF6YXJkLXR5cGVzL2FtbW9uaWEtcmVmcmlnZXJhdGlvbi9hbW1vbmlhLXJlZnJpZ2VyYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBbUUsZUFBZSxDQUFDLENBQUE7QUFRbkY7SUFLRTtRQUVFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELGdEQUFRLEdBQVI7UUFFRSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDbkcsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xHLElBQUksQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6SCxDQUFDO0lBYkQ7UUFBQyxZQUFLLEVBQUU7O2dFQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7O3NFQUFBO0lBVFg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsV0FBVyxFQUFFLHNDQUFzQztTQUNwRCxDQUFDOztxQ0FBQTtJQWtCRixvQ0FBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlkscUNBQTZCLGdDQWdCekMsQ0FBQSIsImZpbGUiOiJhcHAvaGF6YXJkcy9uZXctaGF6YXJkL2hhemFyZHMtYWRkL2hhemFyZC10eXBlcy9hbW1vbmlhLXJlZnJpZ2VyYXRpb24vYW1tb25pYS1yZWZyaWdlcmF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9ICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnYW1tb25pYS1yZWZyaWdlcmF0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJ2FtbW9uaWEtcmVmcmlnZXJhdGlvbi5jb21wb25lbnQuaHRtbCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBbW1vbmlhUmVmcmlnZXJhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdFxyXG57ICBcclxuICBASW5wdXQoKSBtb2RlbDphbnk7XHJcbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlOkV2ZW50RW1pdHRlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoKVxyXG4gIHtcclxuICAgIHRoaXMudmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgfVxyXG4gXHJcbiAgbmdPbkluaXQoKVxyXG4gIHsgIFxyXG4gICAgdGhpcy5tb2RlbFtcIk9GRkxOX0hBWkFSRF9OTVwiXSA9IHRoaXMubW9kZWxbXCJPRkZMTl9IQVpBUkRfTk1cIl0gPyB0aGlzLm1vZGVsW1wiT0ZGTE5fSEFaQVJEX05NXCJdIDogXCJcIjtcclxuICAgIHRoaXMubW9kZWxbXCJPRkZMTl9BUkVBX1NJWkVcIl0gPSB0aGlzLm1vZGVsW1wiT0ZGTE5fQVJFQV9TSVpFXCJdID8gdGhpcy5tb2RlbFtcIk9GRkxOX0FSRUFfU0laRVwiXSA6IDA7XHJcbiAgICB0aGlzLm1vZGVsW1wiT0ZGTE5fQU1NT05JQV9RVUFOVElUWVwiXSA9IHRoaXMubW9kZWxbXCJPRkZMTl9BTU1PTklBX1FVQU5USVRZXCJdID8gdGhpcy5tb2RlbFtcIk9GRkxOX0FNTU9OSUFfUVVBTlRJVFlcIl0gOiAwO1xyXG4gIH1cclxufVxyXG4iXX0=
