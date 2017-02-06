"use strict";
var PositionService = (function () {
    function PositionService() {
    }
    PositionService.prototype.position = function (nativeEl) {
        var elBCR = this.offset(nativeEl);
        var offsetParentBCR = { top: 0, left: 0 };
        var offsetParentEl = this.parentOffsetEl(nativeEl);
        if (offsetParentEl !== this.document) {
            offsetParentBCR = this.offset(offsetParentEl);
            offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
            offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }
        var boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: elBCR.top - offsetParentBCR.top,
            left: elBCR.left - offsetParentBCR.left
        };
    };
    PositionService.prototype.offset = function (nativeEl) {
        var boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: boundingClientRect.top + (this.window.pageYOffset || this.document.documentElement.scrollTop),
            left: boundingClientRect.left + (this.window.pageXOffset || this.document.documentElement.scrollLeft)
        };
    };
    PositionService.prototype.positionElements = function (hostEl, targetEl, positionStr, appendToBody) {
        var positionStrParts = positionStr.split('-');
        var pos0 = positionStrParts[0];
        var pos1 = positionStrParts[1] || 'center';
        var hostElPos = appendToBody ?
            this.offset(hostEl) :
            this.position(hostEl);
        var targetElWidth = targetEl.offsetWidth;
        var targetElHeight = targetEl.offsetHeight;
        var shiftWidth = {
            center: function () {
                return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
            },
            left: function () {
                return hostElPos.left;
            },
            right: function () {
                return hostElPos.left + hostElPos.width;
            }
        };
        var shiftHeight = {
            center: function () {
                return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
            },
            top: function () {
                return hostElPos.top;
            },
            bottom: function () {
                return hostElPos.top + hostElPos.height;
            }
        };
        var targetElPos;
        switch (pos0) {
            case 'right':
                targetElPos = {
                    top: shiftHeight[pos1](),
                    left: shiftWidth[pos0]()
                };
                break;
            case 'left':
                targetElPos = {
                    top: shiftHeight[pos1](),
                    left: hostElPos.left - targetElWidth
                };
                break;
            case 'bottom':
                targetElPos = {
                    top: shiftHeight[pos0](),
                    left: shiftWidth[pos1]()
                };
                break;
            default:
                targetElPos = {
                    top: hostElPos.top - targetElHeight,
                    left: shiftWidth[pos1]()
                };
                break;
        }
        return targetElPos;
    };
    Object.defineProperty(PositionService.prototype, "window", {
        get: function () {
            return window;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PositionService.prototype, "document", {
        get: function () {
            return window.document;
        },
        enumerable: true,
        configurable: true
    });
    PositionService.prototype.getStyle = function (nativeEl, cssProp) {
        if (nativeEl.currentStyle) {
            return nativeEl.currentStyle[cssProp];
        }
        if (this.window.getComputedStyle) {
            return this.window.getComputedStyle(nativeEl)[cssProp];
        }
        return nativeEl.style[cssProp];
    };
    PositionService.prototype.isStaticPositioned = function (nativeEl) {
        return (this.getStyle(nativeEl, 'position') || 'static') === 'static';
    };
    PositionService.prototype.parentOffsetEl = function (nativeEl) {
        var offsetParent = nativeEl.offsetParent || this.document;
        while (offsetParent && offsetParent !== this.document &&
            this.isStaticPositioned(offsetParent)) {
            offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || this.document;
    };
    ;
    return PositionService;
}());
exports.PositionService = PositionService;
exports.positionService = new PositionService();

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QWMsR0FBdEIsVUFBdUIsUUFBb0I7UUFDekMsSUFBSSxZQUFZLEdBQU8sUUFBUSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzlELE9BQU8sWUFBWSxJQUFJLFlBQVksS0FBSyxJQUFJLENBQUMsUUFBUTtZQUNyRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUN0QyxZQUFZLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQztRQUMzQyxDQUFDO1FBQ0QsTUFBTSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZDLENBQUM7O0lBQ0gsc0JBQUM7QUFBRCxDQW5KQSxBQW1KQyxJQUFBO0FBbkpZLHVCQUFlLGtCQW1KM0IsQ0FBQTtBQUVZLHVCQUFlLEdBQW1CLElBQUksZUFBZSxFQUFFLENBQUMiLCJmaWxlIjoic2hhcmVkL3Bvc2l0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS2V5QXR0cmlidXRlIH0gZnJvbSAnLi9jb21tb24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvc2l0aW9uU2VydmljZSB7XHJcbiAgLyoqXHJcbiAgICogUHJvdmlkZXMgcmVhZC1vbmx5IGVxdWl2YWxlbnQgb2YgalF1ZXJ5J3MgcG9zaXRpb24gZnVuY3Rpb246XHJcbiAgICogaHR0cDovL2FwaS5qcXVlcnkuY29tL3Bvc2l0aW9uL1xyXG4gICAqL1xyXG4gIHB1YmxpYyBwb3NpdGlvbihuYXRpdmVFbDpIVE1MRWxlbWVudCk6e3dpZHRoOm51bWJlciwgaGVpZ2h0Om51bWJlciwgdG9wOm51bWJlciwgbGVmdDpudW1iZXJ9IHtcclxuICAgIGxldCBlbEJDUiA9IHRoaXMub2Zmc2V0KG5hdGl2ZUVsKTtcclxuICAgIGxldCBvZmZzZXRQYXJlbnRCQ1IgPSB7dG9wOiAwLCBsZWZ0OiAwfTtcclxuICAgIGxldCBvZmZzZXRQYXJlbnRFbCA9IHRoaXMucGFyZW50T2Zmc2V0RWwobmF0aXZlRWwpO1xyXG4gICAgaWYgKG9mZnNldFBhcmVudEVsICE9PSB0aGlzLmRvY3VtZW50IGFzIGFueSkge1xyXG4gICAgICBvZmZzZXRQYXJlbnRCQ1IgPSB0aGlzLm9mZnNldChvZmZzZXRQYXJlbnRFbCk7XHJcbiAgICAgIG9mZnNldFBhcmVudEJDUi50b3AgKz0gb2Zmc2V0UGFyZW50RWwuY2xpZW50VG9wIC0gb2Zmc2V0UGFyZW50RWwuc2Nyb2xsVG9wO1xyXG4gICAgICBvZmZzZXRQYXJlbnRCQ1IubGVmdCArPSBvZmZzZXRQYXJlbnRFbC5jbGllbnRMZWZ0IC0gb2Zmc2V0UGFyZW50RWwuc2Nyb2xsTGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgYm91bmRpbmdDbGllbnRSZWN0ID0gbmF0aXZlRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB3aWR0aDogYm91bmRpbmdDbGllbnRSZWN0LndpZHRoIHx8IG5hdGl2ZUVsLm9mZnNldFdpZHRoLFxyXG4gICAgICBoZWlnaHQ6IGJvdW5kaW5nQ2xpZW50UmVjdC5oZWlnaHQgfHwgbmF0aXZlRWwub2Zmc2V0SGVpZ2h0LFxyXG4gICAgICB0b3A6IGVsQkNSLnRvcCAtIG9mZnNldFBhcmVudEJDUi50b3AsXHJcbiAgICAgIGxlZnQ6IGVsQkNSLmxlZnQgLSBvZmZzZXRQYXJlbnRCQ1IubGVmdFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb3ZpZGVzIHJlYWQtb25seSBlcXVpdmFsZW50IG9mIGpRdWVyeSdzIG9mZnNldCBmdW5jdGlvbjpcclxuICAgKiBodHRwOi8vYXBpLmpxdWVyeS5jb20vb2Zmc2V0L1xyXG4gICAqL1xyXG4gIHB1YmxpYyBvZmZzZXQobmF0aXZlRWw6YW55KTp7d2lkdGg6bnVtYmVyLCBoZWlnaHQ6bnVtYmVyLCB0b3A6bnVtYmVyLCBsZWZ0Om51bWJlcn0ge1xyXG4gICAgbGV0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IG5hdGl2ZUVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgd2lkdGg6IGJvdW5kaW5nQ2xpZW50UmVjdC53aWR0aCB8fCBuYXRpdmVFbC5vZmZzZXRXaWR0aCxcclxuICAgICAgaGVpZ2h0OiBib3VuZGluZ0NsaWVudFJlY3QuaGVpZ2h0IHx8IG5hdGl2ZUVsLm9mZnNldEhlaWdodCxcclxuICAgICAgdG9wOiBib3VuZGluZ0NsaWVudFJlY3QudG9wICsgKHRoaXMud2luZG93LnBhZ2VZT2Zmc2V0IHx8IHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCksXHJcbiAgICAgIGxlZnQ6IGJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0ICsgKHRoaXMud2luZG93LnBhZ2VYT2Zmc2V0IHx8IHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUHJvdmlkZXMgY29vcmRpbmF0ZXMgZm9yIHRoZSB0YXJnZXRFbCBpbiByZWxhdGlvbiB0byBob3N0RWxcclxuICAgKi9cclxuICBwdWJsaWMgcG9zaXRpb25FbGVtZW50cyhob3N0RWw6SFRNTEVsZW1lbnQsIHRhcmdldEVsOkhUTUxFbGVtZW50LCBwb3NpdGlvblN0cjpzdHJpbmcsIGFwcGVuZFRvQm9keTpib29sZWFuKTp7dG9wOm51bWJlciwgbGVmdDpudW1iZXJ9IHtcclxuICAgIGxldCBwb3NpdGlvblN0clBhcnRzID0gcG9zaXRpb25TdHIuc3BsaXQoJy0nKTtcclxuICAgIGxldCBwb3MwID0gcG9zaXRpb25TdHJQYXJ0c1swXTtcclxuICAgIGxldCBwb3MxID0gcG9zaXRpb25TdHJQYXJ0c1sxXSB8fCAnY2VudGVyJztcclxuICAgIGxldCBob3N0RWxQb3MgPSBhcHBlbmRUb0JvZHkgP1xyXG4gICAgICB0aGlzLm9mZnNldChob3N0RWwpIDpcclxuICAgICAgdGhpcy5wb3NpdGlvbihob3N0RWwpO1xyXG4gICAgbGV0IHRhcmdldEVsV2lkdGggPSB0YXJnZXRFbC5vZmZzZXRXaWR0aDtcclxuICAgIGxldCB0YXJnZXRFbEhlaWdodCA9IHRhcmdldEVsLm9mZnNldEhlaWdodDtcclxuICAgIGxldCBzaGlmdFdpZHRoOktleUF0dHJpYnV0ZSA9IHtcclxuICAgICAgY2VudGVyOiBmdW5jdGlvbiAoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBob3N0RWxQb3MubGVmdCArIGhvc3RFbFBvcy53aWR0aCAvIDIgLSB0YXJnZXRFbFdpZHRoIC8gMjtcclxuICAgICAgfSxcclxuICAgICAgbGVmdDogZnVuY3Rpb24gKCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gaG9zdEVsUG9zLmxlZnQ7XHJcbiAgICAgIH0sXHJcbiAgICAgIHJpZ2h0OiBmdW5jdGlvbiAoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBob3N0RWxQb3MubGVmdCArIGhvc3RFbFBvcy53aWR0aDtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgc2hpZnRIZWlnaHQ6S2V5QXR0cmlidXRlID0ge1xyXG4gICAgICBjZW50ZXI6IGZ1bmN0aW9uICgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy50b3AgKyBob3N0RWxQb3MuaGVpZ2h0IC8gMiAtIHRhcmdldEVsSGVpZ2h0IC8gMjtcclxuICAgICAgfSxcclxuICAgICAgdG9wOiBmdW5jdGlvbiAoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBob3N0RWxQb3MudG9wO1xyXG4gICAgICB9LFxyXG4gICAgICBib3R0b206IGZ1bmN0aW9uICgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIGhvc3RFbFBvcy50b3AgKyBob3N0RWxQb3MuaGVpZ2h0O1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGxldCB0YXJnZXRFbFBvczp7dG9wOm51bWJlciwgbGVmdDpudW1iZXJ9O1xyXG4gICAgc3dpdGNoIChwb3MwKSB7XHJcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICB0YXJnZXRFbFBvcyA9IHtcclxuICAgICAgICAgIHRvcDogc2hpZnRIZWlnaHRbcG9zMV0oKSxcclxuICAgICAgICAgIGxlZnQ6IHNoaWZ0V2lkdGhbcG9zMF0oKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgIHRhcmdldEVsUG9zID0ge1xyXG4gICAgICAgICAgdG9wOiBzaGlmdEhlaWdodFtwb3MxXSgpLFxyXG4gICAgICAgICAgbGVmdDogaG9zdEVsUG9zLmxlZnQgLSB0YXJnZXRFbFdpZHRoXHJcbiAgICAgICAgfTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnYm90dG9tJzpcclxuICAgICAgICB0YXJnZXRFbFBvcyA9IHtcclxuICAgICAgICAgIHRvcDogc2hpZnRIZWlnaHRbcG9zMF0oKSxcclxuICAgICAgICAgIGxlZnQ6IHNoaWZ0V2lkdGhbcG9zMV0oKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGFyZ2V0RWxQb3MgPSB7XHJcbiAgICAgICAgICB0b3A6IGhvc3RFbFBvcy50b3AgLSB0YXJnZXRFbEhlaWdodCxcclxuICAgICAgICAgIGxlZnQ6IHNoaWZ0V2lkdGhbcG9zMV0oKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRhcmdldEVsUG9zO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgd2luZG93KCk6V2luZG93IHtcclxuICAgIHJldHVybiB3aW5kb3c7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBkb2N1bWVudCgpOkRvY3VtZW50IHtcclxuICAgIHJldHVybiB3aW5kb3cuZG9jdW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFN0eWxlKG5hdGl2ZUVsOkhUTUxFbGVtZW50LCBjc3NQcm9wOnN0cmluZyk6c3RyaW5nIHtcclxuICAgIC8vIElFXHJcbiAgICBpZiAoKG5hdGl2ZUVsIGFzIGFueSkuY3VycmVudFN0eWxlKSB7XHJcbiAgICAgIHJldHVybiAobmF0aXZlRWwgYXMgYW55KS5jdXJyZW50U3R5bGVbY3NzUHJvcF07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMud2luZG93LmdldENvbXB1dGVkU3R5bGUpIHtcclxuICAgICAgcmV0dXJuICh0aGlzLndpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5hdGl2ZUVsKSBhcyBLZXlBdHRyaWJ1dGUpW2Nzc1Byb3BdO1xyXG4gICAgfVxyXG4gICAgLy8gZmluYWxseSB0cnkgYW5kIGdldCBpbmxpbmUgc3R5bGVcclxuICAgIHJldHVybiAobmF0aXZlRWwuc3R5bGUgYXMgS2V5QXR0cmlidXRlKVtjc3NQcm9wXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiBhIGdpdmVuIGVsZW1lbnQgaXMgc3RhdGljYWxseSBwb3NpdGlvbmVkXHJcbiAgICogQHBhcmFtIG5hdGl2ZUVsIC0gcmF3IERPTSBlbGVtZW50XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBpc1N0YXRpY1Bvc2l0aW9uZWQobmF0aXZlRWw6SFRNTEVsZW1lbnQpOmJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICh0aGlzLmdldFN0eWxlKG5hdGl2ZUVsLCAncG9zaXRpb24nKSB8fCAnc3RhdGljJyApID09PSAnc3RhdGljJztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJldHVybnMgdGhlIGNsb3Nlc3QsIG5vbi1zdGF0aWNhbGx5IHBvc2l0aW9uZWQgcGFyZW50T2Zmc2V0IG9mIGEgZ2l2ZW5cclxuICAgKiBlbGVtZW50XHJcbiAgICogQHBhcmFtIG5hdGl2ZUVsXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBwYXJlbnRPZmZzZXRFbChuYXRpdmVFbDpIVE1MRWxlbWVudCk6YW55IHtcclxuICAgIGxldCBvZmZzZXRQYXJlbnQ6YW55ID0gbmF0aXZlRWwub2Zmc2V0UGFyZW50IHx8IHRoaXMuZG9jdW1lbnQ7XHJcbiAgICB3aGlsZSAob2Zmc2V0UGFyZW50ICYmIG9mZnNldFBhcmVudCAhPT0gdGhpcy5kb2N1bWVudCAmJlxyXG4gICAgdGhpcy5pc1N0YXRpY1Bvc2l0aW9uZWQob2Zmc2V0UGFyZW50KSkge1xyXG4gICAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQub2Zmc2V0UGFyZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9mZnNldFBhcmVudCB8fCB0aGlzLmRvY3VtZW50O1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3NpdGlvblNlcnZpY2U6UG9zaXRpb25TZXJ2aWNlID0gbmV3IFBvc2l0aW9uU2VydmljZSgpO1xyXG4iXX0=
