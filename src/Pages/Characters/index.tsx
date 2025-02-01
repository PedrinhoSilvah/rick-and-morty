import Header from "../../components/Header";
import "./styles.scss";
import Footer from "components/Footer";

import { useGetCharactersQuery } from "services/Api";

const Characters = () => {
  const { data: character } = useGetCharactersQuery();

  return (
    <>
      <Header />

      <section>
        <div className="Character">
          {character?.results
            ? character.results.map((Char, index) => (
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
