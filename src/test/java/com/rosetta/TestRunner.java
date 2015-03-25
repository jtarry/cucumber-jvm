package com.rosetta;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
 
@RunWith(Cucumber.class)
@CucumberOptions(
	snippets = SnippetType.CAMELCASE,
	format={"pretty",
		"html:target/test-report",
		"json:target/test-report.json",
		"junit:target/test-report.xml"},
	features="src/specs")
public class TestRunner {}