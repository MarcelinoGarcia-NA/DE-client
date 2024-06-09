import MasterHeader from "@/app/components/MasterHeader";
import Navigation from "@/app/components/Navigation";

export default function Admin() {
    return (
        <>
            <MasterHeader titleMasterHeader="Administrador"/>
            <Navigation
                profile="admin"
                nameOptionOne="Doadores"
                srcImageOptionOne="/iconDonors.png"
                linkOptionOne=""

                nameOptionTwo="Atendentes"
                srcImageOptionTwo="/iconAttendants.png"
                linkOptionTwo=""

                nameOptionThree="Exames"
                srcImageOptionThree="/iconExams.png"
                linkOptionThree=""

                nameOptionFour="Novo Usuário"
                srcImageOptionFour="/iconNewUser.png"
                linkOptionFour=""

                nameOptionFive="Configurações"
                srcImageOptionFive="/iconSettings.png"
                linkOptionFive=""
            />
        </>
    );
}