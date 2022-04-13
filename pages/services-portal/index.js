import ServicesPortalMain from "../../components/services_portal/servicesPortalMain";
import { promiseResolver } from "../../lib/promiseResolver";

export default function ServicesPortal(props) {
  if (props.status === "authenticated") {
    return <ServicesPortalMain session={null} status={props.status} />;
  } else {
    return <div>fuck off</div>;
  }
}

export async function getServerSideProps(context) {
  if (context.req?.cookies?.uat) {
    const [data, error] = await promiseResolver(
      fetch("http://localhost/kmweb/WebSite/check-login-token", {
        method: "POST",
        body: JSON.stringify({
          LoginToken: context.req.cookies.uat,
        }),
      })
    );
    if (error) {
      console.log(error);
    } else {
      if (data.status === 200) {
        return {
          props: {
            status: "authenticated",
            loginToken: context.req.cookies.uat,
          },
        };
      } else {
        return {
          props: {
            status: "invalid",
            loginToken: context.req.cookies.uat,
          },
        };
      }
    }
  } else {
    return {
      props: {
        status: "unauthenticated",
      },
    };
  }
  return {
    props: {
      status: "unauthenticated",
    },
  };
}
