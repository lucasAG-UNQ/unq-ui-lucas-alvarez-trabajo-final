import { useNavigate } from "react-router-dom";


const GameModeSelect=()=>{

    const navigate= useNavigate();

    const handleGoToVsCpu=()=>{
        navigate("/vsCpu")
    }
    const handleGoToPvp=()=>{
        navigate("/pvp")
    }

    return(
        <div className="GameContainer bg-dark p-3 container-fluid mb-3 d-flex flex-column justify-content-center align-items-center">
            <h3>Select Game Mode</h3>
            <div className="d-flex flex-row align-items-center justify-content-around w-75">
                <button className="mb-3 border-0 bg-info text-white rounded" onClick={handleGoToVsCpu} >Play Against Cpu</button>
                <button className="mb-3 border-0 bg-info text-white rounded" onClick={handleGoToPvp}>Play Local VS</button>
            </div>
        </div>
    )
}

export default GameModeSelect;