import BosquecitoThumb from "../assets/Bosquecito-Thumb.jpg";
import BibliotecaThumb from "../assets/Biblioteca-Thumb.png";
import FEThumb from "../assets/Flora-Thumb.png";

const projects_frontend = [
    {
        src: "../assets/CC-Purple.svg",
        url: "https://estintecedu-my.sharepoint.com/:v:/g/personal/1106103_est_intec_edu_do/ETw08WaYMd1Ak2X3pJAyTQABE1p0jJmfvxr3W2E5HPglOg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=T0HVFw",
        name: "Chord Connect",
        role: "projects.frontend.role",
        preview:"projects.frontend.video",
        images: [
            "/MyPage/assets/Inicio-CC.png",
            "/MyPage/assets/1-CC.png",
            "/MyPage/assets/2-CC.png",
            "/MyPage/assets/3-CC.png",
        ],
        type: "projects.frontend.type_project_1",
    },
    {
        src: "../assets/ADD.svg",
        url: "https://evans-f-jimenez.github.io/data-analyst-dashboard/",
        name: "Sales Analytics Dashboard",
        role: "projects.frontend.role",
        preview:"projects.frontend.demo",
        images: [
            "/MyPage/assets/ADD1.png",
            "/MyPage/assets/ADD2.png",
            "/MyPage/assets/ADD3.png",
        ],
        type: "projects.frontend.type_project_2",
    },
];

const projects_vr = [
    {
        src: BosquecitoThumb,
        url: "https://refodige.intec.edu.do/recursos/bosquecito/index.html",
        name: "Bosquecito",
        tipo: "projects.vr.type",
        rol: "projects.vr.role_1",
        cliente: "projects.vr.job",
    },
    {
        src: FEThumb,
        url: "https://refodige.intec.edu.do/recursos/jardinbotanico/index.html",
        name: "Flora Endémica",
        tipo: "projects.vr.type",
        rol: "projects.vr.role_2",
        cliente: "projects.vr.job",
    },
    {
        src: BibliotecaThumb,
        url: "https://refodige.intec.edu.do/recursos/biblioteca/index.html",
        name: "Biblioteca",
        tipo: "projects.vr.type",
        rol: "projects.vr.role_2",
        cliente: "projects.vr.job",
    },
];

export {projects_frontend, projects_vr};