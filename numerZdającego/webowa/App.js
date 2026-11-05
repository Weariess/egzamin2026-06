import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Wymagane style Bootstrapa

function App() {
  const [adres, ustawAdres] = useState("");
  const [login, ustawLogin] = useState("");
  const [haslo, ustawHaslo] = useState("");
  const [generujHaslo, ustawGenerujHaslo] = useState(true);

  const [dane, ustawDane] = useState({
    adres: "",
    login: "",
    haslo: "",
    generowanoAutomatycznie: true,
  });

  const zapiszDane = (e) => {
    e.preventDefault();
    ustawDane({
      adres: adres,
      login: login,
      haslo: haslo,
      generowanoAutomatycznie: generujHaslo,
    });
  };

  return (
    <div className="container m-4">
      <section id="blok1" className="mb-4">
        <h1>Menedżer haseł - wykonała Wiktoria</h1>
        <Form onSubmit={zapiszDane}>
          
          <Form.Group className="m-3" controlId="input_strona">
            <Form.Label>Adres WWW:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Adres strony WWW"
              value={adres}
              onChange={(e) => ustawAdres(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="m-3" controlId="input_login">
            <Form.Label>Login:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Twój login"
              value={login}
              onChange={(e) => ustawLogin(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="m-3">
            <Form.Check
              type="checkbox"
              id="input_checkbox_wygeneruj_haslo"
              label="Wygeneruj hasło"
              checked={generujHaslo}
              onChange={(e) => {
                ustawGenerujHaslo(e.target.checked);
                if (e.target.checked) ustawHaslo("");
              }}
              className="mb-2"
            />

            <Form.Label htmlFor="input_haslo">Hasło:</Form.Label>
            <Form.Control
              type="password"
              id="input_haslo"
              value={haslo}
              disabled={generujHaslo}
              onChange={(e) => ustawHaslo(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="m-3">
            Zapisz
          </Button>
        </Form>
      </section>

      <section id="blok2" >
        <p className="p-2 text-primary lead">Adres: {dane.adres}</p>
        <p className="p-2">Login: {dane.login}</p>
        <p className="p-2">
          {dane.generowanoAutomatycznie
            ? "Hasło automatycznie generowane"
            : "Hasło: " + dane.haslo}
        </p>
      </section>
    </div>
  );
}

export default App;