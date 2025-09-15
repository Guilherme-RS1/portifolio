import AnimatedTitle from "@/src/components/AnimateTitle";

export default function Contato() {
  return (
    <section id="contato" className="contato">
      <div>
        <AnimatedTitle text="Contato" />
        <form action="">
          <input type="Digite seu nome" placeholder="Digite seu nome" />
          <input type="Digite seu e-mail" placeholder="Digite seu e-mail" />
          <input type="Digite sua mensagem" placeholder="Digite sua mensagem" />
          <button>Enviar</button>
        </form>
      </div>
    </section>
  );
}
