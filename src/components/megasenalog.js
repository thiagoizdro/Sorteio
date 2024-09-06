import Image from 'next/image';
import logoSrc from '../components/public/mega-sena.png'; // Certifique-se de que o caminho está correto

const MegaSenaLogo = () => (
  <div style={{ textAlign: 'center', margin: '20px 0' }}>
    <Image src={logoSrc} alt="Logo Mega Sena" width={200} height={200} />
  </div>
);

export default MegaSenaLogo;
