import Footer from "components/Footer";
import Header from "../../components/Header";
import "./styles.scss";

interface Character {
  id: number;
  name: string;
  species: string;
  gender: string;
  status: string;
  image: string;
  episode: string;
  count: string;
  origin: {
    name: string;
  };
}

export interface ApiResponse {
  results: Character[];
}

const Home = () => (
  <>
    <Header />

    <section>
      <div className="Card">
        <img
          src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q95/wp-content/uploads/2021/09/legiao_P9QbneUkp8DJ.png.webp"
          alt="Image-Rick-and-Morty"
        />
        <h1>
          Rick and Morty: História, personagens, guia de temporadas e onde
          assistir a série
        </h1>
        <p>
          Tudo que você precisa saber sobre Rick and Morty, a animação de
          ficção-científica que conquistou uma legião de fãs!
        </p>
        <p>
          Ao longo dos anos, o público adulto passou a declarar o seu amor por
          animações sem medo, e várias produções surgiram direcionadas para esse
          tipo de espectador. Uma das mais famosas é, sem dúvidas, Rick and
          Morty, que combina doses de bizarrice, aleatoriedade e crises
          existenciais em coloridos episódios de 22 minutos. Para quem quer
          embarcar nas loucuras do seriado, reunimos abaixo tudo que você
          precisa saber sobre Rick and Morty!
        </p>
        <ul className="List">
          <li>Qual a história de Rick and Morty?</li>
          <li>Quais são os personagens e o elenco de Rick and Morty?</li>
          <li>Onde assistir Rick and Morty?</li>
        </ul>
        <h3> Qual a história de Rick and Morty?</h3>
        <p>
          Rick and Morty acompanha as aventuras do cientista bêbado Rick e seu
          neto covarde, Morty. A série segue uma fórmula praticamente
          procedural, em que episódios semanais contam histórias isoladas, com
          uma ou outra conexão ao longo das temporadas, mas focada em situações
          semanais através do tempo e espaço.
        </p>
        <h3>Quais são os personagens e o elenco de Rick and Morty?</h3>
        <p>
          Mesmo apresentando rostos inusitados a cada semana, Rick and Morty é
          focado nos dois protagonistas (como o nome deixa claro), e também na
          família deles. Rick é um cientista brilhante e um inventor altamente
          habilidoso, mas perdido na bebida e desilusão. Já Morty é um garoto
          comum, talvez até meio lerdo para a idade dele, que se vê sempre
          arrastado para as confusões do avô. Ambos são interpretados por Justin
          Roiland no inglês. Além deles, outros personagens recorrentes são
          Summer (Spencer Grammer), a irmã patricinha de Morty; Beth (Sarah
          Chalke), filha de Rick e mãe de Morty; e Jerry (Chris Parnell), o
          desajeitado pai de Morty – para a infelicidade de Rick, que não vai
          muito com a cara do genro.
        </p>
        <h3>Onde assistir Rick and Morty?</h3>
        <p className="Last">
          Atualmente, é possível encontrar Rick and Morty em dois serviços de
          streaming. As quatro primeiras temporadas da animação estão
          disponíveis no catálogo da Netflix. Já a HBO Max, que é da mesma dona
          do Adult Swim, tem os quatro primeiros anos e também a recém-lançada
          quinta temporada, exclusiva da plataforma. Em ambos os serviços, a
          série acompanha também a elogiada dublagem em português do Brasil.
        </p>
      </div>
    </section>
    <Footer />
  </>
);

export default Home;
