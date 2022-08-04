const teamJuniors = [1,2,3,4];
const teamSeniors = [6,7,8,9];

teamJuniors.pop();
teamSeniors

teamJuniors.push('new junior');
teamSeniors.push('new senior');

console.log(teamJuniors);
console.log(teamSeniors);

const theTeam = teamJuniors.concat(teamSeniors);
console.log(theTeam);
console.log(theTeam.length);