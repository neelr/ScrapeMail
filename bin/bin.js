#!/usr/bin/env node
var emails = require("../app");

var args = process.argv.splice(process.execArgv.length + 2);
var url = args[0];
if (url) {
    emails.getEmails(url);
} else {
    console.log("\x1b[1m\x1b[31mNo URL Provided...\x1b[0m")
}