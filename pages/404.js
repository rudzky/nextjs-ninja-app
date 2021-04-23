import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>404 Mdfkrs!</title>
      </Head>
      <div className="not-found">
        <h1>Oooops...</h1>
        <p>Page Not Found</p>
        <p>
          Go back to the{" "}
          <Link href="/">
            <a>Homepage</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
