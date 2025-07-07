import './BannerGradiente.css';

interface BannerGradienteProps {
    titulo: string;
}

export default function BannerGradiente({ titulo }: BannerGradienteProps) {
    return (
        <div className='BannerGradiente'>
            <h3>{titulo}</h3>
        </div>
    )
}