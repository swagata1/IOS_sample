"use strict";
var DateConverterService = (function () {
    function DateConverterService() {
    }
    DateConverterService.prototype.graspToISO = function (str) {
        return str.substring(0, 4) + '-' +
            str.substring(4, 6) + '-' +
            str.substring(6, 8) + 'T' +
            str.substring(9, 11) + ':' +
            str.substring(11, 13) + ':' +
            str.substring(13, 19) + 'Z';
    };
    return DateConverterService;
}());
exports.DateConverterService = DateConverterService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvZGF0ZUNvbnZlcnRlclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBRUk7SUFDQSxDQUFDO0lBRU0seUNBQVUsR0FBakIsVUFBbUIsR0FBRztRQUNsQixNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUMsR0FBRztZQUNyQixHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBQyxHQUFHO1lBQ3RCLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFDLEdBQUc7WUFDdEIsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEdBQUMsR0FBRztZQUN2QixHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsR0FBQyxHQUFHO1lBQ3hCLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxHQUFDLEdBQUcsQ0FBQztJQUNyQyxDQUFDO0lBQ0wsMkJBQUM7QUFBRCxDQWJBLEFBYUMsSUFBQTtBQWJZLDRCQUFvQix1QkFhaEMsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL2RhdGVDb252ZXJ0ZXJTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBjbGFzcyBEYXRlQ29udmVydGVyU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdyYXNwVG9JU08oIHN0ciApOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBzdHIuc3Vic3RyaW5nKDAsNCkrJy0nK1xyXG4gICAgICAgICAgICAgICAgc3RyLnN1YnN0cmluZyg0LDYpKyctJytcclxuICAgICAgICAgICAgICAgIHN0ci5zdWJzdHJpbmcoNiw4KSsnVCcrXHJcbiAgICAgICAgICAgICAgICBzdHIuc3Vic3RyaW5nKDksMTEpKyc6JytcclxuICAgICAgICAgICAgICAgIHN0ci5zdWJzdHJpbmcoMTEsMTMpKyc6JytcclxuICAgICAgICAgICAgICAgIHN0ci5zdWJzdHJpbmcoMTMsMTkpKydaJztcclxuICAgIH1cclxufSJdfQ==
