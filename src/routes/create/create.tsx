import InputForm from "../../components/InputForm/InputForm";
import { useUser } from "../../context/UserContext";
import useFormInputs from "../../hooks/useFormInputs";

export default function Create() {
  const data = useFormInputs();
  const { saveUsers } = useUser();
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
          saveUsers({
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
        }}
      />
    </>
  );
}
