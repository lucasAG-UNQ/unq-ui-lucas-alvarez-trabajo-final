import { useEffect,useState } from "react";
import Choices from "../atoms/choices";
import IconButton from "../atoms/iconButton";
import "../../styles/vsCpu.css"
import GameContainer from "../atoms/gameContainer";

const VsCPU=()=>{

    const [score,setScore]=useState(0);
    const [cpuScore,setCpuScore]=useState(0);
    const [playerChoice,setPlayerChoice]=useState(null);
    const [playerChoiceMessage,setPlayerChoiceMessage]=useState('');
    const [cpuChoice,setCpuChoice]=useState(null);
    const [cpuChoiceMessage,setCpuChoiceMessage]=useState(null);
    const [result,setResult]=useState(null);
    const [disabled,setDisabled]=useState(false);

    useEffect(()=>{
        if(playerChoice!=null){
            setPlayerChoiceMessage(`Player's choice is ${Choices[playerChoice]?.name}`)
        }
    },[playerChoice])
    
    useEffect(()=>{
        if(playerChoice!=null){
            setCpuChoiceMessage(`CPU's choice is ${Choices[cpuChoice]?.name}`)
        }
    },[cpuChoice])

    const showResult=()=>{
        if(result===0){
            return 'Draw'
        }else if(result===1){
            return `Player won with ${Choices[playerChoice].name} to CPU's ${Choices[cpuChoice].name}`
        }else if(result===2){
            return `CPU won with ${Choices[playerChoice].name} to Player's ${Choices[cpuChoice].name}`
        }
    }

    const handleResult=(choice)=>{
        setPlayerChoice(choice);
        setDisabled(true)
        const randomChoice = Math.floor(Math.random()*5);
        setTimeout(()=>setCpuChoice(randomChoice),1000);
        setTimeout(()=>setResult(getResult(choice,randomChoice)),2000);
        clearTimeout();
    }

    const getResult=(pChoice,cpuChoice)=>{
        if(pChoice===cpuChoice){
            return 0;
        }else if(Choices[pChoice].beats.includes(cpuChoice)){
            setScore(score+1);
            return 1;
        }else if(Choices[cpuChoice].beats.includes(pChoice)){
            setCpuScore(cpuScore+1);
            return 2;
        }
    }

    const resetStates=()=>{
        setResult(null);
        setCpuChoice(null);
        setPlayerChoice(null);
        setDisabled(false);
    }

    return(
        <GameContainer>
            <h4>Let's Play</h4>
            <div className="d-flex flex-row w-75 justify-content-between">
                <p>Player wins: {score}</p>
                <p>Cpu wins: {cpuScore}</p>
            </div>
            <div className="mb-3 buttonsContainer">
                {Choices.map( (choice)=> {
                    return (<IconButton 
                        action={()=>handleResult(choice.id)} 
                        disabled={disabled}
                        selected={choice.id===playerChoice}
                        key={choice.id} 
                        id={choice.id} 
                        srcImg={choice.iconSrc} 
                        title={choice.name} />)
                } )}
            </div>
            {playerChoice!=null && <p>{playerChoiceMessage}</p>}
            {cpuChoice!=null && <p>{cpuChoiceMessage}</p>}
            {result!=null &&
                <div className="d-flex flex-column align-items-center">
                    <p>{showResult()}</p>
                    <button className="mb-3 border-0 bg-info text-white rounded" onClick={resetStates}>Play Again</button>
                </div>
            }
        </GameContainer>

    )
}

export default VsCPU;