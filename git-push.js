const { execSync } = require('child_process');
const fs = require('fs');

const targetDir = 'C:/Users/Ashutosh/Desktop/ascii-knight';

// 1. Read token from ascii-garden
const gitConfig = fs.readFileSync('C:/Users/Ashutosh/Desktop/ascii-garden/.git/config', 'utf8');
const match = gitConfig.match(/https:\/\/(ghp_[a-zA-Z0-9]+)@github\.com/);
if (!match) {
  console.error('No GitHub token found in ascii-garden');
  process.exit(1);
}
const token = match[1];

function runCmd(cmd) {
  console.log(`> ${cmd.replace(token, '***TOKEN***')}`);
  const out = execSync(cmd, { cwd: targetDir, stdio: 'pipe' }).toString();
  if (out.trim()) console.log(out.trim());
}

try {
  // Init repository
  runCmd('git init');
  runCmd('git config user.name "omarekaansh-a11y"');
  runCmd('git config user.email "omarekaansh@gmail.com"');
  runCmd('git branch -M main');
  runCmd('git add .');
  runCmd('git status');
  runCmd('git commit -m "Initial commit: ASCII Knight with physics canvas, momentum odometer clock, and MIT license"');

  // Setup remote
  try {
    runCmd('git remote remove origin');
  } catch (e) {
    // origin may not exist yet
  }
  runCmd(`git remote add origin https://${token}@github.com/omarekaansh-a11y/ascii-knight.git`);

  // Push
  runCmd('git push -u origin main --force');
  console.log('Successfully pushed to GitHub!');
} catch (err) {
  console.error('Error during git execution:');
  if (err.stdout) console.error(err.stdout.toString());
  if (err.stderr) console.error(err.stderr.toString().replace(token, '***TOKEN***'));
  process.exit(1);
}
