import Layout from "../components/General/Layout";
import styles from './index.module.css';
import clsx from "clsx";

export default function Docs() {
    return (
        <Layout>

            <div>
                <div className={clsx(styles.dots, "flex flex-col items-center justify-center h-72")}>

                    <h1 className="text-5xl text-gray-800 font-bold">

                        ToS Page
                    </h1>
                    <p className="subtitle">Termz of serviz</p>

                </div>




                <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                    {`
hey so like dont nuke mah site thsxx
                                `}
                </pre>
            </div>
        </Layout >
    );
}
