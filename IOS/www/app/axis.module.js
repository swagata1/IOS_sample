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
var axis_routes_1 = require('./axis.routes');
var home_module_1 = require('./home/home.module');
var dashboard_module_1 = require('./dashboard/dashboard.module');
var risk_improvements_module_1 = require("./risk-improvements/risk-improvements.module");
var hazards_module_1 = require("./hazards/hazards.module");
var time_comments_module_1 = require("./time-comments/time-comments.module");
var supervision_module_1 = require("./supervision/supervision.module");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var common_1 = require('@angular/common');
var axis_component_1 = require('./axis.component');
var index_1 = require('./../shared/index');
var nav_module_1 = require('./navigation/nav.module');
var broadcast_module_1 = require('./broadcast/broadcast.module');
var configuration_1 = require('./shared/configuration');
var ipcSenderService_1 = require('./shared/ipcSenderService');
var offline_service_1 = require('./shared/services/offline.service');
var common_service_1 = require('./shared/services/common.service');
var componentCommunicationService_1 = require('./shared/componentCommunicationService');
var localStorageService_1 = require('./shared/localStorageService');
var validationMessages_1 = require('./shared/validationMessages');
var AxisModule = (function () {
    function AxisModule() {
    }
    AxisModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, axis_routes_1.axisRouting,
                home_module_1.HomeModule, dashboard_module_1.DashboardModule,
                index_1.Ng2BootstrapModule,
                nav_module_1.NavModule,
                hazards_module_1.HazardsModule,
                broadcast_module_1.broadcastModule, risk_improvements_module_1.RiskImprovementsModule,
                time_comments_module_1.TimeAndCommentsModule,
                supervision_module_1.SupervisionModule,
            ],
            declarations: [axis_component_1.AxisComponent],
            bootstrap: [axis_component_1.AxisComponent],
            providers: [{ provide: common_1.APP_BASE_HREF, useValue: '' }, configuration_1.Configuration,
                ipcSenderService_1.ipcSenderService,
                offline_service_1.OfflineService,
                componentCommunicationService_1.ComponentCommunicationService,
                localStorageService_1.LocalStorageService, common_service_1.CommonService, validationMessages_1.ValidationMessages
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AxisModule);
    return AxisModule;
}());
exports.AxisModule = AxisModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9heGlzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBSUEsNEJBQW9DLGVBQWUsQ0FBQyxDQUFBO0FBQ3BELDRCQUEyQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2hELGlDQUFnQyw4QkFBOEIsQ0FBQyxDQUFBO0FBUy9ELHlDQUF1Qyw4Q0FBOEMsQ0FBQyxDQUFBO0FBRXRGLCtCQUE4QiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3pELHFDQUFzQyxzQ0FBc0MsQ0FBQyxDQUFBO0FBQzdFLG1DQUFrQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBS3JFLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxpQ0FBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQUMxRCxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFFM0MsdUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsK0JBQThCLGtCQUFrQixDQUFDLENBQUE7QUFDakQsc0JBQW1DLG1CQUFtQixDQUFDLENBQUE7QUFDdkQsMkJBQTBCLHlCQUF5QixDQUFDLENBQUE7QUFDcEQsaUNBQWdDLDhCQUE4QixDQUFDLENBQUE7QUFFL0QsOEJBQThCLHdCQUF3QixDQUFDLENBQUE7QUFDdkQsaUNBQWlDLDJCQUEyQixDQUFDLENBQUE7QUFDN0QsZ0NBQStCLG1DQUFtQyxDQUFDLENBQUE7QUFDbkUsK0JBQThCLGtDQUFrQyxDQUFDLENBQUE7QUFDakUsOENBQThDLHdDQUF3QyxDQUFDLENBQUE7QUFDdkYsb0NBQW9DLDhCQUE4QixDQUFDLENBQUE7QUFDbkUsbUNBQW1DLDZCQUE2QixDQUFDLENBQUE7QUE2QmpFO0lBQUE7SUFBMEIsQ0FBQztJQTNCM0I7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxnQ0FBYSxFQUFFLGlCQUFVLEVBQUUseUJBQVc7Z0JBRWhELHdCQUFVLEVBQUUsa0NBQWU7Z0JBRzNCLDBCQUFrQjtnQkFFbEIsc0JBQVM7Z0JBQ1QsOEJBQWE7Z0JBQ2Isa0NBQWUsRUFBRSxpREFBc0I7Z0JBRXZDLDRDQUFxQjtnQkFDckIsc0NBQWlCO2FBRWhCO1lBQ0QsWUFBWSxFQUFFLENBQUMsOEJBQWEsQ0FBQztZQUM3QixTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1lBQzFCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLHNCQUFhLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxFQUFFLDZCQUFhO2dCQUNuRSxtQ0FBZ0I7Z0JBQ2hCLGdDQUFjO2dCQUNkLDZEQUE2QjtnQkFDN0IseUNBQW1CLEVBQUUsOEJBQWEsRUFBRSx1Q0FBa0I7YUFDckQ7U0FDSixDQUFDOztrQkFBQTtJQUd3QixpQkFBQztBQUFELENBQTFCLEFBQTJCLElBQUE7QUFBZCxrQkFBVSxhQUFJLENBQUEiLCJmaWxlIjoiYXBwL2F4aXMubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgYW5haXIgb24gOS8xNy8xNi5cclxuICovXHJcblxyXG5pbXBvcnQgeyByb3V0ZXMsIGF4aXNSb3V0aW5nIH0gZnJvbSAnLi9heGlzLnJvdXRlcyc7XHJcbmltcG9ydCB7IEhvbWVNb2R1bGUgfSBmcm9tICcuL2hvbWUvaG9tZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRNb2R1bGUgfSBmcm9tICcuL2Rhc2hib2FyZC9kYXNoYm9hcmQubW9kdWxlJztcclxuLy8gaW1wb3J0IHsgU3VydmV5RGV0YWlsTW9kdWxlIH0gZnJvbSAnLi9zdXJ2ZXlkZXRhaWwvc3VydmV5LmRldGFpbC5tb2R1bGUnO1xyXG4vLyBpbXBvcnQgeyBEZXRhaWxzUGFnZU1vZHVsZSB9IGZyb20gJy4vZGV0YWlsc3BhZ2UvZGV0YWlsc3BhZ2UubW9kdWxlJztcclxuLy8gaW1wb3J0IHsgQ29uc3RydWN0aW9uTW9kdWxlIH0gZnJvbSAnLi9jb25zdHJ1Y3Rpb24vY29uc3RydWN0aW9uLm1vZHVsZSc7XHJcbi8vIGltcG9ydCB7IE9jY3VwYW5jeU1vZHVsZSB9IGZyb20gJy4vb2NjdXBhbmN5L29jY3VwYW5jeS5tb2R1bGUnO1xyXG4vLyBpbXBvcnQgeyBTcHJpbmtsZXJzTW9kdWxlIH0gZnJvbSAnLi9zcHJpbmtsZXJzL3Nwcmlua2xlcnMubW9kdWxlJztcclxuLy8gaW1wb3J0IHsgV2F0ZXJTdXBwbGllc01vZHVsZSB9IGZyb20gJy4vd2F0ZXJTdXBwbGllcy93YXRlclN1cHBsaWVzLm1vZHVsZSc7XHJcbi8vIGltcG9ydCB7IFVwbG9hZFN1cnZleU1vZHVsZSB9IGZyb20gXCIuL3VwbG9hZFN1cnZleS91cGxvYWRTdXJ2ZXkubW9kdWxlXCI7XHJcbi8vIGltcG9ydCB7IEZpcmVMb3NzTW9kdWxlIH0gZnJvbSBcIi4vZmlyZUxvc3MvZmlyZUxvc3MubW9kdWxlXCI7XHJcbmltcG9ydCB7IFJpc2tJbXByb3ZlbWVudHNNb2R1bGUgfSBmcm9tIFwiLi9yaXNrLWltcHJvdmVtZW50cy9yaXNrLWltcHJvdmVtZW50cy5tb2R1bGVcIjtcclxuLy8gaW1wb3J0IHsgTmF0Q2F0TW9kdWxlIH0gZnJvbSBcIi4vbmF0LWNhdC9uYXQtY2F0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBIYXphcmRzTW9kdWxlIH0gZnJvbSBcIi4vaGF6YXJkcy9oYXphcmRzLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBUaW1lQW5kQ29tbWVudHNNb2R1bGUgfSBmcm9tIFwiLi90aW1lLWNvbW1lbnRzL3RpbWUtY29tbWVudHMubW9kdWxlXCI7XHJcbmltcG9ydCB7IFN1cGVydmlzaW9uTW9kdWxlIH0gZnJvbSBcIi4vc3VwZXJ2aXNpb24vc3VwZXJ2aXNpb24ubW9kdWxlXCI7XHJcbi8vIGltcG9ydCB7IEV4cG9zdXJlc01vZHVsZSB9IGZyb20gXCIuL2V4cG9zdXJlcy9leHBvc3VyZXMubW9kdWxlXCI7XHJcbi8vIGltcG9ydCB7IFByb3RlY3Rpb25Nb2R1bGUgfSBmcm9tIFwiLi9wcm90ZWN0aW9uL3Byb3RlY3Rpb24ubW9kdWxlXCI7XHJcbi8vIGltcG9ydCB7IE1hbmFnZW1lbnRQcm9ncmFtc01vZHVsZSB9IGZyb20gXCIuL21hbmFnZW1lbnQtcHJvZ3JhbXMvbWFuYWdlbWVudC1wcm9ncmFtcy5tb2R1bGVcIjtcclxuXHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEFQUF9CQVNFX0hSRUYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9heGlzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5nMkJvb3RzdHJhcE1vZHVsZSB9IGZyb20gJy4vLi4vc2hhcmVkL2luZGV4JztcclxuaW1wb3J0IHsgTmF2TW9kdWxlIH0gZnJvbSAnLi9uYXZpZ2F0aW9uL25hdi5tb2R1bGUnO1xyXG5pbXBvcnQgeyBicm9hZGNhc3RNb2R1bGUgfSBmcm9tICcuL2Jyb2FkY2FzdC9icm9hZGNhc3QubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuL3NoYXJlZC9jb25maWd1cmF0aW9uJztcclxuaW1wb3J0IHsgaXBjU2VuZGVyU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL2lwY1NlbmRlclNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPZmZsaW5lU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3NlcnZpY2VzL29mZmxpbmUuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbW1vblNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9zZXJ2aWNlcy9jb21tb24uc2VydmljZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudENvbW11bmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvY29tcG9uZW50Q29tbXVuaWNhdGlvblNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvbG9jYWxTdG9yYWdlU2VydmljZSc7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25NZXNzYWdlcyB9IGZyb20gJy4vc2hhcmVkL3ZhbGlkYXRpb25NZXNzYWdlcyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW0Jyb3dzZXJNb2R1bGUsIEh0dHBNb2R1bGUsIGF4aXNSb3V0aW5nLCBcclxuICAgIC8vVXBsb2FkU3VydmV5TW9kdWxlLCBGaXJlTG9zc01vZHVsZSwgXHJcbiAgICBIb21lTW9kdWxlLCBEYXNoYm9hcmRNb2R1bGUsIFxyXG4gICAgLy9TdXJ2ZXlEZXRhaWxNb2R1bGUsIERldGFpbHNQYWdlTW9kdWxlLCBDb25zdHJ1Y3Rpb25Nb2R1bGUsIFxyXG4gICAgLy9TcHJpbmtsZXJzTW9kdWxlLCBcclxuICAgIE5nMkJvb3RzdHJhcE1vZHVsZSwgXHJcbiAgICAvL09jY3VwYW5jeU1vZHVsZSwgV2F0ZXJTdXBwbGllc01vZHVsZSwgXHJcbiAgICBOYXZNb2R1bGUsIFxyXG4gICAgSGF6YXJkc01vZHVsZSxcclxuICAgIGJyb2FkY2FzdE1vZHVsZSwgUmlza0ltcHJvdmVtZW50c01vZHVsZSxcclxuICAgIC8vIE5hdENhdE1vZHVsZSwgIFxyXG4gICAgVGltZUFuZENvbW1lbnRzTW9kdWxlLFxyXG4gICAgU3VwZXJ2aXNpb25Nb2R1bGUsIFxyXG4gICAgLy9FeHBvc3VyZXNNb2R1bGUsIFByb3RlY3Rpb25Nb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtBeGlzQ29tcG9uZW50XSxcclxuICAgIGJvb3RzdHJhcDogW0F4aXNDb21wb25lbnRdLFxyXG4gICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBBUFBfQkFTRV9IUkVGLCB1c2VWYWx1ZTogJycgfSwgQ29uZmlndXJhdGlvbiwgXHJcbiAgICBpcGNTZW5kZXJTZXJ2aWNlLCBcclxuICAgIE9mZmxpbmVTZXJ2aWNlLCBcclxuICAgIENvbXBvbmVudENvbW11bmljYXRpb25TZXJ2aWNlLFxyXG4gICAgTG9jYWxTdG9yYWdlU2VydmljZSwgQ29tbW9uU2VydmljZSwgVmFsaWRhdGlvbk1lc3NhZ2VzXHJcbiAgICBdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEF4aXNNb2R1bGUgeyB9XHJcblxyXG4iXX0=
