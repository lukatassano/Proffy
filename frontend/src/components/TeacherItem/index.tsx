import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4"
          alt="Diego Fernandes"
        />
        <div>
          <strong>Diego Fernandes</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de quimica avançada
        <br />
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis corrupti
        aperiam, porro reiciendis laboriosam doloremque expedita quisquam
        placeat delectus, quaerat, nulla amet! Eveniet perspiciatis mollitia
        deleniti incidunt necessitatibus at inventore?
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
