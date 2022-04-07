import { FiMail } from 'react-icons/fi';
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import { azulQD } from 'themes';

export const dadosCards = [
  {
    icone: <FiMail size={48} color={azulQD} />,
    titulo: 'Email',
    conteudo: 'contato@ranimontagna.com',
    href: 'mailto:contato@ranimontagna.com',
  },
  {
    icone: <FaWhatsapp size={48} color={azulQD} />,
    titulo: 'Whatsapp',
    conteudo: '(54) 9 9979-0871',
    href: 'https://api.whatsapp.com/send?phone=555499790871',
  },
  {
    icone: <FaLinkedinIn size={48} color={azulQD} />,
    titulo: 'Linkedin',
    conteudo: 'Ranielli Montagna',
    href: 'https://www.linkedin.com/in/rannimontagna/',
  },
];
