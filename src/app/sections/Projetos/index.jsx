import AnimatedTitle from '@/src/components/AnimateTitle';

import Image from 'next/image';
import DeviceCheckout from '@/public/device-checkout.jpeg'
import Dashboard from '@/public/dashboard.jpeg'

export default function Projetos() {
  return (
    <section id="projetos" className="section">
      <div>
      <AnimatedTitle  text="Projetos" />
      </div>
      <div className="projects__flex">
        <div className="projects__reference">
          <Image src={DeviceCheckout} id='img' alt="Checkout de dispositivos" />
        </div>
        <div className="projects__title">
          <h3>E-Commerce Checkout</h3>
          <p>
            Tela de Checkout de E-commerce desenvolvida com HTML5 e CSS3,
            simulando a etapa final de compra de uma loja virtual.
            O layout foi projetado com foco em responsividade,
            acessibilidade e experiência do usuário. Elementos visuais como botões,
            campos de formulário estilizados com CSS puro, garantindo uma interface
            moderna e funcional.
          </p>
        </div>
      </div>
      <div className="projects__flex">
        <div className="projects__reference">
          <Image src={Dashboard} id='img' alt="Checkout de dispositivos" />
        </div>
        <div className="projects__title">
          <p>Em Produção</p>
          <h3>Dashboard</h3>
          <p>
            Dashboard interativo desenvolvido com HTML5, CSS3 e JavaScript,
            utilizando a biblioteca Chart.js para visualização de dados em tempo real. 
            A interface apresenta gráficos dinâmicos (barras, linhas e pizza),
            indicadores de desempenho e painéis de métricas organizados de forma responsiva e intuitiva.
            O projeto demonstra habilidades em manipulação do DOM,
            estilização com CSS puro e integração com bibliotecas JavaScript,
            proporcionando uma visualização clara e eficiente de informações analíticas.
          </p>
        </div>
      </div>        
    </section>
  );
}
