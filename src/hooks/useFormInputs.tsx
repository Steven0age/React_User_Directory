import { useState, type ChangeEvent } from "react";

export default function useFormInputs() {
  const [usernameValue, setUsername] = useState("");
  const [birthdateValue, setBirthdate] = useState("");
  const [genderValue, setGender] = useState("");
  const [mailValue, setMail] = useState("");
  const [addressalue, setAddress] = useState("");
  const [phoneValue, setPhone] = useState("");
  const [websiteValue, setWebsite] = useState("");

  function handleInputChangeEvent(event: ChangeEvent<HTMLInputElement>) {
    switch (event.target.id) {
      case "username":
        setUsername(event.target.value);
        break;
      case "birthdate":
        setBirthdate(event.target.value);
        break;
      case "gender":
        setGender(event.target.value);
        break;
      case "mail":
        setMail(event.target.value);
        break;
      case "address":
        setAddress(event.target.value);
        break;
      case "phone":
        setPhone(event.target.value);
        break;
      case "website":
        setWebsite(event.target.value);
        break;

      default:
        return;
    }
  }

  return {
    usernameValue,
    birthdateValue,
    genderValue,
    mailValue,
    addressalue,
    phoneValue,
    websiteValue,
    handleInputChangeEvent,
  };
}
