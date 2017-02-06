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
var tiny_directive_1 = require('./tiny.directive');
var TinyModule = (function () {
    function TinyModule() {
    }
    TinyModule = __decorate([
        core_1.NgModule({
            declarations: [tiny_directive_1.TinyMceDirective],
            exports: [tiny_directive_1.TinyMceDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], TinyModule);
    return TinyModule;
}());
exports.TinyModule = TinyModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvZGlyZWN0aXZlcy90aW55Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBRXpDLCtCQUFpQyxrQkFBa0IsQ0FBQyxDQUFBO0FBTXBEO0lBQUE7SUFDQSxDQUFDO0lBTEQ7UUFBQyxlQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsQ0FBQyxpQ0FBZ0IsQ0FBQztZQUNoQyxPQUFPLEVBQUUsQ0FBQyxpQ0FBZ0IsQ0FBQztTQUM1QixDQUFDOztrQkFBQTtJQUVGLGlCQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSxrQkFBVSxhQUN0QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvZGlyZWN0aXZlcy90aW55Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBUaW55TWNlRGlyZWN0aXZlIH0gZnJvbSAnLi90aW55LmRpcmVjdGl2ZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1RpbnlNY2VEaXJlY3RpdmVdLFxyXG4gIGV4cG9ydHM6IFtUaW55TWNlRGlyZWN0aXZlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGlueU1vZHVsZSB7XHJcbn0iXX0=
