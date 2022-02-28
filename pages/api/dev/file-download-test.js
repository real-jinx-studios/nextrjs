const fs = require("fs").promises;
const https = require("https");
var request = require("request");

export default async function handler(req, res) {
  const filePath = "https://nextjsstorage.blob.core.windows.net/test-files/";
  const fileName = req.body.name;
  const uri = filePath.concat(fileName);
  const request = https.get(uri, function (response) {
    console.log(response.host);
    console.log(Object.keys(response.host));
    res.setHeader(
      "content-type",
      "application/vnd.microsoft.portable-executable"
    );
    res.status(200);
    res.send(response);
    res.end();
  });
}
