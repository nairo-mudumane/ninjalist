import { IChildren } from "../../types";
import styles from "../../styles/RootLayout.module.css";

export function RootLayout(props: IChildren) {
    return <div className={styles.root}>{props.children}</div>;
}
