import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    React.useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 6000);
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>Not Found</title>
            </Head>

            <div className="not-found">
                <h1>Oops...</h1>
                <h2>That page cannot be found!</h2>

                <p>
                    Go back to the <Link href="/">home page</Link>
                </p>
            </div>
        </React.Fragment>
    );
};

export default NotFound;
