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
    console.log(`--- requesting history for '${module}' ---------------------------------------`);
    exec(`tf.exe history $/syngo.net/modules/${module}/pcp/v5 /collection:https://tfs.healthcare.siemens.com:8090/tfs/IKM.TPC.Projects /noprompt /recursive /stopafter:20`,
        (err, stdout, stderr) => {
            if (err) {
                console.error(err);
                console.info("\n*** sending back some test data ***\n");
                res.send({
                    changesets: [
                        { id: 494967, submitter: "Siemens Health...", date: "2017-10-11", comment: "created by build process ***NO_CI***  ##BUILDEXTENSION##: Included in Build: Modules.Foundations.PCP.v5.Nightly.Upload.NB_20171011.1" },
                        { id: 494683, submitter: "Varadi, Melind...", date: "2017-10-10", comment: "BI: 2500220 - Service Security SITS was not adapted to the deletion of Licensing option: Implementation  ##BUILDEXTENSION##: Included in Build: Modules.Foundations.PCP.v5.Nightly.Upload.NB_20171011.1" },
                        { id: 494119, submitter: "Siemens Health...", date: "2017-10-09", comment: "created by build process ***NO_CI***  ##BUILDEXTENSION##: Included in Build: Modules.Foundations.PCP.v5.Nightly.Upload.NB_20171009.2    ##BUILDEXTENSION##: Included in Build: Modules.Foundations.PCP.v5.Nightly.Upload.NB_20171011.1" },
                        { id: 494099, submitter: "Dasch, Thomas ...", date: "2017-10-09", comment: "Update WXS version based on impacted changes  ##BUILDEXTENSION##: Included in Build: Modules.Foundations.PCP.v5.Nightly.Upload.NB_20171009.2" },
                        { id: 494093, submitter: "Tyukodi, Zolta...", date: "2017-10-09", comment: "Solution of Defect 2486453 Exception observed while exporting findings from FN,selecting VOI freehand tool,layout selection launching Visual alignment' tool  ##BUILDEXTENSION##: Included in Build: Modules.Foundations.PCP.v5.Nightly.Upload.NB_20171009.2" },
                        { id: 494020, submitter: "Voros, Istvan ...", date: "2017-10-09", comment: "Adapt to hotfix database schema changes (Patient indexes)  ##BUILDEXTENSION##: Included in Build: Modules.Foundations.PCP.v5.Nightly.Upload.NB_20171009.1    ##BUILDEXTENSION##: Included in Build: Modules.Foundations.PCP.v5.Nightly.Upload.NB_20171009.2" },
                        { id: 493036, submitter: "Siemens Health...", date: "2017-10-05", comment: "created by build process ***NO_CI***  ##BUILDEXTENSION##: Included in Build: Modules.Foundations.PCP.v5.Nightly.Upload.NB_20171005.1    ##BUILDEXTENSION##: Included in Build: Modules.Foundations.PCP.v5.Nightly.Upload.NB_20171009.1    ##BUILDEXTENSION##: Included in Build: Modules.Foundations.PCP.v5.Nightly.Upload.NB_20171009.2" },
                        { id: 492879, submitter: "Lengyel, Laszl...", date: "2017-10-05", comment: "Remove extra Clone method  ##BUILDEXTENSION##: Included in Build: Modules.Foundations.PCP.v5.Nightly.Upload.NB_20171005.1" },
                        { id: 492735, submitter: "Siemens Health...", date: "2017-10-04", comment: "created by build process ***NO_CI***  ##BUILDEXTENSION##: Included in Build: Modules.Foundations.PCP.v5.Nightly.Upload.NB_20171004.1    ##BUILDEXTENSION##: Included in Build: Modules.Foundations.PCP.v5.Nightly.Upload.NB_20171005.1" },
                        { id: 492685, submitter: "Dasch, Thomas ...", date: "2017-10-04", comment: "Update WXS version based on impacted changes" },
                        { id: 492627, submitter: "Uhlig, Benjami...", date: "2017-10-04", comment: "Added BaslineForUpdateValidation.xml + activated check in RuleConfiguration.xml" },
                        { id: 492578, submitter: "Tifinger, Istv...", date: "2017-10-04", comment: "Adding IPatientUpdate interface" },
                        { id: 491587, submitter: "Juhasz, Balazs...", date: "2017-09-29", comment: "FI merge 2017IT10 [QR1710]: CS 491018 Foundations Version 5.2.1709.2701" },
                        { id: 461179, submitter: "Uhlig, Benjami...", date: "2017-06-23", comment: "FI merge 2017IT06 [QR1707]: CS 459698 Foundations Version 5.1.1706.2003" },
                        { id: 436027, submitter: "Lorenz, Marco ...", date: "2017-03-27", comment: "FI merge 2017IT03 [QR1704]: CS 435023 Foundations Version 5.0.1703.2202" },
                        { id: 433877, submitter: "Mylka, Martin ...", date: "2017-03-17", comment: "Branched from $/syngo.net/Modules/Foundations/Main" },
                    ]
                });
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
                if (item.id) items.push(item);
            }
            console.log(items.length);
            res.send({ changesets: items });
        });
}

module.exports = { tfHistory, buildServerPath, historyParser, getLatest };