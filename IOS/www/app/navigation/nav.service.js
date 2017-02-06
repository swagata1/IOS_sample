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
require('rxjs/add/operator/map');
var configuration_1 = require('../shared/configuration');
var NavService = (function () {
    function NavService(http, configuration) {
        this.http = http;
        this.configuration = configuration;
    }
    NavService.prototype.getUserProfile = function (checkFile) {
        return this.http.request('json/user-profile.json').map(function (res) { return res.json(); });
    };
    NavService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, configuration_1.Configuration])
    ], NavService);
    return NavService;
}());
exports.NavService = NavService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9uYXZpZ2F0aW9uL25hdi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLFFBQU8sdUJBQXVCLENBQUMsQ0FBQTtBQUUvQiw4QkFBOEIseUJBQXlCLENBQUMsQ0FBQTtBQUd4RDtJQUVJLG9CQUFvQixJQUFVLEVBQVUsYUFBNEI7UUFBaEQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBRXBFLENBQUM7SUFFRCxtQ0FBYyxHQUFkLFVBQWUsU0FBUztRQU9wQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFZLElBQUcsT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQWZMO1FBQUMsaUJBQVUsRUFBRTs7a0JBQUE7SUFnQmIsaUJBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZZLGtCQUFVLGFBZXRCLENBQUEiLCJmaWxlIjoiYXBwL25hdmlnYXRpb24vbmF2LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9zaGFyZWQvY29uZmlndXJhdGlvbic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOYXZTZXJ2aWNlIHtcclxuICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbikge1xyXG4gICAgXHQgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlclByb2ZpbGUoY2hlY2tGaWxlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjaGVja0ZpbGVcIiwgY2hlY2tGaWxlKTtcclxuICAgICAgICAvLyBpZihjaGVja0ZpbGUgJiYgIWNoZWNrRmlsZS5yZXN1bHQpe1xyXG4gICAgICAgIC8vIFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5jb25maWd1cmF0aW9uLnNlcnZlcisncHJ3ZWIvUFJSZXN0U2VydmljZS9HUkFTUEFQSS92MS91c2VyLXByb2ZpbGU/RU1QTE9ZRUVfSUQ9JyArIHRoaXMuY29uZmlndXJhdGlvbi5laWQpLm1hcCgocmVzOlJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcclxuICAgICAgICAvLyB9IGVsc2UgaWYoY2hlY2tGaWxlICYmIGNoZWNrRmlsZS5yZXN1bHQgJiYgdGhpcy5jb25maWd1cmF0aW9uLmRpclBhdGggJiYgdGhpcy5jb25maWd1cmF0aW9uLmRpclBhdGgucmVzdWx0KXtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KHRoaXMuY29uZmlndXJhdGlvbi5kaXJQYXRoLnJlc3VsdCsnL3VzZXItcHJvZmlsZS5qc29uJykubWFwKChyZXM6UmVzcG9uc2UpPT5yZXMuanNvbigpKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KCdqc29uL3VzZXItcHJvZmlsZS5qc29uJykubWFwKChyZXM6UmVzcG9uc2UpPT5yZXMuanNvbigpKTtcclxuICAgIH1cclxufSJdfQ==
