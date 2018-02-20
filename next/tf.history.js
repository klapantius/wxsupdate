const { exec } = require('child_process');

function callAPI(req, res, param, callback) {
    console.log(param);
    exec(`tfs.restapi.exe "${param}"`,
        (err, stdout, stderr) => {
            if (err) {
                console.error(err);
                res.send(err);
                return;
            }
            callback(req, res, stdout);
        });
}

function tfHistory(req, res) {
    var module = req.query.module;
    console.log(`--- requesting history for '${module}' ---------------------------------------`);
    callAPI(req, res, `tfvc/changesets/?searchCriteria.itemPath=$/syngo.net/Modules/${module}/pcp/v5&$top=100&maxCommentLength=999&api-version=2.0`,
        (req, res, stdout) => {
            var x = JSON.parse(stdout);
            var items = [];
            x.value.filter(cs => !cs.author.displayName.startsWith("Siemens Healthineers BuildAccountTpcProject")).forEach(cs => {
                items.push({
                    id: cs.changesetId,
                    submitter: cs.author.displayName,
                    date: cs.createdDate,
                    comment: cs.comment,
                });
            });
            res.send({ changesets: items });
        });
}


module.exports = { tfHistory };