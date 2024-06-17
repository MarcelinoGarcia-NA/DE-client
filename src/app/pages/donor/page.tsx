
import DashBoard from "../donor/components/DashBoard";
import styles from "../../pages/donor/styles/page.module.css";
import StickyNotes from "./components/StickyNotes";
import { ReactElement } from "react";

export default function Donor(): ReactElement {
    return (
        <div className={styles.containerInfos}>
            <DashBoard />
            <StickyNotes />
        </div>
    );
}