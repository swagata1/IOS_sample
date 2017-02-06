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
var router_1 = require('@angular/router');


var configuration_1 = require('../shared/configuration');
var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    
    HomeComponent.prototype.receiveNotification = function () {
   	   console.log('***** Notification Received..');
       alert('Notification Received');
       
   };
    HomeComponent.prototype.gotoDashboard = function () {
        console.log('hi');
        this.router.navigate(['/dashboard']);
    };
    
  
    
    
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'axis-home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css'],
            providers: [configuration_1.Configuration]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQTZDLGlCQUFpQixDQUFDLENBQUE7QUFFL0QsOEJBQThCLHlCQUF5QixDQUFDLENBQUE7QUFVeEQ7SUFHRSx1QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFHbEMsQ0FBQztJQUVELHFDQUFhLEdBQWI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtJQUVBLENBQUM7SUF0Qkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSxxQkFBcUI7WUFDbEMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7WUFDakMsU0FBUyxFQUFFLENBQUMsNkJBQWEsQ0FBQztTQUMzQixDQUFDOztxQkFBQTtJQWtCRixvQkFBQztBQUFELENBakJBLEFBaUJDLElBQUE7QUFqQlkscUJBQWEsZ0JBaUJ6QixDQUFBIiwiZmlsZSI6ImFwcC9ob21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgYW5haXIgb24gOS8xNy8xNi5cclxuICovXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL3NoYXJlZC9jb25maWd1cmF0aW9uJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnYXhpcy1ob21lJyxcclxuICB0ZW1wbGF0ZVVybDogJ2hvbWUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydob21lLmNvbXBvbmVudC5jc3MnXSxcclxuICBwcm92aWRlcnM6IFtDb25maWd1cmF0aW9uXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiBcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgLy8gICBjb25zdCBzdG9yYWdlID0gcmVxdWlyZSgnZWxlY3Ryb24tc3RvcmFnZScpOyBcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgZ290b0Rhc2hib2FyZCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdoaScpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZGFzaGJvYXJkJ10pO1xyXG4gIH1cclxuICBcclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vdGhpcy5jY3Muc2V0TG9nZ2VkKHRoaXMuY29tbSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
