import type { ChangeEventHandler } from "react";
import "./InputForm.scss";

type InputProps = {
  handleInputChangeEvent: ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  >;
  usernameValue: string;
  genderValue: string;
  birthdateValue: string;
  mailValue: string;
  addressValue: string;
  phoneValue: string;
  websiteValue: string;
};

export default function Input({
  handleInputChangeEvent,
  usernameValue,
  genderValue,
  birthdateValue,
  mailValue,
  addressValue,
  phoneValue,
  websiteValue,
}: InputProps) {
  return (
    <div className="form">
      <form>
        <label htmlFor="username">Username</label>
        <br></br>
        <input
          type="text"
          id="username"
          name="username"
          value={usernameValue}
          onChange={handleInputChangeEvent}
        />
        <br></br>
        <label htmlFor="birthdate">Geburtsdatum</label>
        <br></br>
        <input
          type="date"
          id="birthdate"
          name="birthdate"
          value={birthdateValue}
          onChange={handleInputChangeEvent}
        />
        <br></br>
        <label htmlFor="gender">Geschlecht</label>
        <br></br>
        <select
          id="gender"
          name="gender"
          value={genderValue}
          onChange={handleInputChangeEvent}
        >
          <option value=""></option>
          <option value="Männlich">Männlich</option>
          <option value="Weiblich">Weiblich</option>
          <option value="Divers">Divers</option>
        </select>
        <br></br>
        <label htmlFor="mail">E-Mail Adresse</label>
        <br></br>
        <input
          type="email"
          id="mail"
          name="mail"
          value={mailValue}
          onChange={handleInputChangeEvent}
        />
        <br></br>
        <label htmlFor="address">Post Adresse</label>
        <br></br>
        <input
          type="text"
          id="address"
          name="address"
          value={addressValue}
          onChange={handleInputChangeEvent}
        />
        <br></br>
        <label htmlFor="phone">Telefonnummer</label>
        <br></br>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phoneValue}
          onChange={handleInputChangeEvent}
        />
        <br></br>
        <label htmlFor="website">Webseite</label>
        <br></br>
        <input
          type="url"
          id="website"
          name="website"
          value={websiteValue}
          onChange={handleInputChangeEvent}
        />
        <br></br>
        <input className="submit-btn" type="submit" value="Speichern" />
      </form>
    </div>
  );
}
