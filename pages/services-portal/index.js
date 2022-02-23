import ServicesPortalMain from "../../components/services_portal/servicesPortalMain";
import { getSession, useSession } from "next-auth/react";

export default function ServicesPortal(props) {
  const { data: session, status } = useSession();
  return <ServicesPortalMain session={session} status={status} />;
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  return {
    props: {
      shit: "shit",
    },
  };
}
