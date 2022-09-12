import React from "react";
import "./cards.css";

const Cards = () => {
  return (
    <div>
      <ul className="cards">
        <li className="card" id="card_1">
          <div className="card__content">
            <h1>Psicoterapia</h1>
            <div className="card__info">
              <img src="./psicoterapia.png" alt="psicoterapia" />
              <p>
                O objetivo da Psicoterapia é investigar, analisar e aprofundar
                assuntos trazidos durante as sessões a partir de técnicas
                terapêuticas variadas a fim de buscar soluções que promovam o
                equilíbrio e harmonia psicoemocional. Para além dessa harmonia,
                a psicoterapia simboliza o encontro e a reconexão com a nossa
                essência e um passo fundamental para o processo de
                autonhecimento.{" "}
              </p>
            </div>
          </div>
        </li>
        <li className="card" id="card_2">
          <div className="card__content">
            <h1>Terapia Floral</h1>
            <div className="card__info">
              <img src="./floral.png" alt="terapia floral" />
              <p>
                Reconhecida pela Organização Mundial de Saúde (OMS) e presente
                no Sistema Único de Saúde (SUS), a Terapia Floral é comumente
                utilizada em conjunto com outros tratamentos tradicionais. Feita
                a partir da combinação de essências naturais de flores extraídas
                através método de solarização ou fervura, os florais não tem
                contraindicação, portanto são recomendados para pessoas de todas
                as idades. Seu objetivo é promover a harmonia emocional,
                energético-espiritual e corporal. A Terapia Floral vem sendo
                utilizada com sucesso no tratamento de sintomas de ansiedade
                generalizada, depressão, Alzheimer, alergias, dentre outros.
              </p>
            </div>
          </div>
        </li>
        <li className="card" id="card_3">
          <div className="card__content">
            <h1>Práticas Energéticas</h1>
            <div className="card__info">
              <img src="./energetico.png" alt="terapias energéticas" />
              <p>
                Antroposofia, Reiki, Aromaterapia, Terapia com Cristais e
                Thetahealing são terapias que atuam mais especificamente no
                campo energético. Muitas pessoas, por exemplo, submetem-se a uma
                série de exames clínicos e, por conta da ausência de um
                diagnóstico satisfatório que explique uma dor, enfermidade ou
                desequilíbrio, são encaminhadas para uma avaliação psicológica.
                Sabe-se que tais sentimentos físicos ou sensações podem ter uma
                origem psicológica e/ou ligados ao corpo energético.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Cards;
