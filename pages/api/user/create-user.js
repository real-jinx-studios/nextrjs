import { connectToDB, dbQuery } from "../../../lib/db";
import { hashPassword } from "../../../lib/auth";
let nodemailer = require("nodemailer");
let aws = require("@aws-sdk/client-ses");
const { randomBytes } = require("crypto");

export default async function handler(req, res) {
  const user_details = JSON.parse(req.body);

  const valid = true;

  if (valid) {
    const client = await connectToDB();

    const isUserCreated = await create_user(client, {
      email: user_details.email,
      username: user_details.username,
      password: user_details.password,
    });
    let isCustomerCreated;
    if (isUserCreated) {
      isCustomerCreated = await create_customer(client, {
        first_name: user_details.first_name,
        last_name: user_details.last_name,
        email: user_details.email,
        streetAddr1: user_details.streetAddr1,
        streetAddr2: user_details.streetAddr2,
        postcode: user_details.postcode,
        phone_number: user_details.phone_number,
        city: user_details.city,
        country: user_details.country,
        company_name: user_details.company_name,
        vat: user_details.vat,
      });
    }

    const isMailSent = send_mail(client, {
      first_name: user_details.first_name,
      last_name: user_details.last_name,
      email: user_details.email,
    });
    if (isUserCreated && isCustomerCreated && isMailSent) {
      res.status(200).json({ message: "write successful" });
      return;
    }
    res.status(500).json({ message: "complete breakdown. fuck off." });
  }

  res.status(500).json({ message: "failed to write for some reason" });
}

async function create_user(client, userObject) {
  const password = userObject.password;
  const hashedPassword = await hashPassword(password);
  const queryObject = {
    query: "INSERT INTO users VALUES (?,0,?,?)",
    values: [userObject.email, hashedPassword, userObject.username],
  };
  const results = await dbQuery(client, queryObject);
  return true;
}

async function create_customer(client, customerObject) {
  const queryObject = {
    query: "INSERT INTO customers VALUES (?,?,?,?,?,?,?,?,?,?,?)",
    values: [
      customerObject.first_name,
      customerObject.last_name,
      customerObject.email,
      customerObject.streetAddr1,
      customerObject.streetAddr2,
      customerObject.postcode,
      customerObject.phone_number,
      customerObject.city,
      customerObject.country,
      customerObject.company_name,
      customerObject.vat,
    ],
  };
  const results = await dbQuery(client, queryObject);

  return true;
}

async function send_mail(client, emailObject) {
  try {
    //generate a random string for email confiramtion
    const random_bytes = await randomBytes(32);
    const email_token = random_bytes.toString("hex");

    //write token to db
    const queryObject = {
      query: "INSERT INTO email_verification VALUES (?,?)",
      values: [emailObject.email, email_token],
    };
    const results = await dbQuery(client, queryObject);

    //init email client
    let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false, // upgrade later with STARTTLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    //prep message for user
    let message = {
      from: "real.martin.zannato@gmail.com",
      //to: email,
      to: "real.jinx.studios@gmail.com",
      subject: "Account confirmation for EZTitles",
      text: `Hej ${emailObject.first_name} ${emailObject.last_name}, Please confirm your account by clicking the link http://localhost:3000/api/auth/confirm/?some-token`,
      html: `Hej ${emailObject.first_name} ${emailObject.last_name},<br>Please confirm your account by clicking the link http://localhost:3000/api/user/verify/${emailObject.email}/${email_token}`,
    };

    //send email to user
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error, "error");
      } else {
        transporter.sendMail(message);
      }
    });
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}
