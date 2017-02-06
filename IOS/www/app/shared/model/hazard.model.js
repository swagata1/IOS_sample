"use strict";
var Hazard = (function () {
    function Hazard() {
        this.SPECIFIC_LOCATION_NM = "";
        this.HAZARD_MAIN_TYPE_CD = "";
        this.HAZARD_TYPE_CD = "";
        this.HAZARD_CATEGORY_CD = "";
        this.HAZARD_AREA_SIZE_QT = "";
        this.HAZARD_CLASS_CD = "";
        this.STORAGE_ARRANGEMENT_CD = "";
        this.STORAGE_HEIGHT_QT = "";
        this.CEILING_HEIGHT_QT = "";
        this.PREDOMINANT_CLASS_CD = "";
        this.HazardComments = [
            {
                "BUILDING_LOCATION": "",
                "CEILING_HEIGHT_QT": "",
                "COMMENTS_IN": "",
                "DEFICIENCIES_CD": "",
                "HAZARD_CATEGORY_CD": "",
                "HAZARD_ID": "",
                "HAZARD_MAIN_TYPE_CD": "",
                "HAZARD_TYPE_CD": "",
                "IncludeThisSection": "",
                "LOCATION_ASSESSMENT_ID": "",
                "Memo_Field_usedspace": " ",
                "PREDOMINANT_CLASS_CD": "",
                "PrimaryLanguage": "",
                "SPECIFIC_LOCATION_NM": "",
                "STORAGE_ARRANGEMENT_CD": "",
                "STORAGE_HEIGHT_QT": "",
                "pxCommitDateTime": "",
                "pxInsName": "",
                "pxObjClass": "",
                "pxSaveDateTime": "",
                "pyLabel": "",
                "pzInsKey": ""
            }
        ];
        this.sprinklers = [];
    }
    return Hazard;
}());
exports.Hazard = Hazard;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbW9kZWwvaGF6YXJkLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQUFBO1FBRUMseUJBQW9CLEdBQVksRUFBRSxDQUFDO1FBQ2hDLHdCQUFtQixHQUFZLEVBQUUsQ0FBQztRQUNsQyxtQkFBYyxHQUFZLEVBQUUsQ0FBQztRQUM3Qix1QkFBa0IsR0FBWSxFQUFFLENBQUM7UUFDakMsd0JBQW1CLEdBQVksRUFBRSxDQUFDO1FBQ2xDLG9CQUFlLEdBQVksRUFBRSxDQUFDO1FBQzlCLDJCQUFzQixHQUFZLEVBQUUsQ0FBQztRQUNyQyxzQkFBaUIsR0FBWSxFQUFFLENBQUM7UUFDaEMsc0JBQWlCLEdBQVksRUFBRSxDQUFDO1FBQ2hDLHlCQUFvQixHQUFZLEVBQUUsQ0FBQztRQUNuQyxtQkFBYyxHQUFTO1lBQ0M7Z0JBQ0csbUJBQW1CLEVBQUMsRUFBRTtnQkFDckIsbUJBQW1CLEVBQUMsRUFBRTtnQkFDdEIsYUFBYSxFQUFDLEVBQUU7Z0JBQ2hCLGlCQUFpQixFQUFDLEVBQUU7Z0JBQ3BCLG9CQUFvQixFQUFDLEVBQUU7Z0JBQ3ZCLFdBQVcsRUFBQyxFQUFFO2dCQUNkLHFCQUFxQixFQUFDLEVBQUU7Z0JBQ3hCLGdCQUFnQixFQUFDLEVBQUU7Z0JBQ25CLG9CQUFvQixFQUFDLEVBQUU7Z0JBQ3ZCLHdCQUF3QixFQUFDLEVBQUU7Z0JBQzNCLHNCQUFzQixFQUFDLEdBQUc7Z0JBQzFCLHNCQUFzQixFQUFDLEVBQUU7Z0JBQ3pCLGlCQUFpQixFQUFDLEVBQUU7Z0JBQ3BCLHNCQUFzQixFQUFDLEVBQUU7Z0JBQ3pCLHdCQUF3QixFQUFDLEVBQUU7Z0JBQzNCLG1CQUFtQixFQUFDLEVBQUU7Z0JBQ3RCLGtCQUFrQixFQUFDLEVBQUU7Z0JBQ3JCLFdBQVcsRUFBQyxFQUFFO2dCQUNkLFlBQVksRUFBQyxFQUFFO2dCQUNmLGdCQUFnQixFQUFDLEVBQUU7Z0JBQ25CLFNBQVMsRUFBQyxFQUFFO2dCQUNaLFVBQVUsRUFBQyxFQUFFO2FBQ2hCO1NBRUgsQ0FBQztRQUd2QixlQUFVLEdBQWdCLEVBQUUsQ0FBQztJQUdqQyxDQUFDO0lBQUQsYUFBQztBQUFELENBNUNBLEFBNENDLElBQUE7QUE1Q1ksY0FBTSxTQTRDbEIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL21vZGVsL2hhemFyZC5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBIYXphcmQge1xyXG5cclxuIFNQRUNJRklDX0xPQ0FUSU9OX05NIDogc3RyaW5nID0gXCJcIjtcclxuICAgIEhBWkFSRF9NQUlOX1RZUEVfQ0QgOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgSEFaQVJEX1RZUEVfQ0QgOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgSEFaQVJEX0NBVEVHT1JZX0NEIDogc3RyaW5nID0gXCJcIjtcclxuICAgIEhBWkFSRF9BUkVBX1NJWkVfUVQgOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgSEFaQVJEX0NMQVNTX0NEIDogc3RyaW5nID0gXCJcIjtcclxuICAgIFNUT1JBR0VfQVJSQU5HRU1FTlRfQ0QgOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgU1RPUkFHRV9IRUlHSFRfUVQgOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgQ0VJTElOR19IRUlHSFRfUVQgOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgUFJFRE9NSU5BTlRfQ0xBU1NfQ0QgOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgSGF6YXJkQ29tbWVudHMgOiBhbnkgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkJVSUxESU5HX0xPQ0FUSU9OXCI6XCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNFSUxJTkdfSEVJR0hUX1FUXCI6XCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNPTU1FTlRTX0lOXCI6XCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkRFRklDSUVOQ0lFU19DRFwiOlwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJIQVpBUkRfQ0FURUdPUllfQ0RcIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSEFaQVJEX0lEXCI6XCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkhBWkFSRF9NQUlOX1RZUEVfQ0RcIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSEFaQVJEX1RZUEVfQ0RcIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSW5jbHVkZVRoaXNTZWN0aW9uXCI6XCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxPQ0FUSU9OX0FTU0VTU01FTlRfSURcIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTWVtb19GaWVsZF91c2Vkc3BhY2VcIjpcIiBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlBSRURPTUlOQU5UX0NMQVNTX0NEXCI6XCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlByaW1hcnlMYW5ndWFnZVwiOlwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTUEVDSUZJQ19MT0NBVElPTl9OTVwiOlwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTVE9SQUdFX0FSUkFOR0VNRU5UX0NEXCI6XCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlNUT1JBR0VfSEVJR0hUX1FUXCI6XCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB4Q29tbWl0RGF0ZVRpbWVcIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHhJbnNOYW1lXCI6XCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB4T2JqQ2xhc3NcIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHhTYXZlRGF0ZVRpbWVcIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHlMYWJlbFwiOlwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwekluc0tleVwiOlwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgLy9QcmltYXJ5TGFuZ3VhZ2U6IHN0cmluZztcclxuXHJcbiAgICBzcHJpbmtsZXJzOiBTcHJpbmtsZXJbXSA9IFtdO1xyXG4gICAgLy8gcmlzOiBSaXNrSW1wcm92ZW1lbnRbXSA9IFtdO1xyXG4gICAgSEFaQVJEX1JBTkRPTV9JRF9UT0xJTks6IGFueTtcclxufSJdfQ==