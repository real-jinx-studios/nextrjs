const soap = require("soap");
const url = "https://ec.europa.eu/taxation_customs/vies/checkVatService.wsdl";
//valid vat for debug FR 96539474064
export default async function handler(req, res) {
  const vat = JSON.parse(req.body).vat;
  const args = { countryCode: "FR", vatNumber: vat };
  return new Promise((resolve, reject) => {
    soap
      .createClientAsync(url, { overridePromiseSuffix: "Promise" })
      .then((client) => {
        client.checkVat(args, function (err, result) {
          res.status(200).json({ valid: result.valid });
          resolve();
        });
      })
      .catch((e) => {
        res.status(418).json({ message: "something i didnt handle broke" });
        resolve();
      });
  });
}
