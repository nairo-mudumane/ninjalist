import Head from "next/head";
import React from "react";

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const paths = data.map((ninja) => {
        return { params: { ninjaId: ninja.id.toString() } };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${context.params.ninjaId}`
    );
    const data = await res.json();

    return {
        props: {
            ninja: data,
        },
    };
};

const NinjaDetails = ({ ninja }) => {
    return (
        <React.Fragment>
            <Head>
                <title>Ninja: {ninja.name}</title>
            </Head>

            <div>
                <h1>{ninja.name}</h1>

                <p>{ninja.email}</p>
                <p>{ninja.website}</p>
            </div>
        </React.Fragment>
    );
};

export default NinjaDetails;
