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
var configuration_1 = require('../shared/configuration');
var localStorageService_1 = require('../shared/localStorageService');
var validationMessages_1 = require('../shared/validationMessages');
var WaterSupplyChartComponent = (function () {
    function WaterSupplyChartComponent(localStorageService) {
        this.localStorageService = localStorageService;
        this.chartData = [];
    }
    WaterSupplyChartComponent.prototype.showModal = function () {
        this.showChart(this.inputChartData, this.testDataInd);
    };
    WaterSupplyChartComponent.prototype.hideModal = function () {
        this.modal.hide();
    };
    WaterSupplyChartComponent.prototype.ngOnInit = function () {
    };
    WaterSupplyChartComponent.prototype.showChart = function (value, testDataInd) {
        var nominalRated = {
            key: 'Nominal/Rated',
            values: []
        };
        this.chartData = [];
        var testData = [];
        var pOne;
        var pTwo;
        var pThree;
        if (value.WaterSupplyPerfData.length > 0) {
            for (var i = 0; i < value.WaterSupplyPerfData.length; i++) {
                var temp = value.WaterSupplyPerfData[i];
                var curve = {
                    key: '',
                    values: []
                };
                if ((temp.IncludeThisSection == "true" || temp.IncludeThisSection == true) && (temp.STATIC_PRESSURE_QT || temp.STATIC_PRESSURE_QT == 0)
                    && temp.RESIDUAL_FLOW_RATE_QT && temp.RESIDUAL_PRESSURE_QT) {
                    var keyInd = i + 1;
                    if (temp.WATER_SUPPLY_TEST_NM) {
                        curve.key = temp.WATER_SUPPLY_TEST_NM;
                    }
                    else {
                        curve.key = 'test' + keyInd;
                    }
                    pOne = {
                        x: 0,
                        y: Math.round(temp.STATIC_PRESSURE_QT * 100) / 100
                    };
                    curve.values.push(pOne);
                    pTwo = {
                        x: Math.round(temp.RESIDUAL_FLOW_RATE_QT * 100) / 100,
                        y: Math.round(temp.RESIDUAL_PRESSURE_QT * 100) / 100
                    };
                    curve.values.push(pTwo);
                    if (temp.STATIC_PRESSURE_QT == 0) {
                        pThree = {
                            x: 0,
                            y: 0
                        };
                    }
                    else {
                        var a = Math.pow(temp.RESIDUAL_FLOW_RATE_QT, 1.85);
                        var b = 0 - temp.STATIC_PRESSURE_QT;
                        var c = temp.RESIDUAL_PRESSURE_QT - temp.STATIC_PRESSURE_QT;
                        var d = a * b / c;
                        var e = 1 / 1.85;
                        var tempX = Math.pow(d, e);
                        pThree = {
                            x: Math.round(tempX * 100) / 100,
                            y: 0
                        };
                    }
                    curve.values.push(pThree);
                    this.chartData.push(curve);
                }
            }
        }
        var xLabel = 'Flow (' + this.xUnit + ')';
        var yLabel = 'Pressure (' + this.yUnit + ')';
        this.optionsData = {
            chart: {
                type: 'lineChart',
                height: 300,
                width: 900,
                margin: {
                    top: 50,
                    right: 50,
                    bottom: 50,
                    left: 180
                },
                useInteractiveGuideline: true,
                x: function (d) {
                    return d.x;
                },
                y: function (d) {
                    return d.y;
                },
                showValues: true,
                valueFormat: function (d) {
                    return d3.format(',.4f')(d);
                },
                transitionDuration: 500,
                xAxis: {
                    axisLabel: xLabel,
                    tickFormat: function (d) {
                        return d3.format(',2r')(d);
                    },
                },
                yAxis: {
                    axisLabel: yLabel,
                    axisLabelDistance: -10
                }
            }
        };
        this.modal.show();
    };
    __decorate([
        core_1.ViewChild('waterSupplyChartModal'), 
        __metadata('design:type', core_1.ElementRef)
    ], WaterSupplyChartComponent.prototype, "modal", void 0);
    WaterSupplyChartComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'water-supply-chart',
            templateUrl: 'waterSupplyChart.component.html',
            providers: [configuration_1.Configuration, localStorageService_1.LocalStorageService, validationMessages_1.ValidationMessages],
            inputs: ['inputChartData', 'testDataInd', 'xUnit', 'yUnit']
        }), 
        __metadata('design:paramtypes', [localStorageService_1.LocalStorageService])
    ], WaterSupplyChartComponent);
    return WaterSupplyChartComponent;
}());
exports.WaterSupplyChartComponent = WaterSupplyChartComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC93YXRlclN1cHBseS93YXRlclN1cHBseUNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdFLGVBQWUsQ0FBQyxDQUFBO0FBR3hGLDhCQUE4Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3hELG9DQUFvQywrQkFBK0IsQ0FBQyxDQUFBO0FBQ3BFLG1DQUFtQyw4QkFBOEIsQ0FBQyxDQUFBO0FBWWxFO0lBa0JFLG1DQUFvQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQVpwRCxjQUFTLEdBQVUsRUFBRSxDQUFDO0lBYTlCLENBQUM7SUFURCw2Q0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsNkNBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUtELDRDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsNkNBQVMsR0FBVCxVQUFVLEtBQUssRUFBRSxXQUFXO1FBQzFCLElBQUksWUFBWSxHQUFRO1lBQ3BCLEdBQUcsRUFBRSxlQUFlO1lBQ3BCLE1BQU0sRUFBRSxFQUFFO1NBQ2IsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksUUFBUSxHQUFRLEVBQUUsQ0FBQztRQUN2QixJQUFJLElBQVMsQ0FBQztRQUNkLElBQUksSUFBUyxDQUFDO1FBQ2QsSUFBSSxNQUFXLENBQUM7UUFFaEIsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLG1CQUFtQixDQUFDLE1BQU0s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LEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBakhEO1FBQUMsZ0JBQVMsQ0FBQyx1QkFBdUIsQ0FBQzs7NERBQUE7SUFoQnJDO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsNkJBQWEsRUFBRSx5Q0FBbUIsRUFBRSx1Q0FBa0IsQ0FBQztZQUNuRSxNQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztTQUM1RCxDQUFDOztpQ0FBQTtJQTZIRixnQ0FBQztBQUFELENBM0hBLEFBMkhDLElBQUE7QUEzSFksaUNBQXlCLDRCQTJIckMsQ0FBQSIsImZpbGUiOiJhcHAvd2F0ZXJTdXBwbHkvd2F0ZXJTdXBwbHlDaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZPUk1fRElSRUNUSVZFUyAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE1vZGFsRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL21vZGFsL21vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9zaGFyZWQvY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvbG9jYWxTdG9yYWdlU2VydmljZSc7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25NZXNzYWdlcyB9IGZyb20gJy4uL3NoYXJlZC92YWxpZGF0aW9uTWVzc2FnZXMnO1xyXG5pbXBvcnQgeyBDb21tb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2NvbW1vbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRHJvcGRvd25Db250YWluZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zaGFyZWQvZHJvcGRvd25Db250YWluZXIvZHJvcGRvd24tY29udGFpbmVyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnd2F0ZXItc3VwcGx5LWNoYXJ0JywgIFxyXG4gIHRlbXBsYXRlVXJsOiAnd2F0ZXJTdXBwbHlDaGFydC5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbQ29uZmlndXJhdGlvbiwgTG9jYWxTdG9yYWdlU2VydmljZSwgVmFsaWRhdGlvbk1lc3NhZ2VzXSxcclxuICBpbnB1dHM6IFsnaW5wdXRDaGFydERhdGEnLCAndGVzdERhdGFJbmQnLCAneFVuaXQnLCAneVVuaXQnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFdhdGVyU3VwcGx5Q2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHByaXZhdGUgaW5wdXRDaGFydERhdGE6IGFueTtcclxuICBwcml2YXRlIHRlc3REYXRhSW5kOiBhbnk7XHJcbiAgcHJpdmF0ZSB4VW5pdDogYW55O1xyXG4gIHByaXZhdGUgeVVuaXQ6IGFueTtcclxuICBwcml2YXRlIG9wdGlvbnNEYXRhOiBhbnk7XHJcbiAgcHJpdmF0ZSBjaGFydERhdGE6IGFueVtdID0gW107XHJcbiAgXHJcbiAgQFZpZXdDaGlsZCgnd2F0ZXJTdXBwbHlDaGFydE1vZGFsJykgbW9kYWw6RWxlbWVudFJlZjtcclxuXHJcbiAgc2hvd01vZGFsKCkge1xyXG4gICAgdGhpcy5zaG93Q2hhcnQodGhpcy5pbnB1dENoYXJ0RGF0YSwgdGhpcy50ZXN0RGF0YUluZCk7XHJcbiAgfVxyXG5cclxuICBoaWRlTW9kYWwoKSB7XHJcbiAgICB0aGlzLm1vZGFsLmhpZGUoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYWxTdG9yYWdlU2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfSBcclxuXHJcbiAgc2hvd0NoYXJ0KHZhbHVlLCB0ZXN0RGF0YUluZCkge1xyXG4gICAgbGV0IG5vbWluYWxSYXRlZDogYW55ID0ge1xyXG4gICAgICAgIGtleTogJ05vbWluYWwvUmF0ZWQnLFxyXG4gICAgICAgIHZhbHVlczogW11cclxuICAgIH07XHJcbiAgICB0aGlzLmNoYXJ0RGF0YSA9IFtdO1xyXG4gICAgbGV0IHRlc3REYXRhOiBhbnkgPSBbXTtcclxuICAgIGxldCBwT25lOiBhbnk7XHJcbiAgICBsZXQgcFR3bzogYW55O1xyXG4gICAgbGV0IHBUaHJlZTogYW55O1xyXG5cclxuICAgIGlmKHZhbHVlLldhdGVyU3VwcGx5UGVyZkRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB2YWx1ZS5XYXRlclN1cHBseVBlcmZEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0gdmFsdWUuV2F0ZXJTdXBwbHlQZXJmRGF0YVtpXTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBjdXJ2ZSA9IHtcclxuICAgICAgICAgICAgICAgIGtleTogJycsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtdXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlmKCh0ZW1wLkluY2x1ZGVUaGlzU2VjdGlvbiA9PSBcInRydWVcIiB8fCB0ZW1wLkluY2x1ZGVUaGlzU2VjdGlvbiA9PSB0cnVlKSAmJiAodGVtcC5TVEFUSUNfUFJFU1NVUkVfUVQgfHwgdGVtcC5TVEFUSUNfUFJFU1NVUkVfUVQgPT0gMClcclxuICAgICAgICAgICAgICAgICYmIHRlbXAuUkVTSURVQUxfRkxPV19SQVRFX1FUICYmIHRlbXAuUkVTSURVQUxfUFJFU1NVUkVfUVQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBrZXlJbmQgPSBpICsgMTtcclxuICAgICAgICAgICAgICAgIGlmKHRlbXAuV0FURVJfU1VQUExZX1RFU1RfTk0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJ2ZS5rZXkgPSB0ZW1wLldBVEVSX1NVUFBMWV9URVNUX05NO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJ2ZS5rZXkgPSAndGVzdCcgKyBrZXlJbmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwT25lID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogTWF0aC5yb3VuZCh0ZW1wLlNUQVRJQ19QUkVTU1VSRV9RVCAqIDEwMCkgLyAxMDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGN1cnZlLnZhbHVlcy5wdXNoKHBPbmUpO1xyXG4gICAgICAgICAgICAgICAgcFR3byA9IHtcclxuICAgICAgICAgICAgICAgICAgICB4OiBNYXRoLnJvdW5kKHRlbXAuUkVTSURVQUxfRkxPV19SQVRFX1FUICogMTAwKSAvIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICB5OiBNYXRoLnJvdW5kKHRlbXAuUkVTSURVQUxfUFJFU1NVUkVfUVQgKiAxMDApIC8gMTAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjdXJ2ZS52YWx1ZXMucHVzaChwVHdvKTtcclxuICAgICAgICAgICAgICAgIGlmKHRlbXAuU1RBVElDX1BSRVNTVVJFX1FUID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBwVGhyZWUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhID0gdGVtcC5SRVNJRFVBTF9GTE9XX1JBVEVfUVQgKiogMS44NTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYiA9IDAgLSB0ZW1wLlNUQVRJQ19QUkVTU1VSRV9RVDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYyA9IHRlbXAuUkVTSURVQUxfUFJFU1NVUkVfUVQgLSB0ZW1wLlNUQVRJQ19QUkVTU1VSRV9RVDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZCA9IGEgKiBiIC8gYztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZSA9IDEvMS44NTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcFggPSBkICoqIGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcFRocmVlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBNYXRoLnJvdW5kKHRlbXBYICogMTAwKSAvIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGN1cnZlLnZhbHVlcy5wdXNoKHBUaHJlZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0RGF0YS5wdXNoKGN1cnZlKTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgeExhYmVsID0gJ0Zsb3cgKCcgKyB0aGlzLnhVbml0ICsgJyknO1xyXG4gICAgbGV0IHlMYWJlbCA9ICdQcmVzc3VyZSAoJyArIHRoaXMueVVuaXQgKyAnKSc7XHJcbiAgICB0aGlzLm9wdGlvbnNEYXRhID0ge1xyXG4gICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lQ2hhcnQnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwMCxcclxuICAgICAgICAgICAgd2lkdGg6IDkwMCxcclxuICAgICAgICAgICAgbWFyZ2luOiB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDUwLFxyXG4gICAgICAgICAgICAgICAgYm90dG9tOiA1MCxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDE4MFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1c2VJbnRlcmFjdGl2ZUd1aWRlbGluZTogdHJ1ZSxcclxuICAgICAgICAgICAgeDogZnVuY3Rpb24gKGQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGQueDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeTogZnVuY3Rpb24gKGQ6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGQueTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hvd1ZhbHVlczogdHJ1ZSxcclxuICAgICAgICAgICAgdmFsdWVGb3JtYXQ6IGZ1bmN0aW9uIChkOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkMy5mb3JtYXQoJywuNGYnKShkKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgICAgIHhBeGlzOiB7XHJcbiAgICAgICAgICAgICAgICBheGlzTGFiZWw6IHhMYWJlbCwvLydGbG93IChncG0pJyxcclxuICAgICAgICAgICAgICAgIHRpY2tGb3JtYXQ6IGZ1bmN0aW9uIChkOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZDMuZm9ybWF0KCcsMnInKShkKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHlBeGlzOiB7XHJcbiAgICAgICAgICAgICAgICBheGlzTGFiZWw6IHlMYWJlbCwvLydQcmVzc3VyZSAocHNpKScsXHJcbiAgICAgICAgICAgICAgICBheGlzTGFiZWxEaXN0YW5jZTogLTEwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLm1vZGFsLnNob3coKTtcclxuICB9XHJcblxyXG59Il19
