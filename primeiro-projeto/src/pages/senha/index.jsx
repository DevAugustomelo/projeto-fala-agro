




import "../senha/senha.css";
import NavBar from "../../componentes/menu-horizontal/navBar";
import Footer from "../../componentes/footer/footer";

export default function Senha() {
  return (
    <div className="senha">
      <NavBar />

      <section id="senha" className="news">
        <p className="slideRight">Esqueci minha senha</p>

        <div id="box-input" className="input-email">
          <input type="text" placeholder="Digite aqui a nova senha" />
        </div>
        <div id="box-input" className="input-email">
          <input type="text" placeholder="Confirme aqui a nova senha" />
        </div>
        <button id="btn-confirmar">Confirmar</button>
      </section>
      <Footer />
    </div>
  );
}
