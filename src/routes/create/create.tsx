import Input from "../../components/InputForm/InputForm";
import useFormInputs from "../../hooks/useFormInputs";

export default function Create() {
  const data = useFormInputs();
  return (
    <>
      <Input
        handleInputChangeEvent={data.handleInputChangeEvent}
        usernameValue={data.usernameValue}
        birthdateValue={data.birthdateValue}
        genderValue={data.genderValue}
        mailValue={data.mailValue}
        addressValue={data.addressalue}
        phoneValue={data.phoneValue}
        websiteValue={data.websiteValue}
      />
    </>
  );
}
