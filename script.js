const fs = require('fs');

let root = '.';
let readDir = function(root) {
    fs.readdir(root, function(err, files) {
        if (err) {
            console.log(err);
            return;
        }
        for (let f of files) {
            if (f[0] == '.') {
                continue;
            }
            let file = root+'/'+f;
            if (fs.statSync(file).isDirectory()) {
                readDir(file)
                if (f.indexOf('-Q') > 0) {
                    fs.renameSync(file, root + '/' + f.replace('-Q', '-'));
                }
                
            } else if (f.substr(-3) == '.md') {
                fs.renameSync(file, root+'/readme.md');
            }
        }
    })
}
readDir(root);

