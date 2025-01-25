import { useEffect, useState } from "react";
import Header from "../../components/Header";
import "./styles.scss";
import Footer from "components/Footer";

const Characters = () => {
  const [character, SetCharacter] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        SetCharacter(data.results);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      });
  }, []);

  return (
    <>
      <Header />

      <section>
        <div className="Character">
          {character
            ? character.map((Char, index) => (
                <div key={index}>
                  <img src={Char.image} alt="" />
                  <div className="nicks">
                    <h1>{Char.name}</h1>
                    <p>
                      Species: <span>{Char.species}</span>
                    </p>
                    <p>
                      gender: <span>{Char.gender}</span>
                    </p>

                    <p>
                      Status: <span>{Char.status}</span>
                    </p>
                    <p>
                      gender: <span>{Char.origin.name}</span>
                    </p>
                  </div>
                </div>
              ))
            : "Carregando..."}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Characters;
