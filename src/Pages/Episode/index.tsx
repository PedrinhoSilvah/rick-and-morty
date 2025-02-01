import Header from "../../components/Header";
import "./styles.scss";
import { images } from "../../img/image";
import Button from "components/Buttons";
import Footer from "components/Footer";
import { useGetEpisodeQuery } from "services/Api";

const Episode = () => {
  const { data: Ep } = useGetEpisodeQuery();

  return (
    <>
      <Header />
      <section>
        <div className="Episode">
          {Ep?.results
            ? Ep.results.map((E, index) => (
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
                    <p>{E.count}</p>
                    <Button
                      name="Assistir"
                      Link="https://www.justwatch.com/br/serie/rick-and-morty"
                    />
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
