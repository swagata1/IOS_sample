"use strict";
var win = typeof window !== 'undefined' && window || {};
exports.window = win;
exports.document = win.document;
exports.location = win.location;
exports.gc = win['gc'] ? function () { return win['gc'](); } : function () { return null; };
exports.performance = win['performance'] ? win['performance'] : null;
exports.Event = win['Event'];
exports.MouseEvent = win['MouseEvent'];
exports.KeyboardEvent = win['KeyboardEvent'];
exports.EventTarget = win['EventTarget'];
exports.History = win['History'];
exports.Location = win['Location'];
exports.EventListener = win['EventListener'];

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC91dGlscy9mYWNhZGUvYnJvd3Nlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBWUEsSUFBSSxHQUFHLEdBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE1BQU0sSUFBUyxFQUFFO0FBRTdDLGNBQU0sT0FGd0M7QUFHbEQsZ0JBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO0FBQ3hCLGdCQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztBQUN4QixVQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLGNBQU0sT0FBQSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBWCxDQUFXLEdBQUcsY0FBVyxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7QUFDckQsbUJBQVcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUMzRCxhQUFLLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3JCLGtCQUFVLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQy9CLHFCQUFhLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3JDLG1CQUFXLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ2pDLGVBQU8sR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDekIsZ0JBQVEsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDM0IscUJBQWEsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMiLCJmaWxlIjoic2hhcmVkL3V0aWxzL2ZhY2FkZS9icm93c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyp0c2xpbnQ6ZGlzYWJsZSAqL1xyXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuICovXHJcblxyXG4vKipcclxuICogSlMgdmVyc2lvbiBvZiBicm93c2VyIEFQSXMuIFRoaXMgbGlicmFyeSBjYW4gb25seSBydW4gaW4gdGhlIGJyb3dzZXIuXHJcbiAqL1xyXG52YXIgd2luID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93IHx8IDxhbnk+e307XHJcblxyXG5leHBvcnQge3dpbiBhcyB3aW5kb3d9O1xyXG5leHBvcnQgdmFyIGRvY3VtZW50ID0gd2luLmRvY3VtZW50O1xyXG5leHBvcnQgdmFyIGxvY2F0aW9uID0gd2luLmxvY2F0aW9uO1xyXG5leHBvcnQgdmFyIGdjID0gd2luWydnYyddID8gKCkgPT4gd2luWydnYyddKCkgOiAoKTogYW55ID0+IG51bGw7XHJcbmV4cG9ydCB2YXIgcGVyZm9ybWFuY2UgPSB3aW5bJ3BlcmZvcm1hbmNlJ10gPyB3aW5bJ3BlcmZvcm1hbmNlJ10gOiBudWxsO1xyXG5leHBvcnQgY29uc3QgRXZlbnQgPSB3aW5bJ0V2ZW50J107XHJcbmV4cG9ydCBjb25zdCBNb3VzZUV2ZW50ID0gd2luWydNb3VzZUV2ZW50J107XHJcbmV4cG9ydCBjb25zdCBLZXlib2FyZEV2ZW50ID0gd2luWydLZXlib2FyZEV2ZW50J107XHJcbmV4cG9ydCBjb25zdCBFdmVudFRhcmdldCA9IHdpblsnRXZlbnRUYXJnZXQnXTtcclxuZXhwb3J0IGNvbnN0IEhpc3RvcnkgPSB3aW5bJ0hpc3RvcnknXTtcclxuZXhwb3J0IGNvbnN0IExvY2F0aW9uID0gd2luWydMb2NhdGlvbiddO1xyXG5leHBvcnQgY29uc3QgRXZlbnRMaXN0ZW5lciA9IHdpblsnRXZlbnRMaXN0ZW5lciddO1xyXG4iXX0=
