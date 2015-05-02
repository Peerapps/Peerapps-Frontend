Peerapps Frontend [[Backend Repo]](https://github.com/Peerapps/Peerapps)
===
[![Tip Balance For Commits](http://peer4commit.com/projects/148.svg)](http://peer4commit.com/projects/148)

This folder contains the source code to the default Peerapps platform frontend. Mod it at will! It will not be bundled up in the binary, but rather will be a folder existing next to the binary - so any end user can mod the frontend themselves or simply drag and drop a community frontend in.

## What can I mod?
When the app starts up, it opens setup.html in the user's default browser. The other html files are the other landing pages for the different modules within Peerapps. You need to keep those html pages, but you are welcome to mod them however you'd like! You can also add/remove anything in the static folder.

## But what about the backend?!?
Mockjax is installed - which means all backend api calls are intercepted and returned with frozen valid data (or an error). This means to install a frontend on a production version of peerapps, you simply need to open up static/js/peerapps_mockjax.js and set enable_mockjax=false, and boom, production-ready!

## How do I run this code?
Just drag and drop one of the html filters onto your browser. Done. No special software needed.

## How do I publish my mod?
 - Fork this repo.
 - Make your mods, publish them to your fork.
 - Submit a pull request to this repo adding a link to your forked repo in the community frontend section below. Do not include your mods in the pull request, ONLY edit this readme and add a link to your fork.

## Community Frontends
 - emeth: 3 column bootstrap [Source](https://github.com/Peerapps/Peerapps-Frontend) [Demo](https://cdn.rawgit.com/Peerapps/Peerapps-Frontend/master/setup.html)

