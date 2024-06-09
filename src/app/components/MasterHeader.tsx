'use client'
import { useEffect, useState } from "react";
import styles from "../styles/masterHeader.module.css";
import Image from "next/image"
import { url } from "../services/apiConfig";

interface Props {
    titleMasterHeader: string
}

interface User {
    id: number,
    image: string,
    name: string,
}

export default function MasterHeader(
    {
        titleMasterHeader
    }: Props
): React.ReactElement {

    const [user, setUser] = useState<User>(
        {
            id: 0,
            image: "",
            name: ""
        }
    );


    useEffect(() => {

        const getUser = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setUser(data);
        }
        getUser();
    }, [])
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Image alt="Logo" width={135} height={134} src="/logoMaster.png" />
            </div>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>{titleMasterHeader}</h1>
            </div>
            <div className={styles.userContainer}>
                <Image alt="User Avatar" width={36} height={36} src={user.image}/>
                <span className={styles.username}>{user.name}</span>
                <button className={styles.logoutButton}>Logout</button>
            </div>
        </header>
    );
}