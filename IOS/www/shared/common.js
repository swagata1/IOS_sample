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
var NgTranscludeDirective = (function () {
    function NgTranscludeDirective(_viewRef) {
        this._viewRef = _viewRef;
        this.viewRef = _viewRef;
    }
    Object.defineProperty(NgTranscludeDirective.prototype, "ngTransclude", {
        get: function () {
            return this._ngTransclude;
        },
        set: function (templateRef) {
            this._ngTransclude = templateRef;
            if (templateRef) {
                this.viewRef.createEmbeddedView(templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', core_1.TemplateRef), 
        __metadata('design:paramtypes', [core_1.TemplateRef])
    ], NgTranscludeDirective.prototype, "ngTransclude", null);
    NgTranscludeDirective = __decorate([
        core_1.Directive({
            selector: '[ngTransclude]'
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef])
    ], NgTranscludeDirective);
    return NgTranscludeDirective;
}());
exports.NgTranscludeDirective = NgTranscludeDirective;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUVPLGVBQWUsQ0FBQyxDQUFBO0FBU3ZCO0lBaUJFLCtCQUEyQixRQUF5QjtRQUF6QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUNsRCxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztJQUMxQixDQUFDO0lBYkQsc0JBQVcsK0NBQVk7YUFPdkI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM1QixDQUFDO2FBVEQsVUFBd0IsV0FBNEI7WUFDbEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUM7WUFDakMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMvQyxDQUFDO1FBQ0gsQ0FBQzs7O09BQUE7SUFORDtRQUFDLFlBQUssRUFBRTs7OzZEQUFBO0lBUlY7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtTQUMzQixDQUFDOzs2QkFBQTtJQXFCRiw0QkFBQztBQUFELENBcEJBLEFBb0JDLElBQUE7QUFwQlksNkJBQXFCLHdCQW9CakMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLZXlBdHRyaWJ1dGUge1xyXG4gIFtrZXk6c3RyaW5nXTphbnk7XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW25nVHJhbnNjbHVkZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ1RyYW5zY2x1ZGVEaXJlY3RpdmUge1xyXG4gIHB1YmxpYyB2aWV3UmVmOlZpZXdDb250YWluZXJSZWY7XHJcblxyXG4gIHByaXZhdGUgX25nVHJhbnNjbHVkZTpUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgbmdUcmFuc2NsdWRlKHRlbXBsYXRlUmVmOlRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgIHRoaXMuX25nVHJhbnNjbHVkZSA9IHRlbXBsYXRlUmVmO1xyXG4gICAgaWYgKHRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMudmlld1JlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGVSZWYpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBuZ1RyYW5zY2x1ZGUoKTpUZW1wbGF0ZVJlZjxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9uZ1RyYW5zY2x1ZGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlld1JlZjpWaWV3Q29udGFpbmVyUmVmKSB7XHJcbiAgICB0aGlzLnZpZXdSZWYgPSBfdmlld1JlZjtcclxuICB9XHJcbn1cclxuIl19
