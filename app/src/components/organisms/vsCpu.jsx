import { useEffect,useState } from "react";
import Choices from "../atoms/choices";
import IconButton from "../atoms/iconButton";
import "../../styles/vsCpu.css"

const VsCPU=()=>{

    const [score,setScore]=useState(0);
    const [error,setError]=useState('');
    const [playerChioce,setPlayerChoice]=useState(null);
    const [cpuChoice,setCpuChoice]=useState(null);
    const [result,setResult]=useState(null);
    const [disabled,setDisabled]=useState(false);
    const [turn,setTurn]=useState(1);

    useEffect(()=>{

    },[playerChioce])

    const handleResult=(choice)=>{
        setPlayerChoice(choice);
        setDisabled(true)
        const randomChoice = Math.floor(Math.random()*5);

        setTimeout(()=> setCpuChoice(randomChoice),1500);
        setTimeout(setResult(getResult(playerChioce,cpuChoice)),1500);
    }

    const getResult=(pChoice,cpuChoice)=>{
        if(pChoice==cpuChoice){
            return 0;
        }else if(Choices[pChoice].beats.includes(cpuChoice)){
            return 1;
        }else if(Choices[cpuChoice].beats.includes(pChoice)){
            return 2;
        }else{
            setError("Ocurrió algo inesperado");
            return 3;
        }
    }

    return(
        <div className="GameContainer">
            <header>Let's Play</header>
            <div className="buttonsContainer">
                {Choices.map( (choice)=> {
                    <IconButton id={choice.id} srcImg={choice.iconSrc} />
                } )}
            </div>
        </div>

    )
}

export default VsCPU;