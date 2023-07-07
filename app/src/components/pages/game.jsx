import IconButton from "../atoms/iconButton";
import VsCPU from "../organisms/vsCpu"
import rockIco from '../../icons/Rock.ico'

function Game() {
  return (
    <div className="Game">
      <header className="Game-header">
        Piedra papel tijeras lagarto spock
      </header>
      <VsCPU/>
    </div>
  );
}

export default Game;
