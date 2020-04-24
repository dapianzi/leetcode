/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    // var pathStack = [], file = '';
    // var pushPath = function(file) {
    //     if (file === '..') {
    //         pathStack.pop();
    //     } else if (file !== '.') {
    //         pathStack.push(file);
    //     }
    // };
    // if (path[0] == '/') {
    //     for (var i=1;i<path.length;i++) {
    //         if (path[i] == '/') {
    //             if (path[i-1] == '/') {
    //                 continue;
    //             } else {
    //                 pushPath(file);
    //                 file = '';
    //             }
    //         } else {
    //             file += path[i];
    //         }
    //     }
    // }
    // pushPath(file);
    // return '/'+pathStack.join('/');

    // 
    var files = path.split('/'), paths = [];
    for (var i=0;i<files.length;i++) {
        if (files[i] == '.' || files[i] == '') {
            continue;
        } else if (files[i] == '..') {
            paths.pop();
        } else {
            paths.push(files[i]);
        }
    }
    return '/'+paths.join('/');
};
var arr = [
    '/home/',
    '/../',
    '/home//foo/',
    '/a/./b/../../c/d',
    '/a/..//../b/../c//.//',
    '/a//b////c/d//././/..',
];
for (var i in arr) {
    console.log(simplifyPath(arr[i]));
}