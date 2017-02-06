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
var ipcSenderService_1 = require('./../shared/ipcSenderService');
var Configuration = (function () {
    function Configuration(ipcSS) {
        this.ipcSS = ipcSS;
        this.server = "https://tuchwsmw0301.r1-core.r1.aig.net:20000/";
        this.buildVersion = 'V0.13';
        this.eid = '9301065';
        this.upstreamDirName = 'upstream';
        var ipcOperation = {
            "doAction": "getContentDirPath"
        };
        this.dirPath = this.ipcSS.ipcSyncSend(ipcOperation);
    }
    Configuration = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [ipcSenderService_1.ipcSenderService])
    ], Configuration);
    return Configuration;
}());
exports.Configuration = Configuration;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLGlDQUFpQyw4QkFBOEIsQ0FBQyxDQUFBO0FBR2hFO0lBUUksdUJBQW9CLEtBQXVCO1FBQXZCLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBTnBDLFdBQU0sR0FBVyxnREFBZ0QsQ0FBQztRQUVsRSxpQkFBWSxHQUFXLE9BQU8sQ0FBQztRQUMvQixRQUFHLEdBQVcsU0FBUyxDQUFDO1FBQ3hCLG9CQUFlLEdBQVcsVUFBVSxDQUFDO1FBR3hDLElBQUksWUFBWSxHQUFHO1lBQ2YsVUFBVSxFQUFFLG1CQUFtQjtTQUNsQyxDQUFBO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBZEw7UUFBQyxpQkFBVSxFQUFFOztxQkFBQTtJQWViLG9CQUFDO0FBQUQsQ0FkQSxBQWNDLElBQUE7QUFkWSxxQkFBYSxnQkFjekIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL2NvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlwY1NlbmRlclNlcnZpY2UgfSBmcm9tICcuLy4uL3NoYXJlZC9pcGNTZW5kZXJTZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb24ge1xyXG4gICAgLy9wdWJsaWMgc2VydmVyOiBzdHJpbmcgPSBcImh0dHBzOi8vZHVjaHdzbXcwMTAxLnIxLWNvcmUucjEuYWlnLm5ldDo1NTU4MC9cIjsgICAgIC8vIERFViBVUkxcclxuICAgIHB1YmxpYyBzZXJ2ZXI6IHN0cmluZyA9IFwiaHR0cHM6Ly90dWNod3NtdzAzMDEucjEtY29yZS5yMS5haWcubmV0OjIwMDAwL1wiOyAgICAgICAvLyBRQSBVUkxcclxuICAgIHB1YmxpYyBkaXJQYXRoOiBhbnk7XHJcbiAgICBwdWJsaWMgYnVpbGRWZXJzaW9uOiBzdHJpbmcgPSAnVjAuMTMnO1xyXG4gICAgcHVibGljIGVpZDogc3RyaW5nID0gJzkzMDEwNjUnO1xyXG4gICAgcHVibGljIHVwc3RyZWFtRGlyTmFtZTogc3RyaW5nID0gJ3Vwc3RyZWFtJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGlwY1NTOiBpcGNTZW5kZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgbGV0IGlwY09wZXJhdGlvbiA9IHtcclxuICAgICAgICAgICAgXCJkb0FjdGlvblwiOiBcImdldENvbnRlbnREaXJQYXRoXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kaXJQYXRoID0gdGhpcy5pcGNTUy5pcGNTeW5jU2VuZChpcGNPcGVyYXRpb24pO1xyXG4gICAgfVxyXG59Il19
