import { useEffect, useState } from 'react'
import css from './PaginaConfiguracoes.module.css'
import Titulo from "../Titulo/Titulo.jsx";
import {useNavigate} from "react-router-dom";

const fontes = [
    "Inter",
    "Poppins",
    "Roboto",
    "Montserrat",
    "Playfair Display"
];

export default function PaginaConfiguracoes() {

    const [fonteTitulo, setFonteTitulo] = useState(
        localStorage.getItem("fonteTitulo") || "Inter"
    );

    const [fonteTexto, setFonteTexto] = useState(
        localStorage.getItem("fonteTexto") || "Inter"
    );


    const [corPrimaria, setCorPrimaria] = useState(
        localStorage.getItem("corPrimaria") || "#167cbf"
    );

    const [corSecundaria, setCorSecundaria] = useState(
        localStorage.getItem("corSecundaria") || "#f65682"
    );

    const [corTerciaria, setCorTerciaria] = useState(
        localStorage.getItem("corTerciaria") || "#f7b567"
    );

    const [corTexto, setCorTexto] = useState(
        localStorage.getItem("corTexto") || "#1f1f1f"
    );

    const navigate = useNavigate();

    useEffect(() => {

        document.documentElement.style.setProperty(
            "--fonte-titulo",
            fonteTitulo
        );

        document.documentElement.style.setProperty(
            "--fonte-texto",
            fonteTexto
        );

        document.documentElement.style.setProperty(
            "--cor-primaria",
            corPrimaria
        );

        document.documentElement.style.setProperty(
            "--cor-secundaria",
            corSecundaria
        );

        document.documentElement.style.setProperty(
            "--cor-terciaria",
            corTerciaria
        );

        document.documentElement.style.setProperty(
            "--cor-texto",
            corTexto
        );

    }, [fonteTitulo, fonteTexto, corPrimaria, corSecundaria, corTerciaria, corTexto]);

    function salvarConfiguracoes() {

        localStorage.setItem("fonteTitulo", fonteTitulo);

        localStorage.setItem("fonteTexto", fonteTexto);

        localStorage.setItem("corPrimaria", corPrimaria);

        localStorage.setItem("corSecundaria", corSecundaria);

        localStorage.setItem("corTerciaria", corTerciaria);

        localStorage.setItem("corTexto", corTexto);

        navigate('/dashboardAdm')
    }

    return (
        <section className={css.container}>
            <div className={css.titulo}>
                <Titulo
                    titulo={'Configurações'}
                    cor={'azul-claro'}
                />
            </div>
            <div className={css.organizar}>
                <div className={css.fonte}>
                    <label>Fonte dos títulos</label>
                    <select
                        value={fonteTitulo}
                        onChange={(e) =>
                            setFonteTitulo(e.target.value)
                        }
                        className={css.selectFonte}
                    >

                        {fontes.map((item) => (
                            <option
                                key={item}
                                value={item}
                            >
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={css.fonte}>
                    <label>Fonte dos textos</label>
                    <select
                        value={fonteTexto}
                        onChange={(e) =>
                            setFonteTexto(e.target.value)
                        }
                        className={css.selectFonte}>

                        {fontes.map((item) => (
                            <option
                                key={item}
                                value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className={css.cores}>
                <div>
                    <label>Cor primária</label>
                    <input
                        type="color"
                        value={corPrimaria}
                        onChange={(e) =>
                            setCorPrimaria(e.target.value)
                        }
                        className={css.inputColor}
                    />

                </div>

                <div className={css.fonte}>
                    <label>Cor secundária</label>
                    <input
                        type="color"
                        value={corSecundaria}
                        onChange={(e) =>
                            setCorSecundaria(e.target.value)
                        }
                        className={css.inputColor}
                    />
                </div>
                <div>
                    <label>Cor terciária</label>
                    <input
                        type="color"
                        value={corTerciaria}
                        onChange={(e) =>
                            setCorTerciaria(e.target.value)
                        }
                        className={css.inputColor}
                    />

                </div>
                <div>
                    <label>Cor dos textos</label>
                    <input
                        type="color"
                        value={corTexto}
                        onChange={(e) =>
                            setCorTexto(e.target.value)
                        }
                        className={css.inputColor}
                    />
                </div>
            </div>

            <button className={css.botaoSalvar} onClick={salvarConfiguracoes}>
                Salvar
            </button>

        </section>
    )
}