import { useSession, signOut } from "next-auth/react";

export default function Secret() {
  const { status } = useSession();
  if (typeof window !== "undefined") {
    return null;
  }

  if (status !== "unauthorized") {
    return (
      <main>
        <div>
          <h1>SIGN IN</h1>
        </div>
      </main>
    );
  }

  return (
    <section>
      <div>
        <button className={"button_basic_long"}>sign out</button>
      </div>
    </section>
  );
}
