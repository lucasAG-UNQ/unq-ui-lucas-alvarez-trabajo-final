import { useEffect,useState } from "react";
import Choices from "../atoms/choices";
import IconButton from "../atoms/iconButton";
import "../../styles/vsCpu.css"

const VsCPU=()=>{

    const [score,setScore]=useState(0);
    const [error,setError]=useState('');
    const [playerChoice,setPlayerChoice]=useState(null);
    const [playerChoiceMessage,setPlayerChoiceMessage]=useState('');
    const [cpuChoice,setCpuChoice]=useState(null);
    const [cpuChoiceMessage,setCpuChoiceMessage]=useState(null);
    const [result,setResult]=useState(null);
    const [disabled,setDisabled]=useState(false);
    const [turn,setTurn]=useState(1);

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
        console.log(result)
        if(result===0){
            return 'Draw'
        }else if(result===1){
            return `Player won with ${Choices[playerChoice].name} to ${Choices[cpuChoice].name}`
        }else if(result===2){
            return `Player lost to ${Choices[cpuChoice].name} with ${Choices[playerChoice].name}`
        }
    }

    const handleResult=(choice)=>{
        setPlayerChoice(choice);
        setDisabled(true)
        const randomChoice = Math.floor(Math.random()*5);
        console.log(getResult(playerChoice,randomChoice))
        setTimeout(()=> setCpuChoice(randomChoice),1500);
        setTimeout(()=>setResult(getResult(playerChoice,cpuChoice)),2500);
        clearTimeout();
    }

    const getResult=(pChoice,cpuChoice)=>{
        if(pChoice===cpuChoice){
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
        <div className="GameContainer bg-dark container-fluid mb-3">
            <header>Let's Play</header>
            <div className="buttonsContainer">
                {Choices.map( (choice)=> {
                    return (<IconButton 
                        action={()=>handleResult(choice.id)} 
                        dissabled={disabled}
                        key={choice.id} 
                        id={choice.id} 
                        srcImg={choice.iconSrc} 
                        title={choice.name} />)
                } )}
            </div>
            {playerChoice!=null && <p>{playerChoiceMessage}</p>}
            {cpuChoice!=null && <p>{cpuChoiceMessage}</p>}
            {result!=null && <p>{showResult()}</p>}
        </div>

    )
}

export default VsCPU;