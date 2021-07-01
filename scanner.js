const scanner = require("sonarqube-scanner");
scanner({
serverUrl : 'http://54.167.30.197:9000/',
token : "ae51059a76051b64e76a36ba8ab3e7244f1a4ed4",
options: {
"sonar.projectKey": "New_Project",
"sonar.sources": "/home/ubuntu/arachni/"
},
},
() => {
// callback is required
}
);
