import React from "react";
import { RootLayout } from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <React.Fragment>
            <RootLayout>
                <Component {...pageProps} />
            </RootLayout>
        </React.Fragment>
    );
}

export default MyApp;
