import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import LoaderDots from "../../components/utils/loaderDots";

export default function UserRedirect(props) {
  const router = useRouter();
  const { data, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/services-portal");
    } else {
      router.replace("/user/login");
    }
  }, [status]);

  return (
    <section className="container center">
      <LoaderDots size="xl" color="system" />
    </section>
  );
}
