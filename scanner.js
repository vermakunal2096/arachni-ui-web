const scanner = require("sonarqube-scanner");
scanner({
serverUrl : 'http://34.229.141.115:9000/',
token : "2016b34e178cbe181b689de2b1dc0f7f14d5083e",
options: {
"sonar.projectKey": "Test_Project",
"sonar.sources": "/home/ubuntu/arachni/"
},
},
() => {
// callback is required
}
);
