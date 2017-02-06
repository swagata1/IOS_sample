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
var GraphsComponent = (function () {
    function GraphsComponent() {
        this.yLogScale = false;
        this.chartColorsHierarchy = [];
        this.chartColorsHierarchy = ['#00A4E4', '#FBCA5C', '#92B45B', '#0073AE', '#858585', '#F2F2F2', '#66C8EE', '#FDDF9D', '#BDD19D'];
    }
    GraphsComponent.prototype.ngOnInit = function () {
        this.options = this.dataForOptions;
        this.data = this.updateSeriesColors(this.dataForChart);
        if (this.yLogScale) {
            this.options.chart.yScale = d3.scale.log().base(1.85);
            this.options.chart.yAxis.tickFormat = function (d) {
                return d3.format(',.2r')(d);
            };
        }
    };
    GraphsComponent.prototype.ngOnChanges = function () {
        this.data = this.updateSeriesColors(this.dataForChart);
        console.log('this.data in graphs.component.ts file.');
        console.log(this.data);
    };
    GraphsComponent.prototype.updateSeriesColors = function (data) {
        for (var i = 0; i < data.length; i++) {
            data[i].color = this.chartColorsHierarchy[i];
            if (data[i].dashed) {
                data[i].classed = 'dashed';
            }
        }
        return data;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], GraphsComponent.prototype, "dataForChart", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], GraphsComponent.prototype, "yLogScale", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], GraphsComponent.prototype, "dataForOptions", void 0);
    GraphsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'axis-graphs',
            templateUrl: 'graphs.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], GraphsComponent);
    return GraphsComponent;
}());
exports.GraphsComponent = GraphsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ncmFwaHMvZ3JhcGhzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBFLGVBQWUsQ0FBQyxDQUFBO0FBZTFGO0lBUUk7UUFOUyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBRzVCLHlCQUFvQixHQUFVLEVBQUUsQ0FBQztRQUtyQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFBO0lBQ25JLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFRdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQU07Z0JBQ2xELE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLENBQUMsQ0FBQztRQUNOLENBQUM7SUFnRkwsQ0FBQztJQUVELHFDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1FBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCw0Q0FBa0IsR0FBbEIsVUFBbUIsSUFBSTtRQUNuQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNuQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQztnQkFDZixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztZQUMvQixDQUFDO1FBQ0wsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQTNIRDtRQUFDLFlBQUssRUFBRTs7eURBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7c0RBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7MkRBQUE7SUFWWjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLHVCQUF1QjtTQUV2QyxDQUFDOzt1QkFBQTtJQStIRixzQkFBQztBQUFELENBN0hBLEFBNkhDLElBQUE7QUE3SFksdUJBQWUsa0JBNkgzQixDQUFBIiwiZmlsZSI6ImFwcC9ncmFwaHMvZ3JhcGhzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBPbkNoYW5nZXMsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL3NoYXJlZC9jb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9sb2NhbFN0b3JhZ2VTZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50Q29tbXVuaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvY29tcG9uZW50Q29tbXVuaWNhdGlvblNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tdW5pY2F0ZSB9IGZyb20gJy4uL3NoYXJlZC9jb21wQ29tbUludGVyZmFjZSc7XHJcbmRlY2xhcmUgbGV0IGQzOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2F4aXMtZ3JhcGhzJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnZ3JhcGhzLmNvbXBvbmVudC5odG1sJyxcclxuICAgIC8vcHJvdmlkZXJzOiBbQ29uc3RydWN0aW9uU2VydmljZSwgQ29uZmlndXJhdGlvbiwgTG9jYWxTdG9yYWdlU2VydmljZV0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgR3JhcGhzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gICAgQElucHV0KCkgZGF0YUZvckNoYXJ0OiBhbnk7XHJcbiAgICBASW5wdXQoKSB5TG9nU2NhbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIGRhdGFGb3JPcHRpb25zOiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBjaGFydENvbG9yc0hpZXJhcmNoeTogYW55W10gPSBbXTtcclxuICAgIG9wdGlvbnM6IGFueTtcclxuICAgIGRhdGE6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIEFJRyBTdGFuZGFyZCBDb2xvciBQYWxldHRlXHJcbiAgICAgICAgdGhpcy5jaGFydENvbG9yc0hpZXJhcmNoeSA9IFsnIzAwQTRFNCcsICcjRkJDQTVDJywgJyM5MkI0NUInLCAnIzAwNzNBRScsICcjODU4NTg1JywgJyNGMkYyRjInLCAnIzY2QzhFRScsICcjRkRERjlEJywgJyNCREQxOUQnXVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuZGF0YUZvck9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy51cGRhdGVTZXJpZXNDb2xvcnModGhpcy5kYXRhRm9yQ2hhcnQpO1xyXG4gICAgICAgIGlmICh0aGlzLnlMb2dTY2FsZSkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hhcnQueVNjYWxlID0gZDMuc2NhbGUubG9nKCkuYmFzZSgxLjg1KTtcclxuICAgICAgICAgICAgLy8gdGhpcy5vcHRpb25zLmNoYXJ0LnkgPSBmdW5jdGlvbiAoZDogYW55KSB7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAoZC55KSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIE1hdGgubG9nKGQueSk7XHJcbiAgICAgICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY2hhcnQueUF4aXMudGlja0Zvcm1hdCA9IGZ1bmN0aW9uIChkOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkMy5mb3JtYXQoJywuMnInKShkKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gdGhpcy5vcHRpb25zID0ge1xyXG4gICAgICAgIC8vICAgICBjaGFydDoge1xyXG4gICAgICAgIC8vICAgICAgICAgdHlwZTogJ2xpbmVDaGFydCcsXHJcbiAgICAgICAgLy8gICAgICAgICBoZWlnaHQ6IDMwMCxcclxuICAgICAgICAvLyAgICAgICAgIHdpZHRoOiA1MDAsXHJcbiAgICAgICAgLy8gICAgICAgICBtYXJnaW46IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0b3A6IDUwLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHJpZ2h0OiAyMCxcclxuICAgICAgICAvLyAgICAgICAgICAgICBib3R0b206IDUwLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxlZnQ6IDEwMFxyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgIHVzZUludGVyYWN0aXZlR3VpZGVsaW5lOiB0cnVlLFxyXG4gICAgICAgIC8vICAgICAgICAgeDogZnVuY3Rpb24gKGQ6IGFueSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybiBkLng7XHJcbiAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgIC8vICAgICAgICAgeTogZnVuY3Rpb24gKGQ6IGFueSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybiBkLnk7XHJcbiAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgIC8vICAgICAgICAgc2hvd1ZhbHVlczogdHJ1ZSxcclxuICAgICAgICAvLyAgICAgICAgIHZhbHVlRm9ybWF0OiBmdW5jdGlvbiAoZDogYW55KSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuIGQzLmZvcm1hdCgnLC40ZicpKGQpO1xyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogNTAwLFxyXG4gICAgICAgIC8vICAgICAgICAgeEF4aXM6IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBheGlzTGFiZWw6IHRoaXMueFVuaXQsLy8nRmxvdyAoZ3BtKScsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGlja0Zvcm1hdDogZnVuY3Rpb24gKGQ6IGFueSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gZDMuZm9ybWF0KCcsMnInKShkKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9LFxyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgIHlBeGlzOiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYXhpc0xhYmVsOiB0aGlzLnlVbml0LC8vJ1ByZXNzdXJlIChwc2kpJyxcclxuICAgICAgICAvLyAgICAgICAgICAgICBheGlzTGFiZWxEaXN0YW5jZTogLTEwXHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMuZGF0YSA9IFtcclxuICAgICAgICAvLyAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAga2V5OiAnVGVzdCAxJyxcclxuICAgICAgICAvLyAgICAgICAgIHZhbHVlczogW3tcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB5OiA1MFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB4OiAyMDAwLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgeTogMzBcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgeDogMzUwMCxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHk6IDBcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgLy8gICAgICAgICBjb2xvcjogJyMwMGE0ZTQnXHJcbiAgICAgICAgLy8gICAgIH0sIHtcclxuICAgICAgICAvLyAgICAgICAgIGtleTogJ1Rlc3QgMicsXHJcbiAgICAgICAgLy8gICAgICAgICB2YWx1ZXM6IFt7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgeTogMzBcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgeDogMzAwMCxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHk6IDIwXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHg6IDQ1MDAsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB5OiAwXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgIC8vICAgICAgICAgY29sb3I6ICcjZmJjYTVjJ1xyXG4gICAgICAgIC8vICAgICB9LCB7XHJcbiAgICAgICAgLy8gICAgICAgICBrZXk6ICdUZXN0IDMnLFxyXG4gICAgICAgIC8vICAgICAgICAgdmFsdWVzOiBbe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHk6IDEwXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHg6IDIwMDAsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB5OiAxMFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB4OiAzNTAwLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgeTogMFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAvLyAgICAgICAgIGNvbG9yOiAnIzkyYjQ1YidcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIF07XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy51cGRhdGVTZXJpZXNDb2xvcnModGhpcy5kYXRhRm9yQ2hhcnQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmRhdGEgaW4gZ3JhcGhzLmNvbXBvbmVudC50cyBmaWxlLicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU2VyaWVzQ29sb3JzKGRhdGEpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZGF0YVtpXS5jb2xvciA9IHRoaXMuY2hhcnRDb2xvcnNIaWVyYXJjaHlbaV07XHJcbiAgICAgICAgICAgIGlmKGRhdGFbaV0uZGFzaGVkKXtcclxuICAgICAgICAgICAgICAgIGRhdGFbaV0uY2xhc3NlZCA9ICdkYXNoZWQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG59Il19
