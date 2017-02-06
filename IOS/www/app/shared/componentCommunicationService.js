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
var Subject_1 = require('rxjs/Subject');
var ComponentCommunicationService = (function () {
    function ComponentCommunicationService() {
        this.subject = new Subject_1.Subject();
        this.workList = new Subject_1.Subject();
        this.selectedAcc = new Subject_1.Subject();
        this.passFlagValue = new Subject_1.Subject();
        this.saveToFile = new Subject_1.Subject();
        this.eventSubject = new Subject_1.Subject();
        this.summaryDataObj = new Subject_1.Subject();
        this.riskImprovementsDataObj = new Subject_1.Subject();
        this.riTypesDataObj = new Subject_1.Subject();
        this.natcatLEDataObj = new Subject_1.Subject();
        this.surgeDataObj = new Subject_1.Subject();
        this.natcatSurgeLEDataObj = new Subject_1.Subject();
        this.eqDataObj = new Subject_1.Subject();
        this.windDataObj = new Subject_1.Subject();
        this.floodDataObj = new Subject_1.Subject();
        this.hazardAddDataObj = new Subject_1.Subject();
        this.hazardsDataObj = new Subject_1.Subject();
    }
    ComponentCommunicationService.prototype.setLogged = function (comm) {
        this.comm = comm;
        this.subject.next(comm);
    };
    ComponentCommunicationService.prototype.getLogged = function () {
        return this.subject.asObservable();
    };
    ComponentCommunicationService.prototype.setObject = function (obj) {
        this.obj = obj;
        this.workList.next(this.obj);
    };
    ComponentCommunicationService.prototype.getObject = function () {
        return this.workList.asObservable();
    };
    ComponentCommunicationService.prototype.setSelectedAcc = function (acc) {
        this.acc = acc;
        this.selectedAcc.next(this.acc);
    };
    ComponentCommunicationService.prototype.getSelectedAcc = function () {
        return this.selectedAcc.asObservable();
    };
    ComponentCommunicationService.prototype.setEvent = function (event) {
        this.event = event;
        this.eventSubject.next(this.event);
    };
    ComponentCommunicationService.prototype.getEvent = function () {
        return this.eventSubject.asObservable();
    };
    ComponentCommunicationService.prototype.setFlagStatus = function (flagStatus) {
        this.flagStatus = flagStatus;
        this.passFlagValue.next(this.flagStatus);
    };
    ComponentCommunicationService.prototype.getFlagStatus = function () {
        return this.passFlagValue.asObservable();
    };
    ComponentCommunicationService.prototype.setSaveToFileObj = function (saveData) {
        this.saveData = saveData;
        this.saveToFile.next(this.saveData);
    };
    ComponentCommunicationService.prototype.getSaveToFileObj = function () {
        return this.saveToFile.asObservable();
    };
    ComponentCommunicationService.prototype.setSummaryData = function (data) {
        this.summaryData = data;
        this.summaryDataObj.next(this.summaryData);
    };
    ComponentCommunicationService.prototype.setFloodData = function (data) {
        this.floodData = data;
        this.floodDataObj.next(this.floodData);
    };
    ComponentCommunicationService.prototype.getFloodData = function () {
        return this.floodDataObj.asObservable();
    };
    ComponentCommunicationService.prototype.getSummaryData = function () {
        return this.summaryDataObj.asObservable();
    };
    ComponentCommunicationService.prototype.setRiskImprovementsData = function (data) {
        this.riskImprovementsData = data;
        this.riskImprovementsDataObj.next(this.riskImprovementsData);
    };
    ComponentCommunicationService.prototype.getRiskImprovementsData = function () {
        return this.riskImprovementsDataObj.asObservable();
    };
    ComponentCommunicationService.prototype.getRiskImprovementsUpdatedData = function () {
        return this.riskImprovementsData;
    };
    ComponentCommunicationService.prototype.setRITypesData = function (data) {
        this.riTypesData = data;
        this.riTypesDataObj.next(this.riTypesData);
    };
    ComponentCommunicationService.prototype.getRITypesData = function () {
        return this.riTypesDataObj.asObservable();
    };
    ComponentCommunicationService.prototype.setNatcatTabIndex = function (data) {
        this.NatcatTabIndex = data;
    };
    ComponentCommunicationService.prototype.getNatcatTabIndex = function () {
        return this.NatcatTabIndex;
    };
    ComponentCommunicationService.prototype.setHazardsTabIndex = function (data) {
        this.HazardsTabIndex = data;
    };
    ComponentCommunicationService.prototype.getHazardsTabIndex = function () {
        return this.HazardsTabIndex;
    };
    ComponentCommunicationService.prototype.setRedundantPowerUtilities = function (data) {
        this.RedundantPowerUtilities = data;
    };
    ComponentCommunicationService.prototype.getRedundantPowerUtilities = function () {
        return this.RedundantPowerUtilities;
    };
    ComponentCommunicationService.prototype.setNATCATLEData = function (data) {
        this.natcatLEData = data;
        this.natcatLEDataObj.next(this.natcatLEData);
    };
    ComponentCommunicationService.prototype.getNATCATLEData = function () {
        return this.natcatLEDataObj.asObservable();
    };
    ComponentCommunicationService.prototype.setSurgeData = function (data) {
        this.surgeData = data;
        this.surgeDataObj.next(this.surgeData);
    };
    ComponentCommunicationService.prototype.getSurgeData = function () {
        return this.surgeDataObj.asObservable();
    };
    ComponentCommunicationService.prototype.setEqData = function (data) {
        this.eqData = data;
        this.eqDataObj.next(this.eqData);
    };
    ComponentCommunicationService.prototype.getEqData = function () {
        return this.eqDataObj.asObservable();
    };
    ComponentCommunicationService.prototype.setWindData = function (data) {
        this.windData = data;
        this.windDataObj.next(this.windData);
    };
    ComponentCommunicationService.prototype.getWindData = function () {
        return this.windDataObj.asObservable();
    };
    ComponentCommunicationService.prototype.setHazardAddData = function (data) {
        this.hazardAddData = data;
        this.hazardAddDataObj.next(this.hazardAddData);
    };
    ComponentCommunicationService.prototype.getHazardAddData = function () {
        return this.hazardAddDataObj.asObservable();
    };
    ComponentCommunicationService.prototype.setHazardsData = function (data) {
        this.hazardsData = data;
        this.hazardsDataObj.next(this.hazardsData);
    };
    ComponentCommunicationService.prototype.getHazardsData = function () {
        return this.hazardsDataObj.asObservable();
    };
    ComponentCommunicationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ComponentCommunicationService);
    return ComponentCommunicationService;
}());
exports.ComponentCommunicationService = ComponentCommunicationService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50Q29tbXVuaWNhdGlvblNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyx3QkFBd0IsY0FBYyxDQUFDLENBQUE7QUFPdkM7SUFBQTtRQWlCVSxZQUFPLEdBQXlCLElBQUksaUJBQU8sRUFBZSxDQUFDO1FBQzNELGFBQVEsR0FBb0IsSUFBSSxpQkFBTyxFQUFVLENBQUM7UUFDbEQsZ0JBQVcsR0FBb0IsSUFBSSxpQkFBTyxFQUFVLENBQUM7UUFFckQsa0JBQWEsR0FBcUIsSUFBSSxpQkFBTyxFQUFXLENBQUM7UUFDekQsZUFBVSxHQUFvQixJQUFJLGlCQUFPLEVBQVUsQ0FBQztRQUNwRCxpQkFBWSxHQUFvQixJQUFJLGlCQUFPLEVBQVUsQ0FBQztRQUN0RCxtQkFBYyxHQUFvQixJQUFJLGlCQUFPLEVBQVUsQ0FBQztRQUN4RCw0QkFBdUIsR0FBb0IsSUFBSSxpQkFBTyxFQUFVLENBQUM7UUFFakUsbUJBQWMsR0FBb0IsSUFBSSxpQkFBTyxFQUFVLENBQUM7UUFFeEQsb0JBQWUsR0FBb0IsSUFBSSxpQkFBTyxFQUFVLENBQUM7UUFDekQsaUJBQVksR0FBb0IsSUFBSSxpQkFBTyxFQUFVLENBQUM7UUFDdEQseUJBQW9CLEdBQW9CLElBQUksaUJBQU8sRUFBVSxDQUFDO1FBQzlELGNBQVMsR0FBb0IsSUFBSSxpQkFBTyxFQUFVLENBQUM7UUFDbkQsZ0JBQVcsR0FBb0IsSUFBSSxpQkFBTyxFQUFVLENBQUM7UUFDckQsaUJBQVksR0FBb0IsSUFBSSxpQkFBTyxFQUFVLENBQUM7UUFDdEQscUJBQWdCLEdBQW9CLElBQUksaUJBQU8sRUFBVSxDQUFDO1FBQzFELG1CQUFjLEdBQW9CLElBQUksaUJBQU8sRUFBVSxDQUFDO0lBb0xsRSxDQUFDO0lBN0tDLGlEQUFTLEdBQVQsVUFBVSxJQUFpQjtRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElB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QUUsQ0FBQztJQUM5QyxDQUFDO0lBRUQsc0RBQWMsR0FBZCxVQUFlLElBQVk7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxzREFBYyxHQUFkO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQXhOSDtRQUFDLGlCQUFVLEVBQUU7O3FDQUFBO0lBeU5iLG9DQUFDO0FBQUQsQ0F4TkEsQUF3TkMsSUFBQTtBQXhOWSxxQ0FBNkIsZ0NBd056QyxDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvY29tcG9uZW50Q29tbXVuaWNhdGlvblNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGUgfSBmcm9tICcuL2NvbXBDb21tSW50ZXJmYWNlJztcclxuXHJcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSAnLi4vc2hhcmVkL21vZGVsL2V2ZW50Lm1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudENvbW11bmljYXRpb25TZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBjb21tOiBDb21tdW5pY2F0ZTtcclxuICBwdWJsaWMgb2JqOiBhbnk7XHJcbiAgcHVibGljIGFjYzogYW55O1xyXG4gIHB1YmxpYyBmbGFnU3RhdHVzOiBib29sZWFuO1xyXG4gIHB1YmxpYyBzYXZlRGF0YTogT2JqZWN0O1xyXG4gIHB1YmxpYyBldmVudDogRXZlbnQ7XHJcbiAgcHJpdmF0ZSBzdW1tYXJ5RGF0YTogT2JqZWN0O1xyXG4gIHByaXZhdGUgcmlza0ltcHJvdmVtZW50c0RhdGE6IE9iamVjdDtcclxuICBwcml2YXRlIG5hdGNhdExFRGF0YTogT2JqZWN0O1xyXG4gIHByaXZhdGUgc3VyZ2VEYXRhOiBPYmplY3Q7XHJcbiAgcHJpdmF0ZSBlcURhdGE6IE9iamVjdDtcclxuICBwcml2YXRlIHdpbmREYXRhOiBPYmplY3Q7XHJcbiAgcHJpdmF0ZSBmbG9vZERhdGEgOiBPYmplY3Q7XHJcbiAgcHJpdmF0ZSBoYXphcmRBZGREYXRhIDogT2JqZWN0O1xyXG5cclxuICBwcml2YXRlIHN1YmplY3Q6IFN1YmplY3Q8Q29tbXVuaWNhdGU+ID0gbmV3IFN1YmplY3Q8Q29tbXVuaWNhdGU+KCk7XHJcbiAgcHJpdmF0ZSB3b3JrTGlzdDogU3ViamVjdDxPYmplY3Q+ID0gbmV3IFN1YmplY3Q8T2JqZWN0PigpO1xyXG4gIHByaXZhdGUgc2VsZWN0ZWRBY2M6IFN1YmplY3Q8T2JqZWN0PiA9IG5ldyBTdWJqZWN0PE9iamVjdD4oKTtcclxuICBwcml2YXRlIHNlbGVjdGVkQWNjUkZTVW5pdDogc3RyaW5nO1xyXG4gIHByaXZhdGUgcGFzc0ZsYWdWYWx1ZTogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgcHJpdmF0ZSBzYXZlVG9GaWxlOiBTdWJqZWN0PE9iamVjdD4gPSBuZXcgU3ViamVjdDxPYmplY3Q+KCk7XHJcbiAgcHJpdmF0ZSBldmVudFN1YmplY3Q6IFN1YmplY3Q8T2JqZWN0PiA9IG5ldyBTdWJqZWN0PE9iamVjdD4oKTtcclxuICBwcml2YXRlIHN1bW1hcnlEYXRhT2JqOiBTdWJqZWN0PE9iamVjdD4gPSBuZXcgU3ViamVjdDxPYmplY3Q+KCk7ICBcclxuICBwcml2YXRlIHJpc2tJbXByb3ZlbWVudHNEYXRhT2JqOiBTdWJqZWN0PE9iamVjdD4gPSBuZXcgU3ViamVjdDxPYmplY3Q+KCk7XHJcbiAgcHJpdmF0ZSByaVR5cGVzRGF0YTogT2JqZWN0O1xyXG4gIHByaXZhdGUgcmlUeXBlc0RhdGFPYmo6IFN1YmplY3Q8T2JqZWN0PiA9IG5ldyBTdWJqZWN0PE9iamVjdD4oKTsgXHJcbiAgcHJpdmF0ZSBSZWR1bmRhbnRQb3dlclV0aWxpdGllczpzdHJpbmc7IFxyXG4gIHByaXZhdGUgbmF0Y2F0TEVEYXRhT2JqOiBTdWJqZWN0PE9iamVjdD4gPSBuZXcgU3ViamVjdDxPYmplY3Q+KCk7XHJcbiAgcHJpdmF0ZSBzdXJnZURhdGFPYmo6IFN1YmplY3Q8T2JqZWN0PiA9IG5ldyBTdWJqZWN0PE9iamVjdD4oKTtcclxuICBwcml2YXRlIG5hdGNhdFN1cmdlTEVEYXRhT2JqOiBTdWJqZWN0PE9iamVjdD4gPSBuZXcgU3ViamVjdDxPYmplY3Q+KCk7ICBcclxuICBwcml2YXRlIGVxRGF0YU9iajogU3ViamVjdDxPYmplY3Q+ID0gbmV3IFN1YmplY3Q8T2JqZWN0PigpO1xyXG4gIHByaXZhdGUgd2luZERhdGFPYmo6IFN1YmplY3Q8T2JqZWN0PiA9IG5ldyBTdWJqZWN0PE9iamVjdD4oKTtcclxuICBwcml2YXRlIGZsb29kRGF0YU9iajogU3ViamVjdDxPYmplY3Q+ID0gbmV3IFN1YmplY3Q8T2JqZWN0PigpO1xyXG4gIHByaXZhdGUgaGF6YXJkQWRkRGF0YU9iajogU3ViamVjdDxPYmplY3Q+ID0gbmV3IFN1YmplY3Q8T2JqZWN0PigpO1xyXG4gIHByaXZhdGUgaGF6YXJkc0RhdGFPYmo6IFN1YmplY3Q8T2JqZWN0PiA9IG5ldyBTdWJqZWN0PE9iamVjdD4oKTtcclxuXHJcbiAgcHJpdmF0ZSBOYXRjYXRUYWJJbmRleDogbnVtYmVyOyBcclxuICBwcml2YXRlIEhhemFyZHNUYWJJbmRleDogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIGhhemFyZHNEYXRhOiBPYmplY3Q7XHJcbiAgXHJcbiAgc2V0TG9nZ2VkKGNvbW06IENvbW11bmljYXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbW0gPSBjb21tO1xyXG4gICAgdGhpcy5zdWJqZWN0Lm5leHQoY29tbSk7XHJcbiAgfVxyXG5cclxuICBnZXRMb2dnZWQoKTogT2JzZXJ2YWJsZTxDb21tdW5pY2F0ZT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIHNldE9iamVjdChvYmo6IE9iamVjdCk6IHZvaWQge1xyXG4gICAgdGhpcy5vYmogPSBvYmo7XHJcbiAgICB0aGlzLndvcmtMaXN0Lm5leHQodGhpcy5vYmopO1xyXG4gIH1cclxuXHJcbiAgZ2V0T2JqZWN0KCk6IE9ic2VydmFibGU8T2JqZWN0PiB7XHJcbiAgICByZXR1cm4gdGhpcy53b3JrTGlzdC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIHNldFNlbGVjdGVkQWNjKGFjYzogT2JqZWN0KTogdm9pZCB7XHJcbiAgICB0aGlzLmFjYyA9IGFjYztcclxuICAgIHRoaXMuc2VsZWN0ZWRBY2MubmV4dCh0aGlzLmFjYyk7XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3RlZEFjYygpOiBPYnNlcnZhYmxlPE9iamVjdD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRBY2MuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudChldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuZXZlbnQgPSBldmVudDtcclxuICAgIHRoaXMuZXZlbnRTdWJqZWN0Lm5leHQodGhpcy5ldmVudCk7XHJcbiAgfVxyXG5cclxuICBnZXRFdmVudCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiB0aGlzLmV2ZW50U3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIHNldEZsYWdTdGF0dXMoZmxhZ1N0YXR1czogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5mbGFnU3RhdHVzID0gZmxhZ1N0YXR1cztcclxuICAgIHRoaXMucGFzc0ZsYWdWYWx1ZS5uZXh0KHRoaXMuZmxhZ1N0YXR1cyk7XHJcbiAgfVxyXG5cclxuICBnZXRGbGFnU3RhdHVzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIHRoaXMucGFzc0ZsYWdWYWx1ZS5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIHNldFNhdmVUb0ZpbGVPYmooc2F2ZURhdGE6IE9iamVjdCk6IHZvaWQge1xyXG4gICAgdGhpcy5zYXZlRGF0YSA9IHNhdmVEYXRhO1xyXG4gICAgdGhpcy5zYXZlVG9GaWxlLm5leHQodGhpcy5zYXZlRGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRTYXZlVG9GaWxlT2JqKCk6IE9ic2VydmFibGU8T2JqZWN0PiB7XHJcbiAgICByZXR1cm4gdGhpcy5zYXZlVG9GaWxlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0U3VtbWFyeURhdGEoZGF0YTogT2JqZWN0KTogdm9pZCB7XHJcbiAgICB0aGlzLnN1bW1hcnlEYXRhID0gZGF0YTtcclxuICAgIHRoaXMuc3VtbWFyeURhdGFPYmoubmV4dCh0aGlzLnN1bW1hcnlEYXRhKTtcclxuICB9XHJcblxyXG4gIHNldEZsb29kRGF0YShkYXRhOiBPYmplY3QpOiB2b2lkIFxyXG4gIHtcclxuICAgIHRoaXMuZmxvb2REYXRhID0gZGF0YTtcclxuICAgIHRoaXMuZmxvb2REYXRhT2JqLm5leHQodGhpcy5mbG9vZERhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rmxvb2REYXRhKCk6IE9ic2VydmFibGU8T2JqZWN0PiB7XHJcbiAgICByZXR1cm4gdGhpcy5mbG9vZERhdGFPYmouYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBnZXRTdW1tYXJ5RGF0YSgpOiBPYnNlcnZhYmxlPE9iamVjdD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3VtbWFyeURhdGFPYmouYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBzZXRSaXNrSW1wcm92ZW1lbnRzRGF0YShkYXRhOiBPYmplY3QpOiB2b2lkIHtcclxuICAgIHRoaXMucmlza0ltcHJvdmVtZW50c0RhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5yaXNrSW1wcm92ZW1lbnRzRGF0YU9iai5uZXh0KHRoaXMucmlza0ltcHJvdmVtZW50c0RhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Umlza0ltcHJvdmVtZW50c0RhdGEoKTogT2JzZXJ2YWJsZTxPYmplY3Q+IHtcclxuICAgIHJldHVybiB0aGlzLnJpc2tJbXByb3ZlbWVudHNEYXRhT2JqLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Umlza0ltcHJvdmVtZW50c1VwZGF0ZWREYXRhKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmlza0ltcHJvdmVtZW50c0RhdGE7XHJcbiAgfVxyXG5cclxuICBzZXRSSVR5cGVzRGF0YShkYXRhOiBPYmplY3QpOiB2b2lkIHtcclxuICAgIHRoaXMucmlUeXBlc0RhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5yaVR5cGVzRGF0YU9iai5uZXh0KHRoaXMucmlUeXBlc0RhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UklUeXBlc0RhdGEoKTogT2JzZXJ2YWJsZTxPYmplY3Q+IHtcclxuICAgIHJldHVybiB0aGlzLnJpVHlwZXNEYXRhT2JqLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuICBcclxuICAvLzExLzIxLzIwMTY6IEZpeCBmb3IgREUyMzVcclxuICBzZXROYXRjYXRUYWJJbmRleCAoZGF0YTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLk5hdGNhdFRhYkluZGV4ID0gZGF0YTsgICAgXHJcbiAgfVxyXG5cclxuICBnZXROYXRjYXRUYWJJbmRleCgpOiBudW1iZXJ7XHJcbiAgICByZXR1cm4gdGhpcy5OYXRjYXRUYWJJbmRleDtcclxuICB9XHJcblxyXG4gIHNldEhhemFyZHNUYWJJbmRleCAoZGF0YTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLkhhemFyZHNUYWJJbmRleCA9IGRhdGE7ICAgIFxyXG4gIH1cclxuXHJcbiAgZ2V0SGF6YXJkc1RhYkluZGV4KCk6IG51bWJlcntcclxuICAgIHJldHVybiB0aGlzLkhhemFyZHNUYWJJbmRleDtcclxuICB9XHJcblxyXG4gIHNldFJlZHVuZGFudFBvd2VyVXRpbGl0aWVzIChkYXRhOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuUmVkdW5kYW50UG93ZXJVdGlsaXRpZXMgPSBkYXRhOyAgICBcclxuICB9XHJcblxyXG4gIGdldFJlZHVuZGFudFBvd2VyVXRpbGl0aWVzKCk6IHN0cmluZ3tcclxuICAgIHJldHVybiB0aGlzLlJlZHVuZGFudFBvd2VyVXRpbGl0aWVzO1xyXG4gIH1cclxuXHJcbiAgc2V0TkFUQ0FUTEVEYXRhKGRhdGE6IE9iamVjdCk6IHZvaWQge1xyXG4gICAgdGhpcy5uYXRjYXRMRURhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5uYXRjYXRMRURhdGFPYmoubmV4dCh0aGlzLm5hdGNhdExFRGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXROQVRDQVRMRURhdGEoKTogT2JzZXJ2YWJsZTxPYmplY3Q+IHtcclxuICAgIHJldHVybiB0aGlzLm5hdGNhdExFRGF0YU9iai5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIHNldFN1cmdlRGF0YShkYXRhOiBPYmplY3QpOiB2b2lkIHtcclxuICAgIHRoaXMuc3VyZ2VEYXRhID0gZGF0YTtcclxuICAgIHRoaXMuc3VyZ2VEYXRhT2JqLm5leHQodGhpcy5zdXJnZURhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3VyZ2VEYXRhKCk6IE9ic2VydmFibGU8T2JqZWN0PiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdXJnZURhdGFPYmouYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBzZXRFcURhdGEoZGF0YTogT2JqZWN0KTogdm9pZCB7XHJcbiAgICB0aGlzLmVxRGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLmVxRGF0YU9iai5uZXh0KHRoaXMuZXFEYXRhKTtcclxuICB9XHJcbiAgXHJcbiAgZ2V0RXFEYXRhKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZXFEYXRhT2JqLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0V2luZERhdGEoZGF0YTogT2JqZWN0KTogdm9pZCB7XHJcbiAgICB0aGlzLndpbmREYXRhID0gZGF0YTtcclxuICAgIHRoaXMud2luZERhdGFPYmoubmV4dCh0aGlzLndpbmREYXRhKTtcclxuICB9XHJcbiAgXHJcbiAgZ2V0V2luZERhdGEoKSB7XHJcbiAgICByZXR1cm4gdGhpcy53aW5kRGF0YU9iai5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIHNldEhhemFyZEFkZERhdGEoZGF0YTogT2JqZWN0KTogdm9pZCB7XHJcbiAgICB0aGlzLmhhemFyZEFkZERhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5oYXphcmRBZGREYXRhT2JqLm5leHQodGhpcy5oYXphcmRBZGREYXRhKTtcclxuICB9XHJcbiAgXHJcbiAgZ2V0SGF6YXJkQWRkRGF0YSgpIHtcclxuICAgIHJldHVybiB0aGlzLmhhemFyZEFkZERhdGFPYmouYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBzZXRIYXphcmRzRGF0YShkYXRhOiBPYmplY3QpOiB2b2lkIHtcclxuICAgIHRoaXMuaGF6YXJkc0RhdGEgPSBkYXRhO1xyXG4gICAgdGhpcy5oYXphcmRzRGF0YU9iai5uZXh0KHRoaXMuaGF6YXJkc0RhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SGF6YXJkc0RhdGEoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5oYXphcmRzRGF0YU9iai5hc09ic2VydmFibGUoKTtcclxuICB9XHJcbn1cclxuIl19
