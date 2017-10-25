const { exec } = require('child_process');

function tfHistory(req, res) {
    exec('tf.exe history $/syngo.net/modules/foundations/pcp/v5 /collection:https://tfs.healthcare.siemens.com:8090/tfs/IKM.TPC.Projects /noprompt /recursive /stopafter:20', (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        var items = [];
        var lines = stdout.split("\n");
        console.log(`${lines.length} line(s)`);
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            var cols = /(\d+)\s+(\w+,*\s*\w+)\.*\s+([\d-\.]+)\s+(.*)\s*#/g.exec(line);
            if (cols && cols.length>1){
                var item ={
                    id: cols[1],
                    submitter: cols[2],
                    date: cols[3],
                    comment: cols[4]
                };
            
                items.push(item);
                console.log(item);
            }
        }
        console.log(items.length);
        res.send({changesets: items});
    });
}

module.exports = { tfHistory };