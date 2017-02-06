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
var http_1 = require('@angular/http');
var configuration_1 = require('../shared/configuration');
var LoginService = (function () {
    function LoginService(http, configuration) {
        this.http = http;
        this.configuration = configuration;
        this.configuration = configuration;
        this.loginUrl = configuration.server + 'prweb/PRRestService/GRASPAPI/v1/my-worklist?EMPLOYEE_ID=9301058&Language_CD=ENG&Request_Type_CD=PARSI';
    }
    LoginService.prototype.getLogInDetails = function () {
        return true;
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, configuration_1.Configuration])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sb2dpbi9sb2dpbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQXVELGVBQWUsQ0FBQyxDQUFBO0FBQ3ZFLDhCQUE4Qix5QkFBeUIsQ0FBQyxDQUFBO0FBR3hEO0lBR0ksc0JBQW9CLElBQVUsRUFBVSxhQUE0QjtRQUFoRCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDaEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsTUFBTSxHQUFHLHVHQUF1RyxDQUFDO0lBQ25KLENBQUM7SUFFRCxzQ0FBZSxHQUFmO1FBRUksTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBWkw7UUFBQyxpQkFBVSxFQUFFOztvQkFBQTtJQWFiLG1CQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFaWSxvQkFBWSxlQVl4QixDQUFBIiwiZmlsZSI6ImFwcC9sb2dpbi9sb2dpbi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vc2hhcmVkL2NvbmZpZ3VyYXRpb24nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgbG9naW5Vcmw6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbil7XHJcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcclxuICAgICAgICB0aGlzLmxvZ2luVXJsID0gY29uZmlndXJhdGlvbi5zZXJ2ZXIgKyAncHJ3ZWIvUFJSZXN0U2VydmljZS9HUkFTUEFQSS92MS9teS13b3JrbGlzdD9FTVBMT1lFRV9JRD05MzAxMDU4Jkxhbmd1YWdlX0NEPUVORyZSZXF1ZXN0X1R5cGVfQ0Q9UEFSU0knO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExvZ0luRGV0YWlscygpe1xyXG4gICAgICAgIC8vcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5sb2dpblVybCkubWFwKHJlcz0+IHJlcy5qc29uKCkpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59Il19
