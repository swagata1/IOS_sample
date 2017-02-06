var config = {
    defaultJSExtensions: true,
    packageConfigPaths: [
        "/node_modules/*/package.json",
        "/node_modules/**/package.json",
        "/node_modules/@angular/*/package.json"
    ],
    paths: {
        "app/main": "/app/main",
        "main": "main",
        '@angular/common': 'node_modules/@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.js',
        '@angular/core': 'node_modules/@angular/core/bundles/core.umd.js',
        '@angular/forms': 'node_modules/@angular/forms/bundles/forms.umd.js',
        '@angular/http': 'node_modules/@angular/http/bundles/http.umd.js',
        '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/router': 'node_modules/@angular/router/bundles/router.umd.js',
        '@angular/common/testing': 'node_modules/@angular/common/bundles/common-testing.umd.js',
        '@angular/compiler/testing': 'node_modules/@angular/compiler/bundles/compiler-testing.umd.js',
        '@angular/core/testing': 'node_modules/@angular/core/bundles/core-testing.umd.js',
        '@angular/http/testing': 'node_modules/@angular/http/bundles/http-testing.umd.js',
        '@angular/platform-browser/testing': 'node_modules/@angular/platform-browser/bundles/platform-browser-testing.umd.js',
        '@angular/platform-browser-dynamic/testing': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
        '@angular/router/testing': 'node_modules/@angular/router/bundles/router-testing.umd.js',
        'rxjs/*': 'node_modules/rxjs/*',
        'app/*': '/app/*',
        'dist/dev/*': '/base/dist/dev/*',
        'ng2-nvd3': 'node_modules/ng2-nvd3/build/lib/ng2-nvd3',
        '*': 'node_modules/*'
    },
    packages: {
        rxjs: { defaultExtension: 'js' }
    }
};
System.config(config);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN5c3RlbS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsSUFBSSxNQUFNLEdBQUc7SUFDVCxtQkFBbUIsRUFBRSxJQUFJO0lBQ3pCLGtCQUFrQixFQUFFO1FBQ2hCLDhCQUE4QjtRQUM5QiwrQkFBK0I7UUFDL0IsdUNBQXVDO0tBQzFDO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsVUFBVSxFQUFDLFdBQVc7UUFDdEIsTUFBTSxFQUFDLE1BQU07UUFDYixpQkFBaUIsRUFBRSxvREFBb0Q7UUFDdkUsbUJBQW1CLEVBQUUsd0RBQXdEO1FBQzdFLGVBQWUsRUFBRSxnREFBZ0Q7UUFDakUsZ0JBQWdCLEVBQUUsa0RBQWtEO1FBQ3BFLGVBQWUsRUFBRSxnREFBZ0Q7UUFDakUsMkJBQTJCLEVBQUUsd0VBQXdFO1FBQ3JHLG1DQUFtQyxFQUFFLHdGQUF3RjtRQUM3SCxpQkFBaUIsRUFBRSxvREFBb0Q7UUFFdkUseUJBQXlCLEVBQUUsNERBQTREO1FBQ3ZGLDJCQUEyQixFQUFFLGdFQUFnRTtRQUM3Rix1QkFBdUIsRUFBRSx3REFBd0Q7UUFDakYsdUJBQXVCLEVBQUUsd0RBQXdEO1FBQ2pGLG1DQUFtQyxFQUMvQixnRkFBZ0Y7UUFDcEYsMkNBQTJDLEVBQ3ZDLGdHQUFnRztRQUNwRyx5QkFBeUIsRUFBRSw0REFBNEQ7UUFFdkYsUUFBUSxFQUFFLHFCQUFxQjtRQUMvQixPQUFPLEVBQUUsUUFBUTtRQUVqQixZQUFZLEVBQUUsa0JBQWtCO1FBQ2hDLFVBQVUsRUFBRSwwQ0FBMEM7UUFDdEQsR0FBRyxFQUFFLGdCQUFnQjtLQUN4QjtJQUNELFFBQVEsRUFBRTtRQUNOLElBQUksRUFBRSxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRTtLQUNuQztDQUNKLENBQUE7QUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDIiwiZmlsZSI6InN5c3RlbS1jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIHZhciBTeXN0ZW06IFN5c3RlbTtcclxuXHJcblxyXG5sZXQgY29uZmlnID0ge1xyXG4gICAgZGVmYXVsdEpTRXh0ZW5zaW9uczogdHJ1ZSxcclxuICAgIHBhY2thZ2VDb25maWdQYXRoczogW1xyXG4gICAgICAgIGAvbm9kZV9tb2R1bGVzLyovcGFja2FnZS5qc29uYCxcclxuICAgICAgICBgL25vZGVfbW9kdWxlcy8qKi9wYWNrYWdlLmpzb25gLFxyXG4gICAgICAgIGAvbm9kZV9tb2R1bGVzL0Bhbmd1bGFyLyovcGFja2FnZS5qc29uYFxyXG4gICAgXSxcclxuICAgIHBhdGhzOiB7XHJcbiAgICAgICAgXCJhcHAvbWFpblwiOlwiL2FwcC9tYWluXCIsXHJcbiAgICAgICAgXCJtYWluXCI6XCJtYWluXCIsXHJcbiAgICAgICAgJ0Bhbmd1bGFyL2NvbW1vbic6ICdub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29tbW9uL2J1bmRsZXMvY29tbW9uLnVtZC5qcycsXHJcbiAgICAgICAgJ0Bhbmd1bGFyL2NvbXBpbGVyJzogJ25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb21waWxlci9idW5kbGVzL2NvbXBpbGVyLnVtZC5qcycsXHJcbiAgICAgICAgJ0Bhbmd1bGFyL2NvcmUnOiAnbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvYnVuZGxlcy9jb3JlLnVtZC5qcycsXHJcbiAgICAgICAgJ0Bhbmd1bGFyL2Zvcm1zJzogJ25vZGVfbW9kdWxlcy9AYW5ndWxhci9mb3Jtcy9idW5kbGVzL2Zvcm1zLnVtZC5qcycsXHJcbiAgICAgICAgJ0Bhbmd1bGFyL2h0dHAnOiAnbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2h0dHAvYnVuZGxlcy9odHRwLnVtZC5qcycsXHJcbiAgICAgICAgJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInOiAnbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYnVuZGxlcy9wbGF0Zm9ybS1icm93c2VyLnVtZC5qcycsXHJcbiAgICAgICAgJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc6ICdub2RlX21vZHVsZXMvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL2J1bmRsZXMvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljLnVtZC5qcycsXHJcbiAgICAgICAgJ0Bhbmd1bGFyL3JvdXRlcic6ICdub2RlX21vZHVsZXMvQGFuZ3VsYXIvcm91dGVyL2J1bmRsZXMvcm91dGVyLnVtZC5qcycsXHJcblxyXG4gICAgICAgICdAYW5ndWxhci9jb21tb24vdGVzdGluZyc6ICdub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29tbW9uL2J1bmRsZXMvY29tbW9uLXRlc3RpbmcudW1kLmpzJyxcclxuICAgICAgICAnQGFuZ3VsYXIvY29tcGlsZXIvdGVzdGluZyc6ICdub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29tcGlsZXIvYnVuZGxlcy9jb21waWxlci10ZXN0aW5nLnVtZC5qcycsXHJcbiAgICAgICAgJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc6ICdub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29yZS9idW5kbGVzL2NvcmUtdGVzdGluZy51bWQuanMnLFxyXG4gICAgICAgICdAYW5ndWxhci9odHRwL3Rlc3RpbmcnOiAnbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2h0dHAvYnVuZGxlcy9odHRwLXRlc3RpbmcudW1kLmpzJyxcclxuICAgICAgICAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci90ZXN0aW5nJzpcclxuICAgICAgICAgICAgJ25vZGVfbW9kdWxlcy9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2J1bmRsZXMvcGxhdGZvcm0tYnJvd3Nlci10ZXN0aW5nLnVtZC5qcycsXHJcbiAgICAgICAgJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy90ZXN0aW5nJzpcclxuICAgICAgICAgICAgJ25vZGVfbW9kdWxlcy9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMvYnVuZGxlcy9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMtdGVzdGluZy51bWQuanMnLFxyXG4gICAgICAgICdAYW5ndWxhci9yb3V0ZXIvdGVzdGluZyc6ICdub2RlX21vZHVsZXMvQGFuZ3VsYXIvcm91dGVyL2J1bmRsZXMvcm91dGVyLXRlc3RpbmcudW1kLmpzJyxcclxuXHJcbiAgICAgICAgJ3J4anMvKic6ICdub2RlX21vZHVsZXMvcnhqcy8qJyxcclxuICAgICAgICAnYXBwLyonOiAnL2FwcC8qJyxcclxuICAgICAgICAvLyBGb3IgdGVzdCBjb25maWdcclxuICAgICAgICAnZGlzdC9kZXYvKic6ICcvYmFzZS9kaXN0L2Rldi8qJyxcclxuICAgICAgICAnbmcyLW52ZDMnOiAnbm9kZV9tb2R1bGVzL25nMi1udmQzL2J1aWxkL2xpYi9uZzItbnZkMycsXHJcbiAgICAgICAgJyonOiAnbm9kZV9tb2R1bGVzLyonXHJcbiAgICB9LFxyXG4gICAgcGFja2FnZXM6IHtcclxuICAgICAgICByeGpzOiB7IGRlZmF1bHRFeHRlbnNpb246ICdqcycgfVxyXG4gICAgfVxyXG59XHJcblN5c3RlbS5jb25maWcoY29uZmlnKTtcclxuXHJcbiJdfQ==
