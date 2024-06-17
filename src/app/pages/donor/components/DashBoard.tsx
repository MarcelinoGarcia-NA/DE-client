import styles from "../styles/dashBoard.module.css";

export default function DashBoard(): React.ReactElement {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>EXAMES</h2>
            <div className={styles.cards}>
                <div className={styles.card1}>
                    <span>5</span>
                    <p>Realizados</p>
                </div>
                <div className={styles.card2}>
                    <span>2</span>
                    <p>Agendado</p>
                </div>
                <div className={styles.card3}>
                    <span>2</span>
                    <p>Em Análise</p>
                </div>
                <div className={styles.card4}>
                    <span>5</span>
                    <p>Disponíveis</p>
                </div>
            </div>
        </div>
    );
}