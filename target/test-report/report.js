$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("parser.feature");
formatter.feature({
  "line": 1,
  "name": "Parsing User Input",
  "description": "",
  "id": "parsing-user-input",
  "keyword": "Ability"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the game parser",
  "keyword": "Given "
});
formatter.match({
  "location": "ParserSteps.theGameParser()"
});
formatter.result({
  "duration": 120732664,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat com.rosetta.ParserSteps.theGameParser(ParserSteps.java:12)\n\tat ✽.Given the game parser(parser.feature:4)\n",
  "status": "pending"
});
formatter.scenario({
  "line": 6,
  "name": "Parse a valid single word command",
  "description": "",
  "id": "parsing-user-input;parse-a-valid-single-word-command",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "the command \"inventory\" is parsed",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the verb is \"inventory\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "there is no direct object",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the parser response is \"Success\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "inventory",
      "offset": 13
    }
  ],
  "location": "ParserSteps.theCommandIsParsed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "inventory",
      "offset": 13
    }
  ],
  "location": "ParserSteps.theVerbIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ParserSteps.thereIsNoDirectObject()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 24
    }
  ],
  "location": "ParserSteps.theParserResponseIs(String)"
});
formatter.result({
  "status": "skipped"
});
});