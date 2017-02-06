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
var electron_1 = require('electron');
var ipcSenderService = (function () {
    function ipcSenderService() {
        this.has_ipc = (typeof electron_1.ipcRenderer != 'undefined');
    }
    ipcSenderService.prototype.ipcAsyncSend = function (operation) {
        if (this.has_ipc) {
            electron_1.ipcRenderer.send('asynchronous-message', operation);
        }
        else {
            console.log("There isn't Electron main process.");
        }
        return;
    };
    ipcSenderService.prototype.ipcSyncSend = function (operation) {
        var ipcSyncResult;
        if (this.has_ipc) {
            ipcSyncResult = electron_1.ipcRenderer.sendSync('synchronous-message', operation);
        }
        else {
            console.log("There isn't Electron main process.");
            ipcSyncResult = {};
        }
        return ipcSyncResult;
    };
    ipcSenderService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ipcSenderService);
    return ipcSenderService;
}());
exports.ipcSenderService = ipcSenderService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvaXBjU2VuZGVyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHlCQUFvQyxVQUFVLENBQUMsQ0FBQTtBQUcvQztJQUdJO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLE9BQU8sc0JBQVcsSUFBSSxXQUFXLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsdUNBQVksR0FBWixVQUFhLFNBQWM7UUFDdkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDZixzQkFBVyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN4RCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7UUFDdEQsQ0FBQztRQUNELE1BQU0sQ0FBQztJQUNYLENBQUM7SUFFRCxzQ0FBVyxHQUFYLFVBQVksU0FBYztRQUN0QixJQUFJLGFBQWEsQ0FBQztRQUNsQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNmLGFBQWEsR0FBRyxzQkFBVyxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMzRSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7WUFDbEQsYUFBYSxHQUFHLEVBQUUsQ0FBQTtRQUN0QixDQUFDO1FBQ0QsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUN6QixDQUFDO0lBMUJMO1FBQUMsaUJBQVUsRUFBRTs7d0JBQUE7SUEyQmIsdUJBQUM7QUFBRCxDQTFCQSxBQTBCQyxJQUFBO0FBMUJZLHdCQUFnQixtQkEwQjVCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9pcGNTZW5kZXJTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyByZW1vdGUsIGlwY1JlbmRlcmVyIH0gZnJvbSAnZWxlY3Ryb24nOyAvLyB3aWxsIGhhdmUgdmFsaWQgaW5zdGFuY2UgaW4gY2FzZSBvZiBlbGVjdHJvbiBhcHAgXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBpcGNTZW5kZXJTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgaGFzX2lwYzogYm9vbGVhbjsgICAvLyBSZW5kZXJlciBQcm9jZXNzIGF2YWlsYWJpbGl0eSB0byBjb21tdW5pY2F0ZSB3aXRoIEVsZWN0cm9uIEFwcCBNYWluIFByb2Nlc3NcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmhhc19pcGMgPSAodHlwZW9mIGlwY1JlbmRlcmVyICE9ICd1bmRlZmluZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpcGNBc3luY1NlbmQob3BlcmF0aW9uOiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5oYXNfaXBjKSB7XHJcbiAgICAgICAgICAgIGlwY1JlbmRlcmVyLnNlbmQoJ2FzeW5jaHJvbm91cy1tZXNzYWdlJywgb3BlcmF0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoZXJlIGlzbid0IEVsZWN0cm9uIG1haW4gcHJvY2Vzcy5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpcGNTeW5jU2VuZChvcGVyYXRpb246IGFueSkgeyAgICAgICAgXHJcbiAgICAgICAgbGV0IGlwY1N5bmNSZXN1bHQ7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzX2lwYykge1xyXG4gICAgICAgICAgICBpcGNTeW5jUmVzdWx0ID0gaXBjUmVuZGVyZXIuc2VuZFN5bmMoJ3N5bmNocm9ub3VzLW1lc3NhZ2UnLCBvcGVyYXRpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhlcmUgaXNuJ3QgRWxlY3Ryb24gbWFpbiBwcm9jZXNzLlwiKTtcclxuICAgICAgICAgICAgaXBjU3luY1Jlc3VsdCA9IHt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpcGNTeW5jUmVzdWx0O1xyXG4gICAgfVxyXG59Il19
