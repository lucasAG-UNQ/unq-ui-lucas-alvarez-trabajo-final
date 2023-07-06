import IconButton from "../atoms/iconButton";
import VsCPU from "../organisms/vsCpu"

function Game() {
  return (
    <div className="Game">
      <header className="Game-header">
        Piedra papel tijeras lagarto spock
      </header>
      <VsCPU/>
      <IconButton srcImg={"https://raw.githubusercontent.com/JLChamberlain/RPSLS/master/IMG/Favicons/favicon1.ico"}/>
    </div>
  );
}

export default Game;
