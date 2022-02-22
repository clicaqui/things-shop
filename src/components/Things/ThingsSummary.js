import classes from "./ThingsSummary.module.css";

const ThingsSummary = (props) => {
  return (
    <section className={classes.summary}>
      <h2>Automatize sua residëncia</h2>
      <p>
        Somos especializados em projetos personalizados e de componentes criados
        fora do ecosistemas abertos.
      </p>
      <p>
        Utilizamos o que esta na vanguarda tecnologicamente em ambiente provido
        pela IBM
      </p>
    </section>
  );
};

export default ThingsSummary;
