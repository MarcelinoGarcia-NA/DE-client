'use client'
import Image from "next/image";
import { ReactElement, useEffect, useState } from "react";
import styles from "../newDonation/styles/page.module.css";
import { url } from "@/app/services/apiConfig";
interface District {
    id: number,
    nome: string
}
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

export default function Donor(): ReactElement {

    const [activeButton, setActiveButton] = useState(false);
    const [location, setLocation] = useState<string>("");
    const [dataSchedule, setDataSchedule] = useState<string>("");
    const [countDataSelected, setCountDataSelected] = useState<number>(0);
    const [selectedLocation, setSelectedLocation] = useState<string>("");
    const [listLocationComplete, setListLocationComplete] = useState<District[]>([]);
    const [listLocation, setListLocation] = useState<District[]>([]);

    const [exams, setExams] = useState<Exams[]>([]);


    useEffect(() => {
        const getLocation = async () => {
            try {
                const response = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/distritos");
                const data = await response.json();
                setListLocation(data);
                setListLocationComplete(data);
            } catch {

            }
        }
        getLocation();
    }, [])


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

    const handleSelectOfLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchText = event.target.value.toLowerCase();
        let listAux = listLocation.filter((location: District) => location.nome.toLowerCase().includes(searchText))
        setListLocation(listAux);
        setLocation(searchText);
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Backspace") {
            setListLocation(listLocationComplete);
            setSelectedLocation("");
            setActiveButton(false);
        }
        if (event.key === "Enter") {
            setSelectedLocation("none");
            setActiveButton(true);
        }
    };


    const handleSelectDataSchedule = (index: number, hour: string) => {

        if (countDataSelected == 0) {
            const selectedDate = new Date(currentDate);
            selectedDate.setDate(currentDate.getDate() + (index - currentDate.getDay()));
            const [hh, mm] = hour.split(':');
            selectedDate.setHours(parseInt(hh, 10), parseInt(mm, 10), 0, 0);

            const formattedDate = selectedDate.toISOString();
            alert(formattedDate);
            setDataSchedule(formattedDate);
        }
        setCountDataSelected(1);
    }

    const currentDate = new Date();
    const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const hoursOfWeek = ['7:00', '8:00', '9:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

    return (
        <div className={styles.container}>
            <h1>Nova Doação</h1>
            <div>
                <label htmlFor="location">Localização para Realizar Exames</label>
                <input
                    id="location"
                    placeholder="Informe a unidade"
                    value={location}
                    onKeyDown={handleKeyDown}
                    onChange={handleSelectOfLocation} />
                <Image width={32} height={32} src="/iconLocation.png" alt="Icone representando uma localização" />

                {listLocation.slice(0, 6).map((location: District) =>
                    <option
                        key={location.id}
                        onClick={() => {
                            setLocation(location.nome);
                            setActiveButton(true);
                            setSelectedLocation("none");
                        }}
                        value={location.nome}
                        style={{ display: selectedLocation }}>
                        {location.nome}
                    </option>
                )}
            </div>
            <div className={styles.introduction}>
                <h1>Instruções</h1>
                <p>
                    Para agendar precione sobre um retângulo verde.
                    Ao fim da página precione Solicitar
                </p>
            </div>
            <div className={styles.containerTable}>
                {activeButton == true ?
                    <table>
                        <tr>
                            <td>Horário</td>
                            {daysOfWeek.map((day, index) => {
                                if (index !== 0 && index !== 6 && index > currentDate.getDay()) {
                                    return <td key={index}>{day}</td>
                                }
                                return null
                            }
                            )}
                        </tr>
                        {
                            hoursOfWeek.map((hour, index) =>

                                <tr key={index}>
                                    <td>{hour}</td>
                                    {daysOfWeek.map((day, index) => {
                                        if (index !== 0 && index !== 6) {
                                            let isUnavailable = false;
                                            exams.forEach((exam) => {
                                                const examDate = new Date(exam.schedule.date);
                                                if (examDate.getDay() === index && exam.schedule.date.slice(11, 16) === hour && examDate > currentDate) {
                                                    isUnavailable = true;
                                                }
                                            });

                                            if (index >= currentDate.getDay()) {
                                                if (isUnavailable) {
                                                    return <td className={styles.column} key={index}>Indisponível</td>;
                                                } else {
                                                    return <td
                                                        className={styles.columnAvailable}
                                                        key={index}
                                                        onClick={(event) => {
                                                            handleSelectDataSchedule(index, hour)
                                                            const target = event.target as HTMLElement;
                                                            if (countDataSelected === 0) {
                                                                target.style.backgroundColor = "#171817";
                                                            }
                                                        }}>
                                                    </td>;
                                                }
                                            } else {
                                                return null;
                                            }
                                        }
                                        return null;
                                    })}
                                </tr>


                            )
                        }
                    </table>
                    :
                    <table></table>
                }
                <div className={styles.containerButton}>
                    <div>
                        <button className={styles.button} >Cancelar</button>
                        {!activeButton == true ?
                            <button className={styles.button} onClick={() => alert("Informe um local para o exame")}>Solicitar</button>
                            : <button className={styles.button} style={{ backgroundColor: "#E81515" }}>Solicitar</button>}
                    </div>
                </div>
            </div>
        </div >
    );
}