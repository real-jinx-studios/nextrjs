import { useSession, signOut } from "next-auth/react";

export default async function handler(req, res) {
  const { data: session, state } = useSession;
  try {
    const signout = await signOut();
    res.status(200).json({ message: "signed out user: " + session.user.name });
  } catch (e) {
    res.status(500).json({
      message: "couldnt find user session to sign out from",
      error: e.message,
    });
  }
}
