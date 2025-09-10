import { useEffect, useState } from "react";
import FadeContent from "../FadeContent/FadeContent";
import "./PopUp.scss";
import { useUser } from "../../context/UserContext";

type PopUpProps = {
  trigger: Boolean;
};

export default function PopUp({ trigger }: PopUpProps) {
  const [showPopup, setShowPopup] = useState(false);

  const { setPopupTrigger, popupTrigger } = useUser();

  useEffect(() => {
    if (trigger) {
      setTimeout(() => {
        setShowPopup(false);
      }, 1000);

      setShowPopup(true);

      setTimeout(() => {
        setPopupTrigger(false);
      }, 1100);
    }
  }, [trigger]);

  if (!popupTrigger) return null;

  return (
    <div className={`${showPopup ? "popup" : "popup popup--disabled"}`}>
      <FadeContent
        blur={true}
        duration={400}
        easing="ease-out"
        initialOpacity={0}
      >
        {<p className="popup__content">GESPEICHERT</p>}
      </FadeContent>
    </div>
  );
}
