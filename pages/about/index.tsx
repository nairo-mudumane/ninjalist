import Head from "next/head";
import React from "react";
import styles from "../../styles/Home.module.css";

export default function About() {
    return (
        <React.Fragment>
            <Head>
                <title>About</title>
            </Head>

            <div>
                <h1 className={styles.title}>About page</h1>

                <p className={styles.text}>
                    Velit enim ex veniam sint sit officia qui excepteur veniam
                    duis aliquip consequat veniam. Culpa ut eu ex veniam laboris
                    est est pariatur culpa commodo aute laborum. Lorem do esse
                    sint voluptate eiusmod ut adipisicing cupidatat duis sit
                    ipsum. Nulla nulla exercitation et quis velit mollit amet
                    anim. Incididunt eu esse nulla culpa sint qui dolor.
                    Exercitation sunt labore commodo anim cupidatat laboris
                    minim officia dolore tempor deserunt aute cupidatat laborum.
                </p>

                <p className={styles.text}>
                    Commodo dolor nulla adipisicing aliquip ad cupidatat fugiat
                    cupidatat irure duis irure quis proident quis. Velit nisi
                    irure amet officia eiusmod dolor officia veniam dolore duis
                    mollit ad enim. Eiusmod sint exercitation do elit duis ea
                    anim adipisicing esse sint occaecat aliqua et. Nostrud
                    consectetur sunt sit nulla ex ut velit eu aliqua do enim.
                    Duis occaecat sint in ut est velit exercitation aliquip
                    reprehenderit anim elit voluptate anim. Veniam elit culpa
                    aute enim consectetur eu esse incididunt consequat Lorem.
                    Sint duis aute est minim ipsum anim enim laborum deserunt.
                </p>
            </div>
        </React.Fragment>
    );
}
