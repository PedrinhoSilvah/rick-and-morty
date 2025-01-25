import { useEffect, useState } from "react";
import Header from "../../components/Header";
import "./styles.scss";
import { images } from "../../img/image";
import Button from "components/Buttons";
import Footer from "components/Footer";

const Episode = () => {
  const [Ep, SetEp] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((response) => response.json())
      .then((data) => {
        SetEp(data.results);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      });
  }, []);

  return (
    <>
      <Header />
      <section>
        <div className="Episode">
          {Ep
            ? Ep.map((E, index) => (
                <div key={index} className="Product">
                  <img className="Image" src={images[index]} alt="" />
                  <div className="NameEp">
                    <div className="NicksNames">
                      <h5>Episode Name:</h5>
                      <p>{E.name}</p>
                    </div>
                    <div className="EP">
                      <p>{E.episode}</p>
                    </div>
                    {E.count}
                    <Button name="Assistir" Link="https://www.justwatch.com/br/serie/rick-and-morty" />
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

export default Episode;
