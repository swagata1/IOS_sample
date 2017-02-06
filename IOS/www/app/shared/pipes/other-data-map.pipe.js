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
var OtherDataMapPipe = (function () {
    function OtherDataMapPipe() {
    }
    OtherDataMapPipe.prototype.transform = function (value, obj) {
        if (obj) {
            for (var i = 0; i < obj.length; i++) {
                if (obj[i].Code == value) {
                    return obj[i].Description;
                }
            }
        }
    };
    OtherDataMapPipe = __decorate([
        core_1.Pipe({ name: 'otherDataMap' }), 
        __metadata('design:paramtypes', [])
    ], OtherDataMapPipe);
    return OtherDataMapPipe;
}());
exports.OtherDataMapPipe = OtherDataMapPipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcGlwZXMvb3RoZXItZGF0YS1tYXAucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW9DLGVBQWUsQ0FBQyxDQUFBO0FBR3BEO0lBQUE7SUFVQSxDQUFDO0lBVEMsb0NBQVMsR0FBVCxVQUFVLEtBQWEsRUFBRSxHQUFHO1FBQzFCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDUixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDcEMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUN6QixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztnQkFDNUIsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQVZIO1FBQUMsV0FBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxDQUFDOzt3QkFBQTtJQVcvQix1QkFBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBVlksd0JBQWdCLG1CQVU1QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvcGlwZXMvb3RoZXItZGF0YS1tYXAucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ290aGVyRGF0YU1hcCcgfSlcclxuZXhwb3J0IGNsYXNzIE90aGVyRGF0YU1hcFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgb2JqKSB7XHJcbiAgICBpZiAob2JqKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKG9ialtpXS5Db2RlID09IHZhbHVlKSB7XHJcbiAgICAgICAgICByZXR1cm4gb2JqW2ldLkRlc2NyaXB0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSJdfQ==
