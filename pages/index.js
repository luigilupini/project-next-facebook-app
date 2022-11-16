import Head from "next/head";
import Header from "../components/Header";
import Login from "../components/Login";
import SideBar from "../components/SideBar";
import Feed from "../components/Feed";
import { getSession, signOut } from "next-auth/client";
/* # Add React Hook:
The `useSession` React Hook in the `next-auth` client is an easy way to check if
someone is signed in. Use the hook from anywhere in your application. */

export default function Home({ session }) {
  // console.log(session);
  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />
      <main className="flex bg-gray-100">
        <SideBar />
        <Feed />
        {/* <Widgets /> */}
      </main>
    </div>
  );
}
/* Here in include server-side rendering
If you export a function called getServerSideProps (Server-Side Rendering) from
a page, Next will "pre-render" this page on each request using the data returned
by getServerSideProps. Note that irrespective of rendering type, any props will
be passed to the page component and can be viewed on the client-side browser, in
the initial HTML. This is to allow the page to be hydrated correctly. Make sure
you don't pass anything sensitive that shouldn't be seen on the client in props.

# When does getServerSideProps run
getServerSideProps only runs on server-side and never runs on the browser. If a
page uses getServerSideProps, then:

- When you request this page directly, getServerSideProps runs at request time,
and this page will be pre-rendered with the returned props

- When you request this page on client-side page transitions through a next/link
or next/router, Next sends an API request to the server, running this function

- getServerSideProps returns JSON which will be used to render the page. All the
work will be handled automatically by Next.js with getServerSideProps defined

getServerSideProps can only be exported from a `page`, not non-page files. Note,
you must export getServerSideProps as a standalone function. It will not work if
you add it as a property of the page component. See the getServerSideProps API
reference for all parameters and props used with getServerSideProps.

# When should I use getServerSideProps
You should use getServerSideProps only if you need to render a page whose data
must be fetched at request time. This could be due to the nature of the data or
properties of the request (such as authorization headers or geo location).

Pages using getServerSideProps will be server-side rendered at request time and
only be cached if cache-control headers are used. If you don't need any renders
of data during the request, then you should consider fetching data on a client.

# Fetching data on the client side:
If a page contains frequently updating data, and you don’t need "pre-rendering"
of the data, you can fetch it the standard React only process, on a client side.
An example of this is user-specific data:

- First, immediately show the page without data.
- Parts of the page can be pre-rendered using Static Generation (SSG).
- You can show loading states for missing data like a spinner affect.
- Then, fetch data on the client side and display it when ready
- The data is frequently updated, which requires request-time data fetching.

https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props */
export async function getServerSideProps(context) {
  // Get the user authentication session/state:
  const session = await getSession(context);
  return { props: { session } };
}
