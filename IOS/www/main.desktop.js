process.env.NODE_ENV = process.env.NODE_ENV || 'production';
console.log("Electron launching with NODE_ENV: " + process.env.NODE_ENV);
var electron = require('electron');
var fs = require('fs');
var fse = require('fs-extra');
var http = require('http');
var app = electron.app;
var Menu = electron.Menu;
var shell = electron.shell;
var BrowserWindow = electron.BrowserWindow;
var ipcMain = electron.ipcMain;
var userDataPath = app.getPath('userData');
var contentDir = '/DataContent';
var mainWindow = null;
var template;
var menu;
var pathToFile;
var pathToDir;
if (process.env.NODE_ENV === 'development') {
    require('electron-debug')();
}
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('ready', function () {
    setApplicationBase();
    mainWindow = new BrowserWindow({ width: 1024, height: 620 });
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
    mainWindow.webContents.on('new-window', function (e, url) {
        e.preventDefault();
        console.log('External URL opened -', url);
        shell.openExternal(url);
    });
    mainWindow.webContents.on('did-navigate-in-page', function (e, url) {
        console.log("Page navigated: " + url);
    });
    var appTitle = "Angular App on a Desktop Axis";
    if (process.platform === 'darwin') {
        template = [{
                label: appTitle,
                submenu: [{
                        label: "About " + appTitle,
                        selector: 'orderFrontStandardAboutPanel:'
                    }, {
                        type: 'separator'
                    }, {
                        label: 'Hide Axis',
                        accelerator: 'Command+H',
                        selector: 'hide:'
                    }, {
                        label: 'Hide Others',
                        accelerator: 'Command+Shift+H',
                        selector: 'hideOtherApplications:'
                    }, {
                        label: 'Show All',
                        selector: 'unhideAllApplications:'
                    }, {
                        type: 'separator'
                    }, {
                        label: 'Quit',
                        accelerator: 'Command+Q',
                        click: function () {
                            app.quit();
                        }
                    }]
            }, {
                label: 'Edit',
                submenu: [{
                        label: 'Undo',
                        accelerator: 'Command+Z',
                        selector: 'undo:'
                    }, {
                        label: 'Redo',
                        accelerator: 'Shift+Command+Z',
                        selector: 'redo:'
                    }, {
                        type: 'separator'
                    }, {
                        label: 'Cut',
                        accelerator: 'Command+X',
                        selector: 'cut:'
                    }, {
                        label: 'Copy',
                        accelerator: 'Command+C',
                        selector: 'copy:'
                    }, {
                        label: 'Paste',
                        accelerator: 'Command+V',
                        selector: 'paste:'
                    }, {
                        label: 'Select All',
                        accelerator: 'Command+A',
                        selector: 'selectAll:'
                    }]
            }, {
                label: 'View',
                submenu: (process.env.NODE_ENV === 'development') ? [{
                        label: 'Reload',
                        accelerator: 'Command+R',
                        click: function () {
                            mainWindow.restart();
                        }
                    }, {
                        label: 'Toggle Full Screen',
                        accelerator: 'Ctrl+Command+F',
                        click: function () {
                            mainWindow.setFullScreen(!mainWindow.isFullScreen());
                        }
                    }, {
                        label: 'Toggle Developer Tools',
                        accelerator: 'Alt+Command+I',
                        click: function () {
                            mainWindow.toggleDevTools();
                        }
                    }] : [{
                        label: 'Toggle Full Screen',
                        accelerator: 'Ctrl+Command+F',
                        click: function () {
                            mainWindow.setFullScreen(!mainWindow.isFullScreen());
                        }
                    }]
            }, {
                label: 'Window',
                submenu: [{
                        label: 'Minimize',
                        accelerator: 'Command+M',
                        selector: 'performMiniaturize:'
                    }, {
                        label: 'Close',
                        accelerator: 'Command+W',
                        selector: 'performClose:'
                    }, {
                        type: 'separator'
                    }, {
                        label: 'Bring All to Front',
                        selector: 'arrangeInFront:'
                    }]
            }];
        menu = Menu.buildFromTemplate(template);
        Menu.setApplicationMenu(menu);
    }
    else {
        template = [{
                label: '&File',
                submenu: [{
                        label: '&Close',
                        accelerator: 'Ctrl+W',
                        click: function () {
                            mainWindow.close();
                        }
                    }]
            }, {
                label: '&View',
                submenu: (process.env.NODE_ENV === 'development') ? [{
                        label: '&Reload',
                        accelerator: 'Ctrl+R',
                        click: function () {
                            mainWindow.restart();
                        }
                    }, {
                        label: 'Toggle &Full Screen',
                        accelerator: 'F11',
                        click: function () {
                            mainWindow.setFullScreen(!mainWindow.isFullScreen());
                        }
                    }, {
                        label: 'Toggle &Developer Tools',
                        accelerator: 'Alt+Ctrl+I',
                        click: function () {
                            mainWindow.toggleDevTools();
                        }
                    }] : [{
                        label: 'Toggle &Full Screen',
                        accelerator: 'F11',
                        click: function () {
                            mainWindow.setFullScreen(!mainWindow.isFullScreen());
                        }
                    }, {
                        label: 'Toggle &Developer Tools',
                        accelerator: 'Alt+Ctrl+I',
                        click: function () {
                            mainWindow.toggleDevTools();
                        }
                    }]
            }];
        menu = Menu.buildFromTemplate(template);
        mainWindow.setMenu(menu);
    }
    ipcMain.on('asynchronous-message', function (event, arg) {
        if (arg.doAction) {
            var replyObj = {
                'operation': arg.doAction + '-reply'
            };
            switch (arg.doAction) {
                case 'saveData': {
                    pathToFile = userDataPath + contentDir + arg.dirRelativePath;
                    if (arg.contentType == 'json') {
                        saveFileContent(pathToFile + arg.fileName, JSON.stringify(arg.data));
                    }
                    else if (arg.contentType == 'application') {
                        saveRFSDocument(pathToFile, arg.fileName, arg.data);
                    }
                    else {
                        saveFileContent(pathToFile + arg.fileName, arg.data);
                    }
                    replyObj.result = 'Data saved successfuly.. in ' + arg.fileName;
                    event.sender.send('asynchronous-reply', replyObj);
                    break;
                }
                case 'getContentDirPath': {
                    replyObj.result = userDataPath + contentDir;
                    event.sender.send('asynchronous-reply', replyObj);
                    break;
                }
                case 'cloneForUpdate': {
                    copyFileNDir(userDataPath + contentDir + arg.srcRelativePath, userDataPath + contentDir + arg.destRelativePath);
                    replyObj.result = 'Content cloned successfuly!';
                    event.sender.send('asynchronous-reply', replyObj);
                    break;
                }
                case 'removeDirNContent': {
                    pathToDir = userDataPath + contentDir + arg.dirRelativePath;
                    removeFileNDirs(pathToDir);
                    break;
                }
                case 'removeFile': {
                    pathToFile = userDataPath + contentDir + arg.dirRelativePath + arg.fileName;
                    removeFileNDirs(pathToFile);
                    break;
                }
                default: {
                    break;
                }
            }
        }
        console.log('>>>>>>>> ', arg);
    });
    ipcMain.on('synchronous-message', function (event, arg) {
        console.log('synchronous >>>>>>>> ', arg);
        var replyObj = {
            'operation': arg.doAction + '-reply'
        };
        switch (arg.doAction) {
            case 'getContentDirPath': {
                replyObj.result = userDataPath + contentDir;
                break;
            }
            case 'isDirExist': {
                pathToFile = userDataPath + contentDir + arg.dirRelativePath;
                replyObj.result = isDirSync(pathToFile);
                break;
            }
            case 'isFileExist': {
                pathToFile = userDataPath + contentDir + arg.dirRelativePath + arg.fileName;
                replyObj.result = checkIfFile(pathToFile);
                break;
            }
            default: {
                break;
            }
        }
        console.log('synchronous-reply >>>>>>>> ', replyObj);
        event.returnValue = replyObj;
    });
    function setApplicationBase() {
        makeDirs(userDataPath + contentDir);
    }
    function readFile(filepath) {
        fse.readFile(filepath, 'utf-8', function (err, data) {
            if (err) {
                console.log("readFile failure! An error ocurred reading the file :" + err);
                return;
            }
        });
    }
    function copyFileNDir(src, dest) {
        try {
            console.log("copyFileNDir - %d, to: %d", src, dest);
            fse.copy(src, dest);
            console.log("copyFileNDir success!");
        }
        catch (err) {
            console.error("copyFileNDir failure! from: %d, to: %d", src, dest, err);
        }
    }
    function moveFileNDir(src, dest) {
        try {
            fse.move(src, dest);
            console.log("moveFileNDir success!");
        }
        catch (err) {
            console.error("moveFileNDir failure! from: %d, to: %d", src, dest, err);
        }
    }
    function removeFileNDirs(targetPath) {
        try {
            fse.remove(targetPath);
            console.log("removeFileNDirs success!");
        }
        catch (err) {
            console.error("removeFileNDirs failure! targetPath: %d", targetPath, err);
        }
    }
    function makeDirs(dirPath) {
        try {
            fse.mkdirs(dirPath);
            console.log("makeDirs success!");
        }
        catch (err) {
            console.error("makeDirs failure! dirPath: %d", dirPath, err);
        }
    }
    function saveFileContent(filePath, fileContent) {
        fse.outputFile(filePath, fileContent, function (err) {
            if (err) {
                console.log('saveFileContent failure! ', err);
                return false;
            }
            else {
                return true;
            }
        });
    }
    function saveRFSDocument(dirPath, fileName, fileUrl) {
        fse.ensureDir(dirPath, function (err) {
            if (err) {
                console.log(err);
            }
            else {
                var file_1 = fs.createWriteStream(dirPath + fileName);
                try {
                    var request = http.get(fileUrl, function (response) {
                        response.pipe(file_1);
                    }).on("error", function (error) {
                        console.log(error.message);
                    });
                }
                catch (e) {
                    console.log(e);
                }
            }
        });
    }
    function saveRFSImage(dirPath, fileName, fileContent) {
        fse.ensureDir(dirPath, function (err) {
            if (err) {
                console.log(err);
            }
            else {
            }
        });
    }
    function checkIfFile(aPath) {
        try {
            return fs.statSync(aPath).isFile();
        }
        catch (e) {
            if (e.code === 'ENOENT') {
                return false;
            }
            else {
                throw e;
            }
        }
    }
    function isDirSync(aPath) {
        try {
            return fs.statSync(aPath).isDirectory();
        }
        catch (e) {
            if (e.code === 'ENOENT') {
                return false;
            }
            else {
                throw e;
            }
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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Q0FBQztZQUNWLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztBQUVILENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uZGVza3RvcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInByb2Nlc3MuZW52Lk5PREVfRU5WID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ3Byb2R1Y3Rpb24nO1xyXG5jb25zb2xlLmxvZyhgRWxlY3Ryb24gbGF1bmNoaW5nIHdpdGggTk9ERV9FTlY6ICR7cHJvY2Vzcy5lbnYuTk9ERV9FTlZ9YCk7XHJcblxyXG4vLyBlbGVjdHJvblxyXG5jb25zdCBlbGVjdHJvbiA9IHJlcXVpcmUoJ2VsZWN0cm9uJyk7XHJcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcclxuY29uc3QgZnNlID0gcmVxdWlyZSgnZnMtZXh0cmEnKTtcclxuY29uc3QgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcclxuXHJcbmNvbnN0IGFwcCA9IGVsZWN0cm9uLmFwcDtcclxuY29uc3QgTWVudTogYW55ID0gZWxlY3Ryb24uTWVudTtcclxuY29uc3Qgc2hlbGw6IGFueSA9IGVsZWN0cm9uLnNoZWxsO1xyXG5jb25zdCBCcm93c2VyV2luZG93ID0gZWxlY3Ryb24uQnJvd3NlcldpbmRvdztcclxuY29uc3QgaXBjTWFpbiA9IGVsZWN0cm9uLmlwY01haW47XHJcblxyXG5jb25zdCB1c2VyRGF0YVBhdGggPSBhcHAuZ2V0UGF0aCgndXNlckRhdGEnKTtcclxuY29uc3QgY29udGVudERpciA9ICcvRGF0YUNvbnRlbnQnO1xyXG5cclxubGV0IG1haW5XaW5kb3c6IGFueSA9IG51bGw7XHJcbmxldCB0ZW1wbGF0ZTogYW55O1xyXG5sZXQgbWVudTogYW55O1xyXG5sZXQgcGF0aFRvRmlsZTogc3RyaW5nO1xyXG5sZXQgcGF0aFRvRGlyOiBzdHJpbmc7XHJcblxyXG4vL2NvbnNvbGUubG9nKCdnZXRQYXRoIC0gPj4+Pj4+ICcsIHVzZXJEYXRhUGF0aCk7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICByZXF1aXJlKCdlbGVjdHJvbi1kZWJ1ZycpKCk7XHJcbn1cclxuXHJcbmFwcC5vbignd2luZG93LWFsbC1jbG9zZWQnLCAoKSA9PiB7XHJcbiAgaWYgKHByb2Nlc3MucGxhdGZvcm0gIT09ICdkYXJ3aW4nKSB7XHJcbiAgICBhcHAucXVpdCgpO1xyXG4gIH1cclxufSk7XHJcblxyXG5hcHAub24oJ3JlYWR5JywgKCkgPT4ge1xyXG5cclxuICAvLyBCYXNpYyBwcmVsaW1pbW5hcnkgb3BlcmF0aW9uIGZvciBBcHBcclxuICBzZXRBcHBsaWNhdGlvbkJhc2UoKTtcclxuXHJcbiAgLy8gSW5pdGlhbGl6ZSB0aGUgd2luZG93IHRvIG91ciBzcGVjaWZpZWQgZGltZW5zaW9uc1xyXG4gIG1haW5XaW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdyh7IHdpZHRoOiAxMDI0LCBoZWlnaHQ6IDYyMCB9KTtcclxuXHJcbiAgLy8gVGVsbCBFbGVjdHJvbiB3aGVyZSB0byBsb2FkIHRoZSBlbnRyeSBwb2ludCBmcm9tXHJcbiAgbWFpbldpbmRvdy5sb2FkVVJMKCdmaWxlOi8vJyArIF9fZGlybmFtZSArICcvaW5kZXguaHRtbCcpO1xyXG5cclxuICAvLyBDbGVhciBvdXQgdGhlIG1haW4gd2luZG93IHdoZW4gdGhlIGFwcCBpcyBjbG9zZWRcclxuICBtYWluV2luZG93Lm9uKCdjbG9zZWQnLCAoKSA9PiB7XHJcbiAgICBtYWluV2luZG93ID0gbnVsbDtcclxuICB9KTtcclxuXHJcbiAgbWFpbldpbmRvdy53ZWJDb250ZW50cy5vbignbmV3LXdpbmRvdycsIGZ1bmN0aW9uKGUsIHVybCkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coJ0V4dGVybmFsIFVSTCBvcGVuZWQgLScsdXJsKTtcclxuICAgIHNoZWxsLm9wZW5FeHRlcm5hbCh1cmwpO1xyXG4gIH0pO1xyXG5cclxuICBtYWluV2luZG93LndlYkNvbnRlbnRzLm9uKCdkaWQtbmF2aWdhdGUtaW4tcGFnZScsIChlOiBhbnksIHVybDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgUGFnZSBuYXZpZ2F0ZWQ6ICR7dXJsfWApO1xyXG4gIH0pO1xyXG5cclxuICBsZXQgYXBwVGl0bGU6IHN0cmluZyA9IGBBbmd1bGFyIEFwcCBvbiBhIERlc2t0b3AgQXhpc2A7XHJcblxyXG5cclxuXHJcbiAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICdkYXJ3aW4nKSB7XHJcbiAgICB0ZW1wbGF0ZSA9IFt7XHJcbiAgICAgIGxhYmVsOiBhcHBUaXRsZSxcclxuICAgICAgc3VibWVudTogW3tcclxuICAgICAgICBsYWJlbDogYEFib3V0ICR7YXBwVGl0bGV9YCxcclxuICAgICAgICBzZWxlY3RvcjogJ29yZGVyRnJvbnRTdGFuZGFyZEFib3V0UGFuZWw6J1xyXG4gICAgICB9LCB7XHJcbiAgICAgICAgICB0eXBlOiAnc2VwYXJhdG9yJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGxhYmVsOiAnSGlkZSBBeGlzJyxcclxuICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQ29tbWFuZCtIJyxcclxuICAgICAgICAgIHNlbGVjdG9yOiAnaGlkZTonXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgbGFiZWw6ICdIaWRlIE90aGVycycsXHJcbiAgICAgICAgICBhY2NlbGVyYXRvcjogJ0NvbW1hbmQrU2hpZnQrSCcsXHJcbiAgICAgICAgICBzZWxlY3RvcjogJ2hpZGVPdGhlckFwcGxpY2F0aW9uczonXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgbGFiZWw6ICdTaG93IEFsbCcsXHJcbiAgICAgICAgICBzZWxlY3RvcjogJ3VuaGlkZUFsbEFwcGxpY2F0aW9uczonXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgdHlwZTogJ3NlcGFyYXRvcidcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBsYWJlbDogJ1F1aXQnLFxyXG4gICAgICAgICAgYWNjZWxlcmF0b3I6ICdDb21tYW5kK1EnLFxyXG4gICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgYXBwLnF1aXQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XVxyXG4gICAgfSwge1xyXG4gICAgICAgIGxhYmVsOiAnRWRpdCcsXHJcbiAgICAgICAgc3VibWVudTogW3tcclxuICAgICAgICAgIGxhYmVsOiAnVW5kbycsXHJcbiAgICAgICAgICBhY2NlbGVyYXRvcjogJ0NvbW1hbmQrWicsXHJcbiAgICAgICAgICBzZWxlY3RvcjogJ3VuZG86J1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbGFiZWw6ICdSZWRvJyxcclxuICAgICAgICAgICAgYWNjZWxlcmF0b3I6ICdTaGlmdCtDb21tYW5kK1onLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogJ3JlZG86J1xyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0eXBlOiAnc2VwYXJhdG9yJ1xyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBsYWJlbDogJ0N1dCcsXHJcbiAgICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQ29tbWFuZCtYJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICdjdXQ6J1xyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBsYWJlbDogJ0NvcHknLFxyXG4gICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0NvbW1hbmQrQycsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnY29weTonXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnUGFzdGUnLFxyXG4gICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0NvbW1hbmQrVicsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAncGFzdGU6J1xyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBsYWJlbDogJ1NlbGVjdCBBbGwnLFxyXG4gICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0NvbW1hbmQrQScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnc2VsZWN0QWxsOidcclxuICAgICAgICAgIH1dXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBsYWJlbDogJ1ZpZXcnLFxyXG4gICAgICAgIHN1Ym1lbnU6IChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyBbe1xyXG4gICAgICAgICAgbGFiZWw6ICdSZWxvYWQnLFxyXG4gICAgICAgICAgYWNjZWxlcmF0b3I6ICdDb21tYW5kK1InLFxyXG4gICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgbWFpbldpbmRvdy5yZXN0YXJ0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBsYWJlbDogJ1RvZ2dsZSBGdWxsIFNjcmVlbicsXHJcbiAgICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQ3RybCtDb21tYW5kK0YnLFxyXG4gICAgICAgICAgICBjbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgIG1haW5XaW5kb3cuc2V0RnVsbFNjcmVlbighbWFpbldpbmRvdy5pc0Z1bGxTY3JlZW4oKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbGFiZWw6ICdUb2dnbGUgRGV2ZWxvcGVyIFRvb2xzJyxcclxuICAgICAgICAgICAgYWNjZWxlcmF0b3I6ICdBbHQrQ29tbWFuZCtJJyxcclxuICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICBtYWluV2luZG93LnRvZ2dsZURldlRvb2xzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1dIDogW3tcclxuICAgICAgICAgICAgbGFiZWw6ICdUb2dnbGUgRnVsbCBTY3JlZW4nLFxyXG4gICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0N0cmwrQ29tbWFuZCtGJyxcclxuICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICBtYWluV2luZG93LnNldEZ1bGxTY3JlZW4oIW1haW5XaW5kb3cuaXNGdWxsU2NyZWVuKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgbGFiZWw6ICdXaW5kb3cnLFxyXG4gICAgICAgIHN1Ym1lbnU6IFt7XHJcbiAgICAgICAgICBsYWJlbDogJ01pbmltaXplJyxcclxuICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQ29tbWFuZCtNJyxcclxuICAgICAgICAgIHNlbGVjdG9yOiAncGVyZm9ybU1pbmlhdHVyaXplOidcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnQ2xvc2UnLFxyXG4gICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0NvbW1hbmQrVycsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAncGVyZm9ybUNsb3NlOidcclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdHlwZTogJ3NlcGFyYXRvcidcclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbGFiZWw6ICdCcmluZyBBbGwgdG8gRnJvbnQnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogJ2FycmFuZ2VJbkZyb250OidcclxuICAgICAgICAgIH1dXHJcbiAgICAgIH1dO1xyXG5cclxuICAgIG1lbnUgPSBNZW51LmJ1aWxkRnJvbVRlbXBsYXRlKHRlbXBsYXRlKTtcclxuICAgIE1lbnUuc2V0QXBwbGljYXRpb25NZW51KG1lbnUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0ZW1wbGF0ZSA9IFt7XHJcbiAgICAgIGxhYmVsOiAnJkZpbGUnLFxyXG4gICAgICBzdWJtZW51OiBbe1xyXG4gICAgICAgIGxhYmVsOiAnJkNsb3NlJyxcclxuICAgICAgICBhY2NlbGVyYXRvcjogJ0N0cmwrVycsXHJcbiAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgIG1haW5XaW5kb3cuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1dXHJcbiAgICB9LCB7XHJcbiAgICAgICAgbGFiZWw6ICcmVmlldycsXHJcbiAgICAgICAgc3VibWVudTogKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/IFt7XHJcbiAgICAgICAgICBsYWJlbDogJyZSZWxvYWQnLFxyXG4gICAgICAgICAgYWNjZWxlcmF0b3I6ICdDdHJsK1InLFxyXG4gICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgbWFpbldpbmRvdy5yZXN0YXJ0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBsYWJlbDogJ1RvZ2dsZSAmRnVsbCBTY3JlZW4nLFxyXG4gICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0YxMScsXHJcbiAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgbWFpbldpbmRvdy5zZXRGdWxsU2NyZWVuKCFtYWluV2luZG93LmlzRnVsbFNjcmVlbigpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBsYWJlbDogJ1RvZ2dsZSAmRGV2ZWxvcGVyIFRvb2xzJyxcclxuICAgICAgICAgICAgYWNjZWxlcmF0b3I6ICdBbHQrQ3RybCtJJyxcclxuICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICBtYWluV2luZG93LnRvZ2dsZURldlRvb2xzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1dIDogW3tcclxuICAgICAgICAgICAgbGFiZWw6ICdUb2dnbGUgJkZ1bGwgU2NyZWVuJyxcclxuICAgICAgICAgICAgYWNjZWxlcmF0b3I6ICdGMTEnLFxyXG4gICAgICAgICAgICBjbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgIG1haW5XaW5kb3cuc2V0RnVsbFNjcmVlbighbWFpbldpbmRvdy5pc0Z1bGxTY3JlZW4oKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBsYWJlbDogJ1RvZ2dsZSAmRGV2ZWxvcGVyIFRvb2xzJyxcclxuICAgICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0FsdCtDdHJsK0knLFxyXG4gICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtYWluV2luZG93LnRvZ2dsZURldlRvb2xzKCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICB9XTtcclxuICAgIG1lbnUgPSBNZW51LmJ1aWxkRnJvbVRlbXBsYXRlKHRlbXBsYXRlKTtcclxuICAgIG1haW5XaW5kb3cuc2V0TWVudShtZW51KTtcclxuICB9XHJcblxyXG4gIC8vIElwYyBsaXN0ZW5pbmcgaW4gbWFpbiBwcm9jZXNzLlxyXG4gIGlwY01haW4ub24oJ2FzeW5jaHJvbm91cy1tZXNzYWdlJywgKGV2ZW50LCBhcmcpID0+IHtcclxuICAgIC8vIHVzZSBzd2l0Y2ggZm9yIGhhbmRsaW5nIG11bHRpcGxlIG9wZXJhdGlvbnNcclxuICAgIGlmIChhcmcuZG9BY3Rpb24pIHtcclxuICAgICAgbGV0IHJlcGx5T2JqOiBhbnkgPSB7XHJcbiAgICAgICAgJ29wZXJhdGlvbic6IGFyZy5kb0FjdGlvbiArICctcmVwbHknXHJcbiAgICAgIH1cclxuICAgICAgc3dpdGNoIChhcmcuZG9BY3Rpb24pIHtcclxuICAgICAgICAvLyBhY3Rpb25zIHdoaWNoIGNhbiBiZSBpbnZva2VkIGZyb20gaXBjIHJlbmRlcmVyIHByb2Nlc3NcclxuICAgICAgICBjYXNlICdzYXZlRGF0YSc6IHtcclxuICAgICAgICAgIC8vIGZvciBzYXZpbmcgZGF0YVxyXG4gICAgICAgICAgcGF0aFRvRmlsZSA9IHVzZXJEYXRhUGF0aCArIGNvbnRlbnREaXIgKyBhcmcuZGlyUmVsYXRpdmVQYXRoO1xyXG5cclxuICAgICAgICAgIGlmIChhcmcuY29udGVudFR5cGUgPT0gJ2pzb24nKSB7XHJcbiAgICAgICAgICAgIHNhdmVGaWxlQ29udGVudChwYXRoVG9GaWxlICsgYXJnLmZpbGVOYW1lLCBKU09OLnN0cmluZ2lmeShhcmcuZGF0YSkpXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGFyZy5jb250ZW50VHlwZSA9PSAnYXBwbGljYXRpb24nKSB7XHJcbiAgICAgICAgICAgIHNhdmVSRlNEb2N1bWVudChwYXRoVG9GaWxlLCBhcmcuZmlsZU5hbWUsIGFyZy5kYXRhKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNhdmVGaWxlQ29udGVudChwYXRoVG9GaWxlICsgYXJnLmZpbGVOYW1lLCBhcmcuZGF0YSlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXBseU9iai5yZXN1bHQgPSAnRGF0YSBzYXZlZCBzdWNjZXNzZnVseS4uIGluICcgKyBhcmcuZmlsZU5hbWU7XHJcblxyXG4gICAgICAgICAgZXZlbnQuc2VuZGVyLnNlbmQoJ2FzeW5jaHJvbm91cy1yZXBseScsIHJlcGx5T2JqKTsgLy8gRGVjaWRlIHRoZSBtZXNzYWdlIGZvcm1hdCBmb3IgcmVwbHkgdG8gUmVuZHJlciBQcm9jZXNzIFxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ2dldENvbnRlbnREaXJQYXRoJzoge1xyXG4gICAgICAgICAgLy8gZm9yIGdldHRpbmcgcGF0aCB0aWxsIGRhdGEgY29udGVudCBkaXJlY3RvcnlcclxuICAgICAgICAgIHJlcGx5T2JqLnJlc3VsdCA9IHVzZXJEYXRhUGF0aCArIGNvbnRlbnREaXI7XHJcbiAgICAgICAgICBldmVudC5zZW5kZXIuc2VuZCgnYXN5bmNocm9ub3VzLXJlcGx5JywgcmVwbHlPYmopO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ2Nsb25lRm9yVXBkYXRlJzoge1xyXG4gICAgICAgICAgY29weUZpbGVORGlyKHVzZXJEYXRhUGF0aCArIGNvbnRlbnREaXIgKyBhcmcuc3JjUmVsYXRpdmVQYXRoLCB1c2VyRGF0YVBhdGggKyBjb250ZW50RGlyICsgYXJnLmRlc3RSZWxhdGl2ZVBhdGgpO1xyXG4gICAgICAgICAgcmVwbHlPYmoucmVzdWx0ID0gJ0NvbnRlbnQgY2xvbmVkIHN1Y2Nlc3NmdWx5ISc7XHJcblxyXG4gICAgICAgICAgZXZlbnQuc2VuZGVyLnNlbmQoJ2FzeW5jaHJvbm91cy1yZXBseScsIHJlcGx5T2JqKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlICdyZW1vdmVEaXJOQ29udGVudCc6e1xyXG4gICAgICAgICAgcGF0aFRvRGlyID0gdXNlckRhdGFQYXRoICsgY29udGVudERpciArIGFyZy5kaXJSZWxhdGl2ZVBhdGg7XHJcbiAgICAgICAgICByZW1vdmVGaWxlTkRpcnMocGF0aFRvRGlyKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlICdyZW1vdmVGaWxlJzp7XHJcbiAgICAgICAgICBwYXRoVG9GaWxlID0gdXNlckRhdGFQYXRoICsgY29udGVudERpciArIGFyZy5kaXJSZWxhdGl2ZVBhdGggKyBhcmcuZmlsZU5hbWU7XHJcbiAgICAgICAgICByZW1vdmVGaWxlTkRpcnMocGF0aFRvRmlsZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgLy8gZGVmYXVsdCBvcGVyYXRpb25cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCc+Pj4+Pj4+PiAnLCBhcmcpOyAgLy8gcHJpbnRzIFwicGluZ1wiXHJcbiAgICAvL2V2ZW50LnNlbmRlci5zZW5kKCdhc3luY2hyb25vdXMtcmVwbHknLCAnYXN5bmMgcG9uZycpO1xyXG4gIH0pO1xyXG5cclxuICBpcGNNYWluLm9uKCdzeW5jaHJvbm91cy1tZXNzYWdlJywgKGV2ZW50LCBhcmcpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdzeW5jaHJvbm91cyA+Pj4+Pj4+PiAnLCBhcmcpOyAgLy8gcHJpbnRzIFwicGluZ1wiXHJcbiAgICAvL2V2ZW50LnJldHVyblZhbHVlID0gJ3N5bmMgcG9uZyc7XHJcbiAgICBsZXQgcmVwbHlPYmo6IGFueSA9IHtcclxuICAgICAgJ29wZXJhdGlvbic6IGFyZy5kb0FjdGlvbiArICctcmVwbHknXHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKGFyZy5kb0FjdGlvbikge1xyXG4gICAgICAvLyBhY3Rpb25zIHdoaWNoIGNhbiBiZSBpbnZva2VkIGZyb20gaXBjIHJlbmRlcmVyIHByb2Nlc3NcclxuICAgICAgY2FzZSAnZ2V0Q29udGVudERpclBhdGgnOiB7XHJcbiAgICAgICAgLy8gZm9yIGdldHRpbmcgcGF0aCB0aWxsIGRhdGEgY29udGVudCBkaXJlY3RvcnlcclxuICAgICAgICByZXBseU9iai5yZXN1bHQgPSB1c2VyRGF0YVBhdGggKyBjb250ZW50RGlyO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgJ2lzRGlyRXhpc3QnOiB7XHJcbiAgICAgICAgcGF0aFRvRmlsZSA9IHVzZXJEYXRhUGF0aCArIGNvbnRlbnREaXIgKyBhcmcuZGlyUmVsYXRpdmVQYXRoO1xyXG4gICAgICAgIHJlcGx5T2JqLnJlc3VsdCA9IGlzRGlyU3luYyhwYXRoVG9GaWxlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdpc0ZpbGVFeGlzdCc6IHtcclxuICAgICAgICBwYXRoVG9GaWxlID0gdXNlckRhdGFQYXRoICsgY29udGVudERpciArIGFyZy5kaXJSZWxhdGl2ZVBhdGggKyBhcmcuZmlsZU5hbWU7XHJcbiAgICAgICAgcmVwbHlPYmoucmVzdWx0ID0gY2hlY2tJZkZpbGUocGF0aFRvRmlsZSkgXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgIC8vIGRlZmF1bHQgb3BlcmF0aW9uXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKCdzeW5jaHJvbm91cy1yZXBseSA+Pj4+Pj4+PiAnLCByZXBseU9iaik7ICAvLyBwcmludHMgXCJwaW5nXCJcclxuICAgIGV2ZW50LnJldHVyblZhbHVlID0gcmVwbHlPYmo7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHNldEFwcGxpY2F0aW9uQmFzZSgpIHtcclxuICAgIC8vIGNyZWF0ZSBkYXRhIGNvbnRhaW5lciBkaXJlY3RvcnkgZm9yIGFwcCBpZiBub3QgZXhpc3QgXHJcbiAgICBtYWtlRGlycyh1c2VyRGF0YVBhdGggKyBjb250ZW50RGlyKTtcclxuXHJcbiAgICAvLyBhZGQgbW9yZSBwcmVsaW1pbW5hcnkgb3BlcmF0aW9ucyB3aGVuIG5lZWRlZFxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVhZEZpbGUoZmlsZXBhdGgpIHtcclxuICAgIC8qIEdldCByaWQgZm9yIGZzZSBhbmQgbWFrZSB1c2Ugb2YgRlMgZnVuY3Rpb25zIGl0c2VsZiAqL1xyXG4gICAgZnNlLnJlYWRGaWxlKGZpbGVwYXRoLCAndXRmLTgnLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlYWRGaWxlIGZhaWx1cmUhIEFuIGVycm9yIG9jdXJyZWQgcmVhZGluZyB0aGUgZmlsZSA6XCIgKyBlcnIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjb3B5RmlsZU5EaXIoc3JjLCBkZXN0KSB7XHJcbiAgICAvLyBzcmMgJiBkZXN0IGNhbiBiZSBhIGZpbGUgb3IgZGlyZWN0b3J5XHJcbiAgICB0cnkge1xyXG4gICAgICAvKiBHZXQgcmlkIGZvciBmc2UgYW5kIG1ha2UgdXNlIG9mIEZTIGZ1bmN0aW9ucyBpdHNlbGYgKi9cclxuICAgICAgY29uc29sZS5sb2coXCJjb3B5RmlsZU5EaXIgLSAlZCwgdG86ICVkXCIsIHNyYywgZGVzdCk7XHJcbiAgICAgIGZzZS5jb3B5KHNyYywgZGVzdClcclxuICAgICAgY29uc29sZS5sb2coXCJjb3B5RmlsZU5EaXIgc3VjY2VzcyFcIilcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiY29weUZpbGVORGlyIGZhaWx1cmUhIGZyb206ICVkLCB0bzogJWRcIiwgc3JjLCBkZXN0LCBlcnIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtb3ZlRmlsZU5EaXIoc3JjLCBkZXN0KSB7XHJcbiAgICAvLyBzcmMgJiBkZXN0IGNhbiBiZSBhIGZpbGUgb3IgZGlyZWN0b3J5XHJcbiAgICB0cnkge1xyXG4gICAgICAvKiBHZXQgcmlkIGZvciBmc2UgYW5kIG1ha2UgdXNlIG9mIEZTIGZ1bmN0aW9ucyBpdHNlbGYgKi9cclxuICAgICAgZnNlLm1vdmUoc3JjLCBkZXN0KVxyXG4gICAgICBjb25zb2xlLmxvZyhcIm1vdmVGaWxlTkRpciBzdWNjZXNzIVwiKVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJtb3ZlRmlsZU5EaXIgZmFpbHVyZSEgZnJvbTogJWQsIHRvOiAlZFwiLCBzcmMsIGRlc3QsIGVycilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZUZpbGVORGlycyh0YXJnZXRQYXRoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvKiBHZXQgcmlkIGZvciBmc2UgYW5kIG1ha2UgdXNlIG9mIEZTIGZ1bmN0aW9ucyBpdHNlbGYgKi9cclxuICAgICAgZnNlLnJlbW92ZSh0YXJnZXRQYXRoKVxyXG4gICAgICBjb25zb2xlLmxvZyhcInJlbW92ZUZpbGVORGlycyBzdWNjZXNzIVwiKVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJyZW1vdmVGaWxlTkRpcnMgZmFpbHVyZSEgdGFyZ2V0UGF0aDogJWRcIiwgdGFyZ2V0UGF0aCwgZXJyKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWFrZURpcnMoZGlyUGF0aCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLyogR2V0IHJpZCBmb3IgZnNlIGFuZCBtYWtlIHVzZSBvZiBGUyBmdW5jdGlvbnMgaXRzZWxmICovXHJcbiAgICAgIGZzZS5ta2RpcnMoZGlyUGF0aCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibWFrZURpcnMgc3VjY2VzcyFcIilcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwibWFrZURpcnMgZmFpbHVyZSEgZGlyUGF0aDogJWRcIiwgZGlyUGF0aCwgZXJyKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2F2ZUZpbGVDb250ZW50KGZpbGVQYXRoLCBmaWxlQ29udGVudCkge1xyXG4gICAgLyogR2V0IHJpZCBmb3IgZnNlIGFuZCBtYWtlIHVzZSBvZiBGUyBmdW5jdGlvbnMgaXRzZWxmICovXHJcbiAgICBmc2Uub3V0cHV0RmlsZShmaWxlUGF0aCwgZmlsZUNvbnRlbnQsIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYXZlRmlsZUNvbnRlbnQgZmFpbHVyZSEgJywgZXJyKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzYXZlUkZTRG9jdW1lbnQoZGlyUGF0aCwgZmlsZU5hbWUsIGZpbGVVcmwpIHtcclxuICAgIC8qIEdldCByaWQgZm9yIGZzZSBhbmQgbWFrZSB1c2Ugb2YgRlMgZnVuY3Rpb25zIGl0c2VsZiAqL1xyXG4gICAgZnNlLmVuc3VyZURpcihkaXJQYXRoLCBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGRpciBoYXMgbm93IGJlZW4gY3JlYXRlZCwgaW5jbHVkaW5nIHRoZSBkaXJlY3RvcnkgaXQgaXMgdG8gYmUgcGxhY2VkIGluXHJcbiAgICAgICAgbGV0IGZpbGUgPSBmcy5jcmVhdGVXcml0ZVN0cmVhbShkaXJQYXRoICsgZmlsZU5hbWUpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBsZXQgcmVxdWVzdCA9IGh0dHAuZ2V0KGZpbGVVcmwsIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICByZXNwb25zZS5waXBlKGZpbGUpO1xyXG4gICAgICAgICAgfSkub24oXCJlcnJvclwiLCBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNhdmVSRlNJbWFnZShkaXJQYXRoLCBmaWxlTmFtZSwgZmlsZUNvbnRlbnQpIHtcclxuICAgIC8qIEdldCByaWQgZm9yIGZzZSBhbmQgbWFrZSB1c2Ugb2YgRlMgZnVuY3Rpb25zIGl0c2VsZiAqL1xyXG4gICAgZnNlLmVuc3VyZURpcihkaXJQYXRoLCBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGRpciBoYXMgbm93IGJlZW4gY3JlYXRlZCwgaW5jbHVkaW5nIHRoZSBkaXJlY3RvcnkgaXQgaXMgdG8gYmUgcGxhY2VkIGluXHJcbiAgICAgICAgLyogVE8tRE8gKi9cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrSWZGaWxlKGFQYXRoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gZnMuc3RhdFN5bmMoYVBhdGgpLmlzRmlsZSgpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBpZiAoZS5jb2RlID09PSAnRU5PRU5UJykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpc0RpclN5bmMoYVBhdGgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBmcy5zdGF0U3luYyhhUGF0aCkuaXNEaXJlY3RvcnkoKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgaWYgKGUuY29kZSA9PT0gJ0VOT0VOVCcpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pO1xyXG4iXX0=
