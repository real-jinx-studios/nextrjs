export default async function handler(req, res) {
  if (req.method === "POST") {
    const paymentType = req.body.paymentType;

    setTimeout(function () {
      if (paymentType === "paypal") {
        res.status(200).json({ result: "failed" });
      } else {
        res.status(200).json({ result: "success" });
      }
    }, 4200);
  }
}
