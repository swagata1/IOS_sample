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
var tab_directive_1 = require('./tab.directive');
var TabHeadingDirective = (function () {
    function TabHeadingDirective(templateRef, tab) {
        tab.headingRef = templateRef;
    }
    TabHeadingDirective = __decorate([
        core_1.Directive({ selector: '[tabHeading]' }), 
        __metadata('design:paramtypes', [core_1.TemplateRef, tab_directive_1.TabDirective])
    ], TabHeadingDirective);
    return TabHeadingDirective;
}());
exports.TabHeadingDirective = TabHeadingDirective;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC90YWJzL3RhYi1oZWFkaW5nLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXVDLGVBQWUsQ0FBQyxDQUFBO0FBRXZELDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRy9DO0lBR0UsNkJBQW1CLFdBQTRCLEVBQUUsR0FBZ0I7UUFDL0QsR0FBRyxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUM7SUFDL0IsQ0FBQztJQU5IO1FBQUMsZ0JBQVMsQ0FBQyxFQUFDLFFBQVEsRUFBRSxjQUFjLEVBQUMsQ0FBQzs7MkJBQUE7SUFPdEMsMEJBQUM7QUFBRCxDQU5BLEFBTUMsSUFBQTtBQU5ZLDJCQUFtQixzQkFNL0IsQ0FBQSIsImZpbGUiOiJzaGFyZWQvdGFicy90YWItaGVhZGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBUYWJEaXJlY3RpdmUgfSBmcm9tICcuL3RhYi5kaXJlY3RpdmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbdGFiSGVhZGluZ10nfSlcclxuZXhwb3J0IGNsYXNzIFRhYkhlYWRpbmdEaXJlY3RpdmUge1xyXG4gIHB1YmxpYyB0ZW1wbGF0ZVJlZjpUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IodGVtcGxhdGVSZWY6VGVtcGxhdGVSZWY8YW55PiwgdGFiOlRhYkRpcmVjdGl2ZSkge1xyXG4gICAgdGFiLmhlYWRpbmdSZWYgPSB0ZW1wbGF0ZVJlZjtcclxuICB9XHJcbn1cclxuIl19
