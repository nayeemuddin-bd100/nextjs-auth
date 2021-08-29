import { signIn, signOut, useSession } from "next-auth/client";
import Link from 'next/link';


export default function Home() {
  const [session, loading] = useSession();

  return (
    <>
      {!session && (                          
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button>
            <Link href="/secret" > To The Secret Page</Link>
          </button>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </>
  );
}


