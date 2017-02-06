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
var core_1 = require("@angular/core");
var SurgeTiv = (function () {
    function SurgeTiv() {
    }
    SurgeTiv.prototype.transform = function (pdvalue, teValue) {
        return (parseInt(pdvalue) + parseInt(teValue));
    };
    SurgeTiv = __decorate([
        core_1.Pipe({
            name: "surgetiv"
        }), 
        __metadata('design:paramtypes', [])
    ], SurgeTiv);
    return SurgeTiv;
}());
exports.SurgeTiv = SurgeTiv;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcGlwZXMvc3VyZ2UtdGl2LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFvQyxlQUFlLENBQUMsQ0FBQTtBQU1wRDtJQUFBO0lBS0EsQ0FBQztJQUpBLDRCQUFTLEdBQVQsVUFBVSxPQUFXLEVBQUMsT0FBVztRQUUvQixNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQVJGO1FBQUMsV0FBSSxDQUFDO1lBQ0wsSUFBSSxFQUFFLFVBQVU7U0FDaEIsQ0FBQzs7Z0JBQUE7SUFPRixlQUFDO0FBQUQsQ0FMQSxBQUtDLElBQUE7QUFMWSxnQkFBUSxXQUtwQixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvcGlwZXMvc3VyZ2UtdGl2LnBpcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBQaXBlKHtcclxuXHRuYW1lIDpcInN1cmdldGl2XCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTdXJnZVRpdiBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm17XHJcblx0dHJhbnNmb3JtKHBkdmFsdWU6YW55LHRlVmFsdWU6YW55KVxyXG5cdHtcdFxyXG5cdCAgcmV0dXJuIChwYXJzZUludChwZHZhbHVlKStwYXJzZUludCh0ZVZhbHVlKSk7XHRcclxuXHR9XHRcclxufSJdfQ==
