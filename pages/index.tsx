import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <React.Fragment>
            <Head>
                <title>Home</title>
            </Head>

            <div>
                <h1 className={styles.title}>Home page</h1>

                <p className={styles.text}>
                    Esse voluptate consectetur irure officia amet id nulla non
                    sunt culpa dolor adipisicing ullamco. Sunt in aliquip
                    reprehenderit veniam ipsum ullamco ipsum deserunt non. Do
                    dolor nostrud in irure anim ullamco et cillum.
                </p>

                <p className={styles.text}>
                    Aliqua exercitation esse fugiat nostrud voluptate
                    reprehenderit. Occaecat dolore eu est ullamco incididunt
                    nostrud occaecat magna est culpa do ad eu. Ullamco eiusmod
                    commodo fugiat et fugiat tempor cupidatat nostrud ullamco.
                    Laborum cillum est adipisicing exercitation dolore proident
                    laboris enim dolore do eu. Ullamco velit Lorem quis magna
                    consectetur ullamco dolore Lorem commodo laboris occaecat.
                    Fugiat Lorem do eu non consectetur amet eu fugiat velit
                    officia cupidatat aute occaecat.
                </p>

                <Link href="/ninjas">
                    <a className={styles.btn}>See Ninja List</a>
                </Link>
            </div>
        </React.Fragment>
    );
}
