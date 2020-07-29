const childProcess = require('child_process');

if (process.platform === 'win32') {
  childProcess
    .execFileSync(
      'powershell.exe',
      // eslint-disable-next-line max-len
      ['-c', '[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; iwr https://deno.land/x/install/install.ps1 -useb | iex'],
    );
} else {
  childProcess
    .execSync('curl -fsSL https://deno.land/x/install/install.sh | sh');
}
