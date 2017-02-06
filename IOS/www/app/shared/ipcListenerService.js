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
var ipcListenerService = (function () {
    function ipcListenerService() {
        this.has_ipc = (typeof electron_1.ipcRenderer != 'undefined');
        if (this.has_ipc) {
            electron_1.ipcRenderer.on('asynchronous-reply', function (event, arg) {
                if (arg.operation) {
                    switch (arg.operation) {
                        case 'saveData-reply': {
                            break;
                        }
                        case 'cloneForUpdate-reply': {
                            break;
                        }
                        default: {
                            break;
                        }
                    }
                }
            });
        }
    }
    ipcListenerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ipcListenerService);
    return ipcListenerService;
}());
exports.ipcListenerService = ipcListenerService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvaXBjTGlzdGVuZXJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MseUJBQW9DLFVBQVUsQ0FBQyxDQUFBO0FBRy9DO0lBR0k7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsT0FBTyxzQkFBVyxJQUFJLFdBQVcsQ0FBQyxDQUFDO1FBRW5ELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2Ysc0JBQVcsQ0FBQyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsVUFBQyxLQUFVLEVBQUUsR0FBUTtnQkFFdEQsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ2hCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUVwQixLQUFLLGdCQUFnQixFQUFFLENBQUM7NEJBRXBCLEtBQUssQ0FBQzt3QkFDVixDQUFDO3dCQUNELEtBQUssc0JBQXNCLEVBQUMsQ0FBQzs0QkFFekIsS0FBSyxDQUFDO3dCQUNWLENBQUM7d0JBQ0QsU0FBUyxDQUFDOzRCQUNOLEtBQUssQ0FBQzt3QkFDVixDQUFDO29CQUNMLENBQUM7Z0JBQ0wsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNMLENBQUM7SUE1Qkw7UUFBQyxpQkFBVSxFQUFFOzswQkFBQTtJQTZCYix5QkFBQztBQUFELENBNUJBLEFBNEJDLElBQUE7QUE1QlksMEJBQWtCLHFCQTRCOUIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL2lwY0xpc3RlbmVyU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgcmVtb3RlLCBpcGNSZW5kZXJlciB9IGZyb20gJ2VsZWN0cm9uJzsgLy8gd2lsbCBoYXZlIHZhbGlkIGluc3RhbmNlIGluIGNhc2Ugb2YgZWxlY3Ryb24gYXBwIFxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgaXBjTGlzdGVuZXJTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgaGFzX2lwYzogYm9vbGVhbjsgICAvLyBSZW5kZXJlciBQcm9jZXNzIGF2YWlsYWJpbGl0eSB0byBjb21tdW5pY2F0ZSB3aXRoIEVsZWN0cm9uIEFwcCBNYWluIFByb2Nlc3NcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmhhc19pcGMgPSAodHlwZW9mIGlwY1JlbmRlcmVyICE9ICd1bmRlZmluZWQnKTtcclxuICAgICAgICAvLyBTZXQgbGlzdGVuZXJcclxuICAgICAgICBpZiAodGhpcy5oYXNfaXBjKSB7XHJcbiAgICAgICAgICAgIGlwY1JlbmRlcmVyLm9uKCdhc3luY2hyb25vdXMtcmVwbHknLCAoZXZlbnQ6IGFueSwgYXJnOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYXJnKTsgLy8gcHJpbnRzIFwicG9uZ1wiXHJcbiAgICAgICAgICAgICAgICBpZiAoYXJnLm9wZXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoYXJnLm9wZXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhY3Rpb25zIGFnYWluc3QgaXBjTWFpbiByZXBseSB3aGljaCBjYW4gYmUgaW52b2tlZCBmcm9tIGlwYyByZW5kZXJlciBwcm9jZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NhdmVEYXRhLXJlcGx5Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhhcmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2xvbmVGb3JVcGRhdGUtcmVwbHknOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYXJnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
