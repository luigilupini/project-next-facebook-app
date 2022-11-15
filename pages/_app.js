import "../styles/globals.css";
import { Provider } from "next-auth/client";
/* Configure Shared session state:
To be able to use `useSession` first you'll need to expose the session context,
`SessionProvider` at the top-level of your application: `pages/_app.jsx`. We are
wrapping the application in a Provider, as seen in Redux. This will allow us to 
have a logged in persistent state throughout the application, component tree. */
export default function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}

/* Instances of useSession will then have access to the session data and status.
The `SessionProvider` also takes care of keeping the session updated and synced
between browser tabs and windows. For more information, see documentation. */
