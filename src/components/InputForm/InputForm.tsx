import "./InputForm.scss";

export default function Input() {
  return (
    <div className="form">
      <form>
        <label for="username">Username</label>
        <br></br>
        <input type="text" id="username" name="username" />
        <br></br>
        <label for="birthdate">Geburtsdatum</label>
        <br></br>
        <input type="date" id="birthdate" name="birthdate" />
        <br></br>
        <label for="gender">Geschlecht</label>
        <br></br>
        <select id="gender" name="gender">
          <option value=""></option>
          <option value="Männlich">Männlich</option>
          <option value="Weiblich">Weiblich</option>
          <option value="Divers">Divers</option>
        </select>
        <br></br>
        <label for="mail">E-Mail Adresse</label>
        <br></br>
        <input type="email" id="mail" name="mail" />
        <br></br>
        <label for="address">Post Adresse</label>
        <br></br>
        <input type="text" id="address" name="address" />
        <br></br>
        <label for="phone">Telefonnummer</label>
        <br></br>
        <input type="tel" id="phone" name="phone" />
        <br></br>
        <label for="website">Webseite</label>
        <br></br>
        <input type="url" id="website" name="website" />
        <br></br>
        <input className="submit-btn" type="submit" value="Speichern" />
      </form>
    </div>
  );
}
