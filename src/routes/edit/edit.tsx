import InputForm from "../../components/InputForm/InputForm";
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import useFormInputs from "../../hooks/useFormInputs";
import { useEffect } from "react";
import { findExistingUser } from "../../utils/validateUserUtils";

export default function Edit() {
  const params = useParams();
  const { users, updateUser } = useUser();
  const data = useFormInputs();
  const navigate = useNavigate();

  if (params.id) {
    const editUserId = findExistingUser(params.id, users);

    if (editUserId === false) {
      alert(
        "Fehler - User mit der ID nicht gefunden! Seitenaufruf wurde abgebrochen"
      );

      useEffect(() => {
        navigate("/ansicht");
      }, []);
      return;
    }

    useEffect(() => {
      data.setForm(users[editUserId]);
    }, []);
  }
  return (
    <>
      <h1>User {params.id} wird bearbeitet</h1>
      <InputForm
        handleInputChangeEvent={data.handleInputChangeEvent}
        usernameValue={data.usernameValue}
        birthdateValue={data.birthdateValue}
        genderValue={data.genderValue}
        mailValue={data.mailValue}
        addressValue={data.addressValue}
        phoneValue={data.phoneValue}
        websiteValue={data.websiteValue}
        clickHandler={() => {
          updateUser({
            pictureUrl: data.genderValue,
            userName: data.usernameValue,
            birthdate: data.birthdateValue,
            address: data.addressValue,
            gender: data.genderValue,
            phone: data.phoneValue,
            mail: data.mailValue,
            website: data.websiteValue,
            userId: "",
          });
          data.resetForm();
        }}
      />
    </>
  );
}
