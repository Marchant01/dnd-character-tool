import { useNavigate } from "react-router-dom";
import CharacterSheet from "./character-sheet.jsx";

export default function NavBar() {
  const navigate = useNavigate();

  return <nav>
    <header>
      <h1>DND Character Tool</h1>
    </header>
    <div className="navbar-button-div">
      <button onClick={ () => navigate('/') }>Home</button>
      <button onClick={ () => navigate('/character_sheet') }>Character Sheet</button>
    </div>
  </nav>
}