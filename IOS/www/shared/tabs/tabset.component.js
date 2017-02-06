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
var TabsetComponent = (function () {
    function TabsetComponent() {
        this.clazz = true;
        this.tabs = [];
        this.classMap = {};
    }
    Object.defineProperty(TabsetComponent.prototype, "vertical", {
        get: function () {
            return this._vertical;
        },
        set: function (value) {
            this._vertical = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TabsetComponent.prototype, "justified", {
        get: function () {
            return this._justified;
        },
        set: function (value) {
            this._justified = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TabsetComponent.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    ;
    TabsetComponent.prototype.ngOnInit = function () {
        this.type = this.type !== 'undefined' ? this.type : 'tabs';
    };
    TabsetComponent.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
    };
    TabsetComponent.prototype.addTab = function (tab) {
        this.tabs.push(tab);
        tab.active = this.tabs.length === 1 && tab.active !== false;
    };
    TabsetComponent.prototype.removeTab = function (tab) {
        var index = this.tabs.indexOf(tab);
        if (index === -1 || this.isDestroyed) {
            return;
        }
        if (tab.active && this.hasAvailableTabs(index)) {
            var newActiveIndex = this.getClosestTabIndex(index);
            this.tabs[newActiveIndex].active = true;
        }
        tab.removed.emit(tab);
        this.tabs.splice(index, 1);
    };
    TabsetComponent.prototype.getClosestTabIndex = function (index) {
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return -1;
        }
        for (var step = 1; step <= tabsLength; step += 1) {
            var prevIndex = index - step;
            var nextIndex = index + step;
            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                return prevIndex;
            }
            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                return nextIndex;
            }
        }
        return -1;
    };
    TabsetComponent.prototype.hasAvailableTabs = function (index) {
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return false;
        }
        for (var i = 0; i < tabsLength; i += 1) {
            if (!this.tabs[i].disabled && i !== index) {
                return true;
            }
        }
        return false;
    };
    TabsetComponent.prototype.setClassMap = function () {
        this.classMap = (_a = {
                'nav-stacked': this.vertical,
                'nav-justified': this.justified
            },
            _a['isc-nav-' + (this.type || 'tabs')] = true,
            _a
        );
        var _a;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TabsetComponent.prototype, "vertical", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TabsetComponent.prototype, "justified", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TabsetComponent.prototype, "type", null);
    __decorate([
        core_1.HostBinding('class.tab-container'), 
        __metadata('design:type', Boolean)
    ], TabsetComponent.prototype, "clazz", void 0);
    TabsetComponent = __decorate([
        core_1.Component({
            selector: 'isc-tabset',
            template: "\n    <div>\n    <ul class=\"isc-nav\" [ngClass]=\"classMap\" (click)=\"$event.preventDefault()\">\n        <li *ngFor=\"let tabz of tabs\" class=\"isc-nav-item {{tabz.customClass}}\"\n          [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\">\n          <a href=\"javascript:void(0);\" class=\"nav-link\"\n            [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\"\n            (click)=\"tabz.active = true\">\n            <span [ngTransclude]=\"tabz.headingRef\">{{tabz.heading}}</span>\n            <span *ngIf=\"tabz.removable\">\n              <span (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"glyphicon glyphicon-remove-circle\"></span>\n            </span>\n          </a>\n        </li>\n    </ul>\n    <div class=\"isc-tab-content\">\n      <ng-content></ng-content>\n    </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TabsetComponent);
    return TabsetComponent;
}());
exports.TabsetComponent = TabsetComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC90YWJzL3RhYnNldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFpRSxlQUFlLENBQUMsQ0FBQTtBQTRCakY7SUFBQTtRQWdCNkMsVUFBSyxHQUFXLElBQUksQ0FBQztRQWlCekQsU0FBSSxHQUF1QixFQUFFLENBQUM7UUFDOUIsYUFBUSxHQUFPLEVBQUUsQ0FBQztJQTJFM0IsQ0FBQztJQTNHQyxzQkFBVyxxQ0FBUTthQUFuQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7YUFjRCxVQUFvQixLQUFhO1lBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDOzs7T0FqQkE7O0lBR0Qsc0JBQVcsc0NBQVM7YUFBcEI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDO2FBY0QsVUFBcUIsS0FBYTtZQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckIsQ0FBQzs7O09BakJBOztJQUdELHNCQUFXLGlDQUFJO2FBQWY7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDO2FBY0QsVUFBZ0IsS0FBWTtZQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckIsQ0FBQzs7O09BakJBOztJQTJCTSxrQ0FBUSxHQUFmO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztJQUM3RCxDQUFDO0lBRU0scUNBQVcsR0FBbEI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUks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QUMsSUFBSSxDQUFDO1lBQ2QsQ0FBQztRQUNILENBQUM7UUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVPLHFDQUFXLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRztnQkFDZCxhQUFhLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQzVCLGVBQWUsRUFBRSxJQUFJLENBQUMsU0FBUzs7WUFDL0IsR0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxDQUFDLEdBQUUsSUFBSTs7U0FDM0MsQ0FBQzs7SUFDSixDQUFDO0lBM0dEO1FBQUMsWUFBSyxFQUFFOzttREFBQTtJQUtSO1FBQUMsWUFBSyxFQUFFOztvREFBQTtJQUtSO1FBQUMsWUFBSyxFQUFFOzsrQ0FBQTtJQUtSO1FBQUMsa0JBQVcsQ0FBQyxxQkFBcUIsQ0FBQzs7a0RBQUE7SUF2Q3JDO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSw0MUJBbUJUO1NBQ0YsQ0FBQzs7dUJBQUE7SUE4R0Ysc0JBQUM7QUFBRCxDQTdHQSxBQTZHQyxJQUFBO0FBN0dZLHVCQUFlLGtCQTZHM0IsQ0FBQSIsImZpbGUiOiJzaGFyZWQvdGFicy90YWJzZXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBUYWJEaXJlY3RpdmUgfSBmcm9tICcuL3RhYi5kaXJlY3RpdmUnO1xyXG4vLyB0b2RvOiBhZGQgYWN0aXZlIGV2ZW50IHRvIHRhYlxyXG4vLyB0b2RvOiBmaXg/IG1peGluZyBzdGF0aWMgYW5kIGR5bmFtaWMgdGFicyBwb3NpdGlvbiB0YWJzIGluIG9yZGVyIG9mIGNyZWF0aW9uXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaXNjLXRhYnNldCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXY+XHJcbiAgICA8dWwgY2xhc3M9XCJpc2MtbmF2XCIgW25nQ2xhc3NdPVwiY2xhc3NNYXBcIiAoY2xpY2spPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIj5cclxuICAgICAgICA8bGkgKm5nRm9yPVwibGV0IHRhYnogb2YgdGFic1wiIGNsYXNzPVwiaXNjLW5hdi1pdGVtIHt7dGFiei5jdXN0b21DbGFzc319XCJcclxuICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwidGFiei5hY3RpdmVcIiBbY2xhc3MuZGlzYWJsZWRdPVwidGFiei5kaXNhYmxlZFwiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cIm5hdi1saW5rXCJcclxuICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJ0YWJ6LmFjdGl2ZVwiIFtjbGFzcy5kaXNhYmxlZF09XCJ0YWJ6LmRpc2FibGVkXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cInRhYnouYWN0aXZlID0gdHJ1ZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBbbmdUcmFuc2NsdWRlXT1cInRhYnouaGVhZGluZ1JlZlwiPnt7dGFiei5oZWFkaW5nfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwidGFiei5yZW1vdmFibGVcIj5cclxuICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IHJlbW92ZVRhYih0YWJ6KTtcIiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlLWNpcmNsZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gICAgPGRpdiBjbGFzcz1cImlzYy10YWItY29udGVudFwiPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYnNldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBnZXQgdmVydGljYWwoKTpib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbDtcclxuICB9O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBnZXQganVzdGlmaWVkKCk6Ym9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fanVzdGlmaWVkO1xyXG4gIH07XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGdldCB0eXBlKCk6c3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl90eXBlO1xyXG4gIH07XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGFiLWNvbnRhaW5lcicpIHB1YmxpYyBjbGF6ejpib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgcHVibGljIHNldCB2ZXJ0aWNhbCh2YWx1ZTpib29sZWFuKSB7XHJcbiAgICB0aGlzLl92ZXJ0aWNhbCA9IHZhbHVlO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBqdXN0aWZpZWQodmFsdWU6Ym9vbGVhbikge1xyXG4gICAgdGhpcy5fanVzdGlmaWVkID0gdmFsdWU7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IHR5cGUodmFsdWU6c3RyaW5nKSB7XHJcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdGFiczpBcnJheTxUYWJEaXJlY3RpdmU+ID0gW107XHJcbiAgcHVibGljIGNsYXNzTWFwOmFueSA9IHt9O1xyXG5cclxuICBwcml2YXRlIGlzRGVzdHJveWVkOmJvb2xlYW47XHJcbiAgcHJpdmF0ZSBfdmVydGljYWw6Ym9vbGVhbjtcclxuICBwcml2YXRlIF9qdXN0aWZpZWQ6Ym9vbGVhbjtcclxuICBwcml2YXRlIF90eXBlOnN0cmluZztcclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCk6dm9pZCB7XHJcbiAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGUgIT09ICd1bmRlZmluZWQnID8gdGhpcy50eXBlIDogJ3RhYnMnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCk6dm9pZCB7XHJcbiAgICB0aGlzLmlzRGVzdHJveWVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRUYWIodGFiOlRhYkRpcmVjdGl2ZSk6dm9pZCB7XHJcbiAgICB0aGlzLnRhYnMucHVzaCh0YWIpO1xyXG4gICAgdGFiLmFjdGl2ZSA9IHRoaXMudGFicy5sZW5ndGggPT09IDEgJiYgdGFiLmFjdGl2ZSAhPT0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlVGFiKHRhYjpUYWJEaXJlY3RpdmUpOnZvaWQge1xyXG4gICAgbGV0IGluZGV4ID0gdGhpcy50YWJzLmluZGV4T2YodGFiKTtcclxuICAgIGlmIChpbmRleCA9PT0gLTEgfHwgdGhpcy5pc0Rlc3Ryb3llZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBTZWxlY3QgYSBuZXcgdGFiIGlmIHRoZSB0YWIgdG8gYmUgcmVtb3ZlZCBpcyBzZWxlY3RlZCBhbmQgbm90IGRlc3Ryb3llZFxyXG4gICAgaWYgKHRhYi5hY3RpdmUgJiYgdGhpcy5oYXNBdmFpbGFibGVUYWJzKGluZGV4KSkge1xyXG4gICAgICBsZXQgbmV3QWN0aXZlSW5kZXggPSB0aGlzLmdldENsb3Nlc3RUYWJJbmRleChpbmRleCk7XHJcbiAgICAgIHRoaXMudGFic1tuZXdBY3RpdmVJbmRleF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB0YWIucmVtb3ZlZC5lbWl0KHRhYik7XHJcbiAgICB0aGlzLnRhYnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Q2xvc2VzdFRhYkluZGV4KGluZGV4Om51bWJlcik6bnVtYmVyIHtcclxuICAgIGxldCB0YWJzTGVuZ3RoID0gdGhpcy50YWJzLmxlbmd0aDtcclxuICAgIGlmICghdGFic0xlbmd0aCkge1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgc3RlcCA9IDE7IHN0ZXAgPD0gdGFic0xlbmd0aDsgc3RlcCArPSAxKSB7XHJcbiAgICAgIGxldCBwcmV2SW5kZXggPSBpbmRleCAtIHN0ZXA7XHJcbiAgICAgIGxldCBuZXh0SW5kZXggPSBpbmRleCArIHN0ZXA7XHJcbiAgICAgIGlmICh0aGlzLnRhYnNbcHJldkluZGV4XSAmJiAhdGhpcy50YWJzW3ByZXZJbmRleF0uZGlzYWJsZWQpIHtcclxuICAgICAgICByZXR1cm4gcHJldkluZGV4O1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnRhYnNbbmV4dEluZGV4XSAmJiAhdGhpcy50YWJzW25leHRJbmRleF0uZGlzYWJsZWQpIHtcclxuICAgICAgICByZXR1cm4gbmV4dEluZGV4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLTE7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhc0F2YWlsYWJsZVRhYnMoaW5kZXg6bnVtYmVyKTpib29sZWFuIHtcclxuICAgIGxldCB0YWJzTGVuZ3RoID0gdGhpcy50YWJzLmxlbmd0aDtcclxuICAgIGlmICghdGFic0xlbmd0aCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzTGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgaWYgKCF0aGlzLnRhYnNbaV0uZGlzYWJsZWQgJiYgaSAhPT0gaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDbGFzc01hcCgpOnZvaWQge1xyXG4gICAgdGhpcy5jbGFzc01hcCA9IHtcclxuICAgICAgJ25hdi1zdGFja2VkJzogdGhpcy52ZXJ0aWNhbCxcclxuICAgICAgJ25hdi1qdXN0aWZpZWQnOiB0aGlzLmp1c3RpZmllZCxcclxuICAgICAgWydpc2MtbmF2LScgKyAodGhpcy50eXBlIHx8ICd0YWJzJyldOiB0cnVlXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=
