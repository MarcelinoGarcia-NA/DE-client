import Image from "next/image";
import styles from "../exams/styles/page.module.css";

export default function Exams() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.countExams}>
                    <span>TOTAL:</span>
                    <span className={styles.valueCountExams}>7</span>
                </div>
                <div className={styles.search}>
                    <input type="text" />
                    <Image width={24} height={24} src={"/iconSearch.png"} alt="icone lupa para pequisa de exame" />
                </div>
                <div className={styles.filter}>
                <Image width={32} height={32} src={"/iconFilter.png"} alt="icone representando filtros" />
                    <select >
                        <option value="">FILTRAR</option>
                        <option value="data">DATA</option>
                    </select>
                </div>
            </div>
        </>
    );
}