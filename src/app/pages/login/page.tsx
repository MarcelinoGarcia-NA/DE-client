'use client'
import Image from "next/image";
import { ReactElement, useState } from "react";
import styles from "./styles/page.module.css";
import { useRouter } from "next/navigation";

export default function Login(): ReactElement {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { push } = useRouter();

    const handleLogin = (e: ProgressEvent) => {
        e.preventDefault();
        alert(`Login com email: ${email} e senha: ${password}`);
    };

    const handleForgotPassword = () => {
        alert('Esqueceu a senha?');
    };

    const handleSignUp = () => {
        push("/pages/login/register");
    };

    return (
        <>

            <form className={styles.loginForm}>
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
                    <button type="submit">Acessar</button>
                </div>
                <div className={styles.formGroup}>
                    <a href="#" onClick={handleForgotPassword}>Esqueceu a senha?</a>
                </div>
                <div className={styles.formGroup}>
                    <button type="button" onClick={handleSignUp}>Cadastrar</button>
                </div>
            </form>
        </>
    );
}