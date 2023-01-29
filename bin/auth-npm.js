const fs = require('fs');
const os = require('os');
const path = require('path');

// I prefer wrapping it in a function, but it's not required
function writeRegistryFile() {
  // Resolve the path of .npmrc
  const npmrc = path.resolve(process.cwd(), '.npmrc');

  // Grab values from Environment variables (highly recommended)
  const registryUrlGit = process.env.REGISTRY_URL;
  const scopeGit = process.env.GITHUB_SCOPE;
  // Generic registry npm
  const registryUrl = 'https://registry.npmjs.org/';
  // Output the values (helps with debugging)
  // console.log('npmrc: ', npmrc);
  // console.log('registry url: ', registryUrl);
  // console.log('github', registryUrlGit);
  // console.log('scope: ', scope);

  // GITHUB_NPM_TOKEN always lives in the environment variables, but it's handled by github
  const authStringGit = `${registryUrlGit.replace(/(^\w+:|^)/, '')}:_authToken=${
    process.env.GITHUB_NPM_TOKEN
  }`;

  // NPM_TOKEN always lives in the environment variables, but it's handled by NPM
  // if private package it's of npm too
  /*  const authString = `${registryUrlGit.replace(/(^\w+:|^)/, '')}:_authToken=${
    process.env.NPM_TOKE
  }`; */
  const registryStringGit = `${scopeGit}:registry=${registryUrlGit}`;
  const registryString = `registry=${registryUrl}`;
  const contents = `${authStringGit}${os.EOL}${registryStringGit}${os.EOL}${registryString}${os.EOL}`;

  fs.writeFileSync(npmrc, contents);
}

// Execute code :)
writeRegistryFile();
