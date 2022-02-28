import { connectToDB, dbQuery } from "../../../lib/db";
import { getSession } from "next-auth/react";
export default async function handler(req, res) {
  if (req.method === "PATCH") {
    const session = await getSession({ req: req });
    const user_email = session.user.email;
    const billing_details = req.body;
    const client = await connectToDB();
    const queryObject = {
      query:
        "UPDATE customers SET first_name = ?, last_name = ? , street_address = ?, street_address_2 = ?, postcode = ?, phone_num = ?, city = ?, country = ?, company_name = ?, vat = ? where email=?",
      values: [
        billing_details.first_name,
        billing_details.last_name,
        billing_details.streetAddr1,
        billing_details.streetAddr2,
        billing_details.postcode,
        billing_details.phone_number,
        billing_details.city,
        billing_details.country,
        billing_details.company_name,
        billing_details.vat,
        user_email,
      ],
    };

    const result = await dbQuery(client, queryObject);
    sendEmailSales();
    res.status(200).json({ message: result });
  }
}

/*function async sendEmailSales(billingData){}*/
