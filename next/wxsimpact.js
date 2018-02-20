const { exec } = require('child_process');

function wxsimpact(req, res) {
    var module = req.query.module;
    var changesets = req.query.changesets;
    console.log(`--- GetLatest to c:\\ws2\\mo\\${module}\\pcp\\v5`)
    exec(`tf.exe get /recursive c:\\ws2\\mo\\${module}\\pcp\\v5`,
        (err, stdout, stderr) => {
            if (err) {
                console.log(err);
                res.send({
                    result: [`an error happened while trying to get latest of ${module}`],
                    error: err
                });
                return;
            }
            console.log(`--- phase 1 - C:\\ws2\\bi\\DeployedTools\\ChangedSoftware.exe csi /changesets=${changesets} /o=\\bj\\temp\\csi.xml /ws=\\ws2\\mo\\${module}\\pcp\\v5`)
            exec(`C:\\ws2\\bi\\DeployedTools\\ChangedSoftware.exe csi /changesets=${changesets} /o=\\bj\\temp\\csi.xml /ws=\\ws2\\mo\\${module}\\pcp\\v5`,
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
                    console.log(`--- phase 2 - C:\\ws2\\bi\\DeployedTools\\ChangedSoftware.exe a /changes=\\bj\\temp\\csi.xml /ws=\\ws2\\mo\\${module}\\pcp\\v5`)
                    exec(`C:\\ws2\\bi\\DeployedTools\\ChangedSoftware.exe a /changes=\\bj\\temp\\csi.xml /ws=\\ws2\\mo\\${module}\\pcp\\v5`,
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
                            let countdown = -1;
                            for (var i = 0; i < lines.length; i++) {
                                console.log(lines[i]);
                                if (lines[i].startsWith('Summary:')) countdown = 2;
                                if (countdown > 0) countdown--;
                                if (countdown == 0) {
                                    items.push(lines[i].trim());
                                }
                            }
                                    res.send({
                                result: items,
                                error: ""
                            });
                            console.log('done')
                        });
                });
        });
}

module.exports = { wxsimpact };