const { exec } = require('child_process');
const path = require('path');

const DEFAULT = {
    Collection: "https://tfs.healthcare.siemens.com:8090/tfs/IKM.TPC.Projects",
    TeamProject: "$/syngo.net/",
    ModulesPath: "/modules/",
    Branch: "/pcp/v5/",
}

function tf_history(collection = DEFAULT.Collection, teamProject, modulesPath, moduleName, branch, stopafter = 20) {
    var serverPath = buildServerPath(teamProject, modulesPath, moduleName, branch);
    exec(`tf.exe history ${serverPath} /collection:${collection} /noprompt /recursive /stopafter:${stopafter}`,
        (err, stdout, stderr) => {
            if (err) {
                console.error(err);
                return [];
            }
            return historyParser(stdout);
        });
}

function buildServerPath(
    teamProject = DEFAULT.TeamProject,
    modulesPath = DEFAULT.ModulesPath,
    moduleName,
    branch = DEFAULT.Branch
) {
    return path.posix.join(teamProject, modulesPath, moduleName, branch);
}

function historyParser(input) {
    if (!input) return [];
    var items = [];
    var lines = input.split("\n");
    // we assume that the 2nd line consists of groups of series of dash caracters,
    // each of them is as long as the column below it
    // and the groups are separated by a space char
    var width = lines[1].trim().split(" ");
    for (var i = 2; i < lines.length; i++) {
        var line = lines[i].trim();
        if (line) {
            var item = {
                id: line.substr(0, width[0].length).trim(),
                submitter: line.substr(width[0].length + 1, width[1].length).trim(),
                date: line.substr(width[0].length + width[1].length + 2, width[2].length).trim(),
                comment: line.substr(width[0].length + width[1].length + width[2].length + 3, width[3].length).trim(),
            }
            items.push(item);
        }
    }
    return items;
}

function getLatest(localPath, callback) {
    exec(`tf.exe get /recursive ${localPath}`,
        (err, stdout, stderr) => {
            // if (err) {
            //     console.error(err);
            //     return;
            // }
            if (callback) console.log(callback());
            // console.log(callback());
    });
}

function tfHistory(req, res) {
    var module = req.query.module;
    console.log(`requesting history for '${module}'`);
    exec(`tf.exe get /recursive c:\\ws2\\mo\\${module}\\pcp\\v5`,
        (err, stdout, stderr) => {
            var getlatest = stdout.split("\n");
            getlatest.forEach(function (line) {
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

module.exports = { tfHistory, buildServerPath, historyParser, getLatest };