import { useNavigate } from "react-router-dom"
import IconButton from "./iconButton";

const GameContainer=({children})=>{
    const navigate=useNavigate();
    const handleGoHome=()=>{
        navigate("/")
    }

    return(
        <div className="GameContainer bg-dark p-3">     
            <button className="rounded-circle align-items-center justify-content-center" onClick={handleGoHome}>←</button>  
            <div className="d-flex flex-column justify-content-center align-items-center">
                {children}
            </div>
        </div>
    )
}

export default GameContainer