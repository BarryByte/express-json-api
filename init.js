const { exec } = require('child_process');

exec('node fetchData.js', (err, stdout, stderr) => {
    if (err) {
        console.error('Initialization error:', err);
        return;
    }
    console.log(stdout);
    console.error(stderr);
});
