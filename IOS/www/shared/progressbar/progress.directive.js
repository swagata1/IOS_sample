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
var progressConfig = {
    animate: true,
    max: 100
};
var ProgressDirective = (function () {
    function ProgressDirective() {
        this.addClass = true;
        this.bars = [];
    }
    Object.defineProperty(ProgressDirective.prototype, "max", {
        get: function () {
            return this._max;
        },
        set: function (v) {
            this._max = v;
            this.bars.forEach(function (bar) {
                bar.recalculatePercentage();
            });
        },
        enumerable: true,
        configurable: true
    });
    ProgressDirective.prototype.ngOnInit = function () {
        this.animate = this.animate !== false;
        this.max = typeof this.max === 'number' ? this.max : progressConfig.max;
    };
    ProgressDirective.prototype.addBar = function (bar) {
        if (!this.animate) {
            bar.transition = 'none';
        }
        this.bars.push(bar);
    };
    ProgressDirective.prototype.removeBar = function (bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ProgressDirective.prototype, "animate", void 0);
    __decorate([
        core_1.HostBinding('attr.max'),
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ProgressDirective.prototype, "max", null);
    __decorate([
        core_1.HostBinding('class.isc-progress'), 
        __metadata('design:type', Boolean)
    ], ProgressDirective.prototype, "addClass", void 0);
    ProgressDirective = __decorate([
        core_1.Directive({ selector: 'bs-progress, [isc-progress]' }), 
        __metadata('design:paramtypes', [])
    ], ProgressDirective);
    return ProgressDirective;
}());
exports.ProgressDirective = ProgressDirective;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9wcm9ncmVzc2Jhci9wcm9ncmVzcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFzRCxlQUFlLENBQUMsQ0FBQTtBQUl0RSxJQUFNLGNBQWMsR0FBRztJQUNyQixPQUFPLEVBQUUsSUFBSTtJQUNiLEdBQUcsRUFBRSxHQUFHO0NBQ1QsQ0FBQztBQU9GO0lBQUE7UUFTNEMsYUFBUSxHQUFXLElBQUksQ0FBQztRQVMzRCxTQUFJLEdBQWMsRUFBRSxDQUFDO0lBbUI5QixDQUFDO0lBaENDLHNCQUFXLGtDQUFHO2FBQWQ7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuQixDQUFDO2FBSUQsVUFBZSxDQUFRO1lBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFnQjtnQkFDakMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDOzs7T0FUQTtJQWVNLG9DQUFRLEdBQWY7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxJQUFJLENBQUMsR0FBRyxLQUFLLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUM7SUFDMUUsQ0FBQztJQUVNLGtDQUFNLEdBQWIsVUFBYyxHQUFnQjtRQUM1QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQzFCLENBQUM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRU0scUNBQVMsR0FBaEIsVUFBaUIsR0FBZ0I7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQW5DRDtRQUFDLFlBQUssRUFBRTs7c0RBQUE7SUFFUjtRQUFDLGtCQUFXLENBQUMsVUFBVSxDQUFDO1FBQ3ZCLFlBQUssRUFBRTs7Z0RBQUE7SUFLUjtRQUFDLGtCQUFXLENBQUMsb0JBQW9CLENBQUM7O3VEQUFBO0lBWHBDO1FBQUMsZ0JBQVMsQ0FBQyxFQUFDLFFBQVEsRUFBRSw2QkFBNkIsRUFBQyxDQUFDOzt5QkFBQTtJQXVDckQsd0JBQUM7QUFBRCxDQXJDQSxBQXFDQyxJQUFBO0FBckNZLHlCQUFpQixvQkFxQzdCLENBQUEiLCJmaWxlIjoic2hhcmVkL3Byb2dyZXNzYmFyL3Byb2dyZXNzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEJhckNvbXBvbmVudCB9IGZyb20gJy4vYmFyLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBwcm9ncmVzc0NvbmZpZyA9IHtcclxuICBhbmltYXRlOiB0cnVlLFxyXG4gIG1heDogMTAwXHJcbn07XHJcblxyXG4vLyB0b2RvOiBwcm9ncmVzcyBlbGVtZW50IGNvbmZsaWN0IHdpdGggYm9vdHN0cmFwLmNzc1xyXG4vLyB0b2RvOiBuZWVkIGhhY2s6IHJlcGxhY2UgaG9zdCBlbGVtZW50IHdpdGggZGl2XHJcbi8qIHRzbGludDpkaXNhYmxlICovXHJcbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnYnMtcHJvZ3Jlc3MsIFtpc2MtcHJvZ3Jlc3NdJ30pXHJcbi8qIHRzbGludDplbmFibGUgKi9cclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBwdWJsaWMgYW5pbWF0ZTpib29sZWFuO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIubWF4JylcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBnZXQgbWF4KCk6bnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9tYXg7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlzYy1wcm9ncmVzcycpIHB1YmxpYyBhZGRDbGFzczpib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgcHVibGljIHNldCBtYXgodjpudW1iZXIpIHtcclxuICAgIHRoaXMuX21heCA9IHY7XHJcbiAgICB0aGlzLmJhcnMuZm9yRWFjaCgoYmFyOkJhckNvbXBvbmVudCkgPT4ge1xyXG4gICAgICBiYXIucmVjYWxjdWxhdGVQZXJjZW50YWdlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBiYXJzOkFycmF5PGFueT4gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBfbWF4Om51bWJlcjtcclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCk6dm9pZCB7XHJcbiAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUgIT09IGZhbHNlO1xyXG4gICAgdGhpcy5tYXggPSB0eXBlb2YgdGhpcy5tYXggPT09ICdudW1iZXInID8gdGhpcy5tYXggOiBwcm9ncmVzc0NvbmZpZy5tYXg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkQmFyKGJhcjpCYXJDb21wb25lbnQpOnZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmFuaW1hdGUpIHtcclxuICAgICAgYmFyLnRyYW5zaXRpb24gPSAnbm9uZSc7XHJcbiAgICB9XHJcbiAgICB0aGlzLmJhcnMucHVzaChiYXIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZUJhcihiYXI6QmFyQ29tcG9uZW50KTp2b2lkIHtcclxuICAgIHRoaXMuYmFycy5zcGxpY2UodGhpcy5iYXJzLmluZGV4T2YoYmFyKSwgMSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
