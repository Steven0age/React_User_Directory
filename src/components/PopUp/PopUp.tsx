import FadeContent from "../FadeContent/FadeContent";
import "./PopUp.scss";

type PopUpProps = {
  popupVisibility: Boolean;
};

export default function PopUp({ popupVisibility }: PopUpProps) {
  return (
    <div className={`${popupVisibility ? "popup" : "popup popup--disabled"}`}>
      <FadeContent
        blur={true}
        duration={200}
        easing="ease-out"
        initialOpacity={0}
      >
        {<p className="popup__content">GESPEICHERT</p>}
      </FadeContent>
    </div>
  );
}
