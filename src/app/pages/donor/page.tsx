
import DashBoard from "../donor/components/DashBoard";
import styles from "../../pages/donor/styles/page.module.css";
import StickyNotes from "./components/StickyNotes";

export default function Donor() {
    return (
        <div className={styles.containerInfos}>
            <DashBoard />
            <StickyNotes />
        </div>
    );
}