import { FaDownload } from 'react-icons/fa';
export default function DownLoadCV(){

    const download = () => {
        const link = document.createElement('a');
        link.href = '/cv.pdf';
        link.download = 'FranciscoDiakomas.pdf';
        link.click();
    }
    return (
        <button onClick={download}>
            <p>Baixar Resumo</p>
            <FaDownload />
        </button>
    )
}