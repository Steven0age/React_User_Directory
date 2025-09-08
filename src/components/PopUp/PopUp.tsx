import FadeContent from "../FadeContent/FadeContent";
import "./PopUp.scss";

type PopUpProps = {
  showPopup: Boolean;
};

export default function PopUp({ showPopup }: PopUpProps) {
  return (
    <div className={`popup ${showPopup ? "" : "popup--disabled"}`}>
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        {<p className="popup__content">GESPEICHERT</p>}
      </FadeContent>
    </div>
  );
}
