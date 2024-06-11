'use client'
import { useEffect, useState } from "react";
import styles from "../styles/stickyNotes.module.css";
import { url } from "@/app/services/apiConfig";

export default function StickyNotes() {

    const [infos, setInfos] = useState<{ nameInfo: string }[]>([]);

    useEffect(() => {
        const fetchInfos = async () => {
            try {
                const response = await fetch(`${url}/infosDonor`, {
                    next: { revalidate: 10 }
                });
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setInfos(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchInfos();
    }, []);


    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Lembretes</h2>
            <div className={styles.cards}>
                {infos?.map((infos, index) =>
                    <div key={index} className={styles.card}>
                        <div className={styles.circle}></div>
                        <p className={styles.paragraph}>{infos.nameInfo}</p>
                    </div>
                )}
            </div>
        </div>
    );
}