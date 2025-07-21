import "./NavButton.scss";
import { Link } from "react-router-dom";

type NavButtonProps = {
  buttonName: string;
  buttonTarget: string;
};

export default function NavButton({
  buttonName,
  buttonTarget,
}: NavButtonProps) {
  return (
    <Link className="navButton" to={buttonTarget}>
      {buttonName}
    </Link>
  );
}
