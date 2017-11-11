const { exec } = require('child_process');

function wxsimpact(req, res) {
    var module = req.query.module;
    var changesets = req.query.changesets;
    console.log('phase 1')
    exec(
        `C:\\ws2\\bi\\DeployedTools\\ChangedSoftware.exe csi /changesets=${changesets} /o=\\bj\\temp\\csi.xml /ws=\\ws2\\mo\\${module}\\pcp\\v5`,
        { cwd: 'c:\\ws2\\mo' },
        (err, stdout, stderr) => {
            var lines = stdout.split("\n");
            for (var i = 0; i < lines.length; i++) {
                console.log(lines[i]);
            }
            if (err) {
                console.error(err);
                res.send({
                    result: [],
                    error: err
                });
                return;
            }
            console.log('phase 2')
            exec(
                `C:\\ws2\\bi\\DeployedTools\\ChangedSoftware.exe a /changes=\\bj\\temp\\csi.xml /ws=\\ws2\\mo\\${module}\\pcp\\v5`,
                { cwd: 'c:\\ws2\\mo' },
                (err, stdout, stderr) => {
                    if (err) {
                        console.error(err);
                        res.send({
                            result: [],
                            error: err
                        });
                        return;
                    }
                    var items = [];
                    var lines = stdout.split("\n");
                    var firstImpact = -1;
                    var lastImpact = -1;
                    for (var i = 0; i < lines.length; i++) {
                        console.log(lines[i]);
                        if (lines[i].startsWith('Affected')) {
                            if (firstImpact > 0) lastImpact = i - 1;
                            else firstImpact = i + 1;
                        }
                        else if (firstImpact > 0 && lastImpact < 0) {
                            items.push(lines[i].trim());
                        }
                    }
                    res.send({
                        result: items.join(),
                        error: ""
                    });
                    console.log('done')
                });
        });
}

module.exports = { wxsimpact };