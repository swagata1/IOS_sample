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
var core_1 = require("@angular/core");
var PADDING = "000000";
var AppendSymbolDirective = (function () {
    function AppendSymbolDirective(elementRef) {
        this.elementRef = elementRef;
        this.el = this.elementRef.nativeElement;
        this.PREFIX = '';
        this.DECIMAL_SEPARATOR = ".";
        this.THOUSANDS_SEPARATOR = ",";
        this.SUFFIX = '%';
    }
    AppendSymbolDirective.prototype.ngOnInit = function () {
        this.el.value = this.transform(this.el.value, this.type);
    };
    AppendSymbolDirective.prototype.onKeyUp = function (value) {
        var transformedInput = value.replace(/[^0-9]/g, '');
        if (transformedInput !== value) {
            this.el.value = transformedInput;
        }
    };
    AppendSymbolDirective.prototype.onFocus = function (value) {
        this.el.type = "number";
        this.el.value = this.parse(value);
    };
    AppendSymbolDirective.prototype.onBlur = function (value) {
        this.el.type = "text";
        this.el.value = this.transform(value, this.type);
    };
    AppendSymbolDirective.prototype.transform = function (value, type, fractionSize) {
        if (fractionSize === void 0) { fractionSize = 0; }
        var _a = (value || "").toString()
            .split("."), integer = _a[0], _b = _a[1], fraction = _b === void 0 ? "" : _b;
        fraction = fractionSize > 0
            ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
            : "";
        integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, this.THOUSANDS_SEPARATOR);
        if (type == 'symbol' && value != "") {
            return this.PREFIX + integer + this.SUFFIX;
        }
        else {
            return this.PREFIX + integer;
        }
    };
    AppendSymbolDirective.prototype.parse = function (value, fractionSize) {
        if (fractionSize === void 0) { fractionSize = 0; }
        var _a = (value || "").replace(this.PREFIX, "")
            .replace(this.SUFFIX, "")
            .split(this.DECIMAL_SEPARATOR), integer = _a[0], _b = _a[1], fraction = _b === void 0 ? "" : _b;
        integer = integer.replace(new RegExp(this.THOUSANDS_SEPARATOR, "g"), "");
        fraction = parseInt(fraction, 10) > 0 && fractionSize > 0
            ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
            : "";
        return integer;
    };
    __decorate([
        core_1.Input('appendSymbol'), 
        __metadata('design:type', String)
    ], AppendSymbolDirective.prototype, "type", void 0);
    __decorate([
        core_1.HostListener("keyup", ["$event.target.value"]), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], AppendSymbolDirective.prototype, "onKeyUp", null);
    __decorate([
        core_1.HostListener("focus", ["$event.target.value"]), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], AppendSymbolDirective.prototype, "onFocus", null);
    __decorate([
        core_1.HostListener("blur", ["$event.target.value"]), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], AppendSymbolDirective.prototype, "onBlur", null);
    AppendSymbolDirective = __decorate([
        core_1.Directive({ selector: "[appendSymbol]" }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], AppendSymbolDirective);
    return AppendSymbolDirective;
}());
exports.AppendSymbolDirective = AppendSymbolDirective;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9kaXJlY3RpdmUvYXBwZW5kU3ltYm9sRGlyZWN0aXZlL2FwcGVuZFN5bWJvbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE0RixlQUFlLENBQUMsQ0FBQTtBQUM1RyxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUM7QUFHekI7SUFRRSwrQkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN4QyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxHQUFHLENBQUM7UUFDN0IsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEdBQUcsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUNwQixDQUFDO0lBSUQsd0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFHRCx1Q0FBTyxHQUFQLFVBQVEsS0FBSztRQUNYLElBQUksZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDcEQsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztRQUNwQyxDQUFDO0lBQ0gsQ0FBQztJQUdELHVDQUFPLEdBQVAsVUFBUSxLQUFLO1FBQ1gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUdELHNDQUFNLEdBQU4sVUFBTyxLQUFLO1FBQ1YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBR08seUNBQVMsR0FBakIsVUFBa0IsS0FBYSxFQUFFLElBQVksRUFBRSxZQUF3QjtRQUF4Qiw0QkFBd0IsR0FBeEIsZ0JBQXdCO1FBQ3JFLElBQUE7dUJBQ2EsRUFEUCxlQUFPLEVBQUUsVUFBYSxFQUFiLGtDQUFhLENBQ2Q7UUFFZCxRQUFRLEdBQUcsWUFBWSxHQUFHLENBQUM7Y0FDdkIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDO2NBQ3hFLEVBQUUsQ0FBQztRQUVQLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzdFLEVBQUUsQ0FBQSxDQUFDLElBQUksSUFBSSxRQUFRLElBQUksS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDN0MsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQy9CLENBQUM7SUFDSCxDQUFDO0lBR08scUNBQUssR0FBYixVQUFjLEtBQWEsRUFBRSxZQUF3QjtRQUF4Qiw0QkFBd0IsR0FBeEIsZ0JBQXdCO1FBQ25ELElBQUE7OzBDQUU0RSxFQUZ0RSxlQUFPLEVBQUUsVUFBYSxFQUFiLGtDQUFhLENBRWlEO1FBRTdFLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUV6RSxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksWUFBWSxHQUFHLENBQUM7Y0FDckQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDO2NBQ3hFLEVBQUUsQ0FBQztRQUVQLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQXhERDtRQUFDLFlBQUssQ0FBQyxjQUFjLENBQUM7O3VEQUFBO0lBTXRCO1FBQUMsbUJBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDOzs7O3dEQUFBO0lBUS9DO1FBQUMsbUJBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDOzs7O3dEQUFBO0lBTS9DO1FBQUMsbUJBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDOzs7O3VEQUFBO0lBckNoRDtRQUFDLGdCQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQzs7NkJBQUE7SUEyRTFDLDRCQUFDO0FBQUQsQ0ExRUEsQUEwRUMsSUFBQTtBQTFFWSw2QkFBcUIsd0JBMEVqQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9kaXJlY3RpdmUvYXBwZW5kU3ltYm9sRGlyZWN0aXZlL2FwcGVuZFN5bWJvbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiwgT25Jbml0LCBJbnB1dCwgUmVuZGVyZXIsIEFmdGVyVmlld0luaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5jb25zdCBQQURESU5HID0gXCIwMDAwMDBcIjtcclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogXCJbYXBwZW5kU3ltYm9sXVwiIH0pXHJcbmV4cG9ydCBjbGFzcyBBcHBlbmRTeW1ib2xEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBwcml2YXRlIGVsOiBhbnk7XHJcbiAgcHJpdmF0ZSBQUkVGSVg6IHN0cmluZztcclxuICBwcml2YXRlIERFQ0lNQUxfU0VQQVJBVE9SOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBUSE9VU0FORFNfU0VQQVJBVE9SOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBTVUZGSVg6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLmVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLlBSRUZJWCA9ICcnO1xyXG4gICAgdGhpcy5ERUNJTUFMX1NFUEFSQVRPUiA9IFwiLlwiO1xyXG4gICAgdGhpcy5USE9VU0FORFNfU0VQQVJBVE9SID0gXCIsXCI7XHJcbiAgICB0aGlzLlNVRkZJWCA9ICclJztcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnYXBwZW5kU3ltYm9sJykgdHlwZTogc3RyaW5nO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZWwudmFsdWUgPSB0aGlzLnRyYW5zZm9ybSh0aGlzLmVsLnZhbHVlLCB0aGlzLnR5cGUpO1xyXG4gIH1cclxuICBcclxuICBASG9zdExpc3RlbmVyKFwia2V5dXBcIiwgW1wiJGV2ZW50LnRhcmdldC52YWx1ZVwiXSlcclxuICBvbktleVVwKHZhbHVlKSB7XHJcbiAgICBsZXQgdHJhbnNmb3JtZWRJbnB1dCA9IHZhbHVlLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XHJcbiAgICBpZiAodHJhbnNmb3JtZWRJbnB1dCAhPT0gdmFsdWUpIHtcclxuICAgICAgIHRoaXMuZWwudmFsdWUgPSB0cmFuc2Zvcm1lZElucHV0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcihcImZvY3VzXCIsIFtcIiRldmVudC50YXJnZXQudmFsdWVcIl0pXHJcbiAgb25Gb2N1cyh2YWx1ZSkge1xyXG4gICAgdGhpcy5lbC50eXBlID0gXCJudW1iZXJcIjtcclxuICAgIHRoaXMuZWwudmFsdWUgPSB0aGlzLnBhcnNlKHZhbHVlKTsgLy8gb3Bvc3NpdGUgb2YgdHJhbnNmb3JtXHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKFwiYmx1clwiLCBbXCIkZXZlbnQudGFyZ2V0LnZhbHVlXCJdKVxyXG4gIG9uQmx1cih2YWx1ZSkge1xyXG4gICAgdGhpcy5lbC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICB0aGlzLmVsLnZhbHVlID0gdGhpcy50cmFuc2Zvcm0odmFsdWUsIHRoaXMudHlwZSk7XHJcbiAgfVxyXG5cclxuICAvLyBGdW5jdGlvbiB1c2VkIHRvIHRyYW5zZm9ybSB0aGUgdmFsdWUgb25CbHVyIGV2ZW50XHJcbiAgcHJpdmF0ZSB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgdHlwZTogc3RyaW5nLCBmcmFjdGlvblNpemU6IG51bWJlciA9IDApOiBzdHJpbmcge1xyXG4gICAgbGV0IFsgaW50ZWdlciwgZnJhY3Rpb24gPSBcIlwiIF0gPSAodmFsdWUgfHwgXCJcIikudG9TdHJpbmcoKVxyXG4gICAgICAuc3BsaXQoXCIuXCIpO1xyXG5cclxuICAgIGZyYWN0aW9uID0gZnJhY3Rpb25TaXplID4gMFxyXG4gICAgICA/IHRoaXMuREVDSU1BTF9TRVBBUkFUT1IgKyAoZnJhY3Rpb24gKyBQQURESU5HKS5zdWJzdHJpbmcoMCwgZnJhY3Rpb25TaXplKVxyXG4gICAgICA6IFwiXCI7XHJcblxyXG4gICAgaW50ZWdlciA9IGludGVnZXIucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgdGhpcy5USE9VU0FORFNfU0VQQVJBVE9SKTtcclxuICAgIGlmKHR5cGUgPT0gJ3N5bWJvbCcgJiYgdmFsdWUgIT0gXCJcIil7XHJcbiAgICAgIHJldHVybiB0aGlzLlBSRUZJWCArIGludGVnZXIgKyB0aGlzLlNVRkZJWDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLlBSRUZJWCArIGludGVnZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBGdW5jdGlvbiB1c2VkIHRvIHBhcnNlIHRoZSB2YWx1ZSBvbkZvY3VzIGV2ZW50IFxyXG4gIHByaXZhdGUgcGFyc2UodmFsdWU6IHN0cmluZywgZnJhY3Rpb25TaXplOiBudW1iZXIgPSAwKTogc3RyaW5nIHtcclxuICAgIGxldCBbIGludGVnZXIsIGZyYWN0aW9uID0gXCJcIiBdID0gKHZhbHVlIHx8IFwiXCIpLnJlcGxhY2UodGhpcy5QUkVGSVgsIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UodGhpcy5TVUZGSVgsIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KHRoaXMuREVDSU1BTF9TRVBBUkFUT1IpO1xyXG5cclxuICAgIGludGVnZXIgPSBpbnRlZ2VyLnJlcGxhY2UobmV3IFJlZ0V4cCh0aGlzLlRIT1VTQU5EU19TRVBBUkFUT1IsIFwiZ1wiKSwgXCJcIik7XHJcblxyXG4gICAgZnJhY3Rpb24gPSBwYXJzZUludChmcmFjdGlvbiwgMTApID4gMCAmJiBmcmFjdGlvblNpemUgPiAwXHJcbiAgICAgID8gdGhpcy5ERUNJTUFMX1NFUEFSQVRPUiArIChmcmFjdGlvbiArIFBBRERJTkcpLnN1YnN0cmluZygwLCBmcmFjdGlvblNpemUpXHJcbiAgICAgIDogXCJcIjtcclxuXHJcbiAgICByZXR1cm4gaW50ZWdlcjtcclxuICB9XHJcblxyXG59Il19
