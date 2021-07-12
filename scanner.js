const scanner = require("sonarqube-scanner");
scanner({
serverUrl : 'http://54.225.13.81:9000/',
token : "171a5a2dab1fdd9fa833cf7f984a40b4644a2c1e",
options: {
"sonar.projectKey": "Test_Project",
"sonar.sources": "/home/ubuntu/arachni/"
},
},
() => {
// callback is required
}
);
