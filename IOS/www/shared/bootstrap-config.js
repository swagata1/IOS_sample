"use strict";
var browser_1 = require('./utils/facade/browser');
(function (Ng2BootstrapTheme) {
    Ng2BootstrapTheme[Ng2BootstrapTheme["BS3"] = 1] = "BS3";
    Ng2BootstrapTheme[Ng2BootstrapTheme["BS4"] = 2] = "BS4";
})(exports.Ng2BootstrapTheme || (exports.Ng2BootstrapTheme = {}));
var Ng2BootstrapTheme = exports.Ng2BootstrapTheme;
var Ng2BootstrapConfig = (function () {
    function Ng2BootstrapConfig() {
    }
    Object.defineProperty(Ng2BootstrapConfig, "theme", {
        get: function () {
            if (browser_1.window.__theme === 'bs4') {
                return Ng2BootstrapTheme.BS4;
            }
            return (this._theme || Ng2BootstrapTheme.BS3);
        },
        set: function (v) {
            this._theme = v;
        },
        enumerable: true,
        configurable: true
    });
    return Ng2BootstrapConfig;
}());
exports.Ng2BootstrapConfig = Ng2BootstrapConfig;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9ib290c3RyYXAtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx3QkFBdUIsd0JBQXdCLENBQUMsQ0FBQTtBQUVoRCxXQUFZLGlCQUFpQjtJQUFFLHVEQUFPLENBQUE7SUFBRSx1REFBTyxDQUFBO0FBQUEsQ0FBQyxFQUFwQyx5QkFBaUIsS0FBakIseUJBQWlCLFFBQW1CO0FBQWhELElBQVksaUJBQWlCLEdBQWpCLHlCQUFvQyxDQUFBO0FBRWhEO0lBQUE7SUFjQSxDQUFDO0lBWEMsc0JBQWtCLDJCQUFLO2FBQXZCO1lBRUUsRUFBRSxDQUFDLENBQUMsZ0JBQU0sQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQztZQUMvQixDQUFDO1lBQ0QsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRCxDQUFDO2FBRUQsVUFBd0IsQ0FBbUI7WUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDbEIsQ0FBQzs7O09BSkE7SUFLSCx5QkFBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBZFksMEJBQWtCLHFCQWM5QixDQUFBIiwiZmlsZSI6InNoYXJlZC9ib290c3RyYXAtY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2luZG93IH0gZnJvbSAnLi91dGlscy9mYWNhZGUvYnJvd3Nlcic7XHJcblxyXG5leHBvcnQgZW51bSBOZzJCb290c3RyYXBUaGVtZSB7QlMzID0gMSwgQlM0ID0gMn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOZzJCb290c3RyYXBDb25maWcge1xyXG4gIHByaXZhdGUgc3RhdGljIF90aGVtZTpOZzJCb290c3RyYXBUaGVtZTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXQgdGhlbWUoKTpOZzJCb290c3RyYXBUaGVtZSB7XHJcbiAgICAvLyBoYWNrIGFzIGZvciBub3dcclxuICAgIGlmICh3aW5kb3cuX190aGVtZSA9PT0gJ2JzNCcpIHtcclxuICAgICAgcmV0dXJuIE5nMkJvb3RzdHJhcFRoZW1lLkJTNDtcclxuICAgIH1cclxuICAgIHJldHVybiAodGhpcy5fdGhlbWUgfHwgTmcyQm9vdHN0cmFwVGhlbWUuQlMzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc2V0IHRoZW1lKHY6TmcyQm9vdHN0cmFwVGhlbWUpIHtcclxuICAgIHRoaXMuX3RoZW1lID0gdjtcclxuICB9XHJcbn0iXX0=
