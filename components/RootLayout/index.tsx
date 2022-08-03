import { IChildren } from "../../types";
import { Navbar } from "../Navbar";

export function RootLayout(props: IChildren) {
    return (
        <div className="root">
            <Navbar />
            {props.children}
        </div>
    );
}
