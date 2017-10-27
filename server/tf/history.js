const { exec } = require('child_process');

function tfHistory(req, res) {
    var module = req.query.module;
    console.log(`requesting history for '${module}'`);
    exec(`tf.exe get /recursive c:\\ws2\\mo\\${module}\\pcp\\v5`,
        (err, stdout, stderr) => {
            var getlatest = stdout.split("\n");
            getlatest.forEach(function(line) {
                console.log(line);
            }, this);
            exec(`tf.exe history $/syngo.net/modules/${module}/pcp/v5 /collection:https://tfs.healthcare.siemens.com:8090/tfs/IKM.TPC.Projects /noprompt /recursive /stopafter:20`, (err, stdout, stderr) => {
                if (err) {
                    console.error(err);
                    return;
                }
                var items = [];
                var lines = stdout.split("\n");
                console.log(`${lines.length} line(s)`);
                var width = lines[1].split(" ");
                for (var i = 2; i < lines.length; i++) {
                    var line = lines[i];
                    var item = {
                        id: line.substr(0, width[0].length).trim(),
                        submitter: line.substr(width[0].length + 1, width[1].length).trim(),
                        date: line.substr(width[0].length + width[1].length + 2, width[2].length).trim(),
                        comment: line.substr(width[0].length + width[1].length + width[2].length + 3, width[3].length).trim(),
                    }
                    items.push(item);
                }
                console.log(items.length);
                res.send({ changesets: items });
            });
        });
}

module.exports = { tfHistory };