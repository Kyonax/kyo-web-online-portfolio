const fs = require("fs");

import pullHTMLConfig from "./bin/config/public.html";

function _buildPublic() {

}

function _writeIndex() {
  try {
    fs.writeFile('testing.html', "<!DOCTYPE html>", () => console.log('  ✅ Initializing Configuration ./public/index.html'));
    fs.appendFile('testing.html', pullHTMLConfig(), () => console.log('  ✅ Writting Content Configuration ./public/index.html'));
  } catch (err) {
    console.error('🚩 Error while writting a file.', err);
  }
}

_buildPublic();
