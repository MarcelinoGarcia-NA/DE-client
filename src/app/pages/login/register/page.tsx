'use client'
import Image from "next/image";
import styles from "../styles/page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { url } from "@/app/services/apiConfig";


export default function Register() {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const { push } = useRouter();

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch(`${url}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    email: email,
                    password: password
                }),
            });
    
            if (response.ok) {
                const data = await response.json();
                alert('Usuário registrado com sucesso:');
            } else {
                console.error('Erro ao registrar usuário:', response.status);
            }
        } catch (error) {
            console.error('Erro ao comunicar com o servidor:', error);
        }
    };

    return (
        <>

            <form onSubmit={handleRegister} className={styles.loginForm}>
                <Image alt="Logo" width={201.67} height={200} src="/logoLogin.png" />
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <div className={styles.iconForm}>
                        <Image alt="Logo" width={24.23} height={24.23} src="/iconEmail.png" />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className={styles.iconForm}>
                        <Image alt="Logo" width={24.23} height={24.23} src="/iconPass.png" />
                    </div>
                </div>
                <div className={styles.formGroup}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <div className={styles.iconForm}>
                        <Image alt="Logo" width={24.23} height={24.23} src="/iconPass.png" />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <button type="submit">Registrar</button>
                </div>
            </form >
        </>
    );
}