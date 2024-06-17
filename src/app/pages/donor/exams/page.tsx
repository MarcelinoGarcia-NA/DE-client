'use client'
import Image from "next/image";
import styles from "../exams/styles/page.module.css";
import { useEffect, useState } from "react";
import { url } from "@/app/services/apiConfig";
import { format } from 'date-fns';

interface Exams {
    id: number;
    idDonor: number;
    schedule: {
        id: number,
        id_donor: number,
        date: string,
        local: string,
        status: string,
        createdAt: string,
        updatedAt: string
    };
    createdAt: string;
    updatedAt: string;
}


export default function Exams(): React.ReactElement {

    const [exams, setExams] = useState<Exams[]>([]);

    useEffect(() => {
        const getExams = async () => {
            try {
                const response = await fetch(url + '/exams');
                const data = await response.json();
                setExams(data);
            } catch {
                console.log("Ocorreu um erro na busca dos dados!");
            }

        }
        getExams();
    }, []);

    const handleDownload = (exam: Exams) => {

    }

    const handleFilter = (option: string) => {
        if (!option) {
            return
        }
        if (option == "codigo") {
            let list = [...exams].sort((a: Exams, b: Exams) => a.id - b.id);
            setExams(list);
        }
        if (option == "dataZa") {
            let list = [...exams].sort((a: Exams, b: Exams) => a.schedule.createdAt.localeCompare(b.schedule.createdAt));
            list = list.reverse();
            setExams(list);
        }
        if (option == "dataAz") {
            const list = [...exams].sort((a: Exams, b: Exams) => a.schedule.createdAt.localeCompare(b.schedule.createdAt));
            setExams(list);
        }

    }
    if(exams[0] == null){

        return <center><p>Carregando...</p></center>
    }

   

    return (
        <div className={styles.main}>
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
                    <select onChange={(event) => handleFilter(event.target.value)} >
                        <option value="">FILTRAR</option>
                        <option value="codigo">CÓDIGO</option>
                        <option value="dataAz">DATA AZ</option>
                        <option value="dataZa">DATA ZA</option>
                    </select>
                </div>
            </div>
            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Data Exame</th>
                            <th>Clínica Uni Hospitalar</th>
                            <th>PDF</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exams.map((exam) => (
                            <tr key={exam.id}>
                                <td>{exam.id}</td>
                                <td>{format(new Date(exam.schedule.date), 'dd/MM/yyyy')}</td>
                                <td>{exam.schedule.local}</td>
                                <td><button className={styles.button} onClick={() => handleDownload(exam)}>
                                    <Image
                                        alt=""
                                        width={32}
                                        height={32}
                                        src={"/iconPDF.png"} /></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}