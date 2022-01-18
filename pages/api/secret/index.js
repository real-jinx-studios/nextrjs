import { getSession } from "next-auth/react";

export default async (req, res) => {
  const session = await getSession({ req });

  if (session) {
    res.send({ content: "" });
  } else {
    res.send({
      error: "Sign in first",
    });
  }
};
