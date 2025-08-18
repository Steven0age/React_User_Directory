import { useState, type ChangeEvent } from "react";
import type { UserCardProps } from "../components/types/user";

export default function useFormInputs() {
  const [usernameValue, setUsername] = useState("");
  const [birthdateValue, setBirthdate] = useState("");
  const [genderValue, setGender] = useState("");
  const [mailValue, setMail] = useState("");
  const [addressValue, setAddress] = useState("");
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

  function resetForm() {
    setUsername("");
    setBirthdate("");
    setGender("");
    setMail("");
    setAddress("");
    setPhone("");
    setWebsite("");
  }

  function setForm(userData: UserCardProps) {
    setUsername(userData.userName);
    setBirthdate(userData.birthdate);
    setGender(userData.gender);
    setMail(userData.mail);
    setAddress(userData.address);
    setPhone(userData.phone);
    setWebsite(userData.website);
  }

  return {
    usernameValue,
    birthdateValue,
    genderValue,
    mailValue,
    addressValue,
    phoneValue,
    websiteValue,
    handleInputChangeEvent,
    resetForm,
    setForm,
  };
}
