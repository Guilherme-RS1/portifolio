import AnimatedTitle from '@/src/components/AnimateTitle';

export default function Home() {
  return (
    <section id="home" className="section">
      <div>
        <AnimatedTitle text="Olá eu sou Guilherme" />
        <p>
          Sou desenvolvedor fullstack com experiência prática em projetos
        </p>
        <p>
          Tenho facilidade de adaptação em diferentes ambientes
        </p>
        <p>
          boa comunicação, senso de responsabilidade e foco em resultados.
        </p>
        <a href="#projetos">Projetos</a>
      </div>
    </section>
  );
}
