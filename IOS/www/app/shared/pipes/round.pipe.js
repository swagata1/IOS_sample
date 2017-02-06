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
var RoundPipe = (function () {
    function RoundPipe() {
    }
    RoundPipe.prototype.transform = function (value) {
        return Math.round(value);
    };
    RoundPipe = __decorate([
        core_1.Pipe({ name: 'round' }), 
        __metadata('design:paramtypes', [])
    ], RoundPipe);
    return RoundPipe;
}());
exports.RoundPipe = RoundPipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcGlwZXMvcm91bmQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW9DLGVBQWUsQ0FBQyxDQUFBO0FBR3BEO0lBQUE7SUFJQSxDQUFDO0lBSEMsNkJBQVMsR0FBVCxVQUFXLEtBQVk7UUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUpIO1FBQUMsV0FBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQyxDQUFDOztpQkFBQTtJQUt0QixnQkFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBSlksaUJBQVMsWUFJckIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3BpcGVzL3JvdW5kLnBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7bmFtZTogJ3JvdW5kJ30pXHJcbmV4cG9ydCBjbGFzcyBSb3VuZFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0gKHZhbHVlOm51bWJlcil7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSk7XHJcbiAgfVxyXG59Il19
