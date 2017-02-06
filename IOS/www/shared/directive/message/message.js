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
var MessageDirective = (function () {
    function MessageDirective(el, renderer) {
        renderer.setElementStyle(el.nativeElement, 'cursor', 'pointer');
        renderer.listen(el.nativeElement, 'click', function () {
            alert('Test');
        });
    }
    MessageDirective = __decorate([
        core_1.Directive({ selector: '[showMessage]' }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], MessageDirective);
    return MessageDirective;
}());
exports.MessageDirective = MessageDirective;
exports.AXIS_MESSAGE_DIRECTIVES = [MessageDirective];

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9kaXJlY3RpdmUvbWVzc2FnZS9tZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUQsZUFBZSxDQUFDLENBQUE7QUFHdkU7SUFFSSwwQkFBWSxFQUFjLEVBQUUsUUFBa0I7UUFDM0MsUUFBUSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNoRSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFO1lBQ3pDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFSTDtRQUFDLGdCQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLENBQUM7O3dCQUFBO0lBU3pDLHVCQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFSWSx3QkFBZ0IsbUJBUTVCLENBQUE7QUFFWSwrQkFBdUIsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMiLCJmaWxlIjoic2hhcmVkL2RpcmVjdGl2ZS9tZXNzYWdlL21lc3NhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4gXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tzaG93TWVzc2FnZV0nIH0pXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlRGlyZWN0aXZlIHtcclxuIFxyXG4gICAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcikge1xyXG4gICAgICAgcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKGVsLm5hdGl2ZUVsZW1lbnQsICdjdXJzb3InLCAncG9pbnRlcicpO1xyXG4gICAgICAgcmVuZGVyZXIubGlzdGVuKGVsLm5hdGl2ZUVsZW1lbnQsICdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgIGFsZXJ0KCdUZXN0Jyk7XHJcbiAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFYSVNfTUVTU0FHRV9ESVJFQ1RJVkVTID0gW01lc3NhZ2VEaXJlY3RpdmVdOyJdfQ==
