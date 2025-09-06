import InputForm from "../../components/InputForm/InputForm";
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import useFormInputs from "../../hooks/useFormInputs";
import { useEffect } from "react";
import { findExistingUserId } from "../../utils/validateUserUtils";

export default function Edit() {
  const params = useParams();
  const { users, updateUser } = useUser();
  const data = useFormInputs();
  const navigate = useNavigate();
  const editUserId = findExistingUserId(params.id, users);

  useEffect(() => {
    if (editUserId === -1) {
      alert(
        "Fehler - User mit dieser ID nicht gefunden! Seitenaufruf wurde abgebrochen"
      );
      navigate("/ansicht");

      return;
    }
    if (editUserId >= 0) {
      data.setForm(users[editUserId]);
    }
  }, [editUserId]);

  return (
    <>
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
          const userUpdated = updateUser({
            pictureUrl: data.genderValue,
            userName: data.usernameValue,
            birthdate: data.birthdateValue,
            address: data.addressValue,
            gender: data.genderValue,
            phone: data.phoneValue,
            mail: data.mailValue,
            website: data.websiteValue,
            userId: users[editUserId].userId,
          });
          if (userUpdated) {
            alert("Benutzerdaten wurden aktualisiert");
          }
        }}
      />
    </>
  );
}
