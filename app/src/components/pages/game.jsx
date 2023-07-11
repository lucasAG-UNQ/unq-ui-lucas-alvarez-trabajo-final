import IconButton from "../atoms/iconButton";
import VsCPU from "../organisms/vsCpu"
import rockIco from '../../icons/Rock.ico'

function Game({children}) {
  return (
    <div className="Game pt-5 d-flex justify-content-center">
      {children}
    </div>
  );
}

export default Game;
