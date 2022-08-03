import { IChildren } from "../../types";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

export function RootLayout(props: IChildren) {
    return (
        <div className="root">
            <Navbar />
            {props.children}
            <Footer />
        </div>
    );
}
