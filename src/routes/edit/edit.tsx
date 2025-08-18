import InputForm from "../../components/InputForm/InputForm";
import { useParams } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import useFormInputs from "../../hooks/useFormInputs";

export default function Edit() {
  const params = useParams();
  const { users, saveUsers } = useUser();
  const data = useFormInputs();

  //  console.log("users =", users);
  const editUserId = users.findIndex((i) => {
    return i.userId === "Stephan-1989-02-26";
  });
  data.setForm(users[editUserId]);

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
          data.resetForm();
        }}
      />
    </>
  );
}
