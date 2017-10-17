const { exec } = require('child_process');

function tfHistory(req, res) {
    exec('tf.exe history $/syngo.net/modules/foundations/pcp/v5 /collection:https://tfs.healthcare.siemens.com:8090/tfs/IKM.TPC.Projects /noprompt /recursive /stopafter:20', (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(stdout);
    });
}

module.exports={tfHistory};