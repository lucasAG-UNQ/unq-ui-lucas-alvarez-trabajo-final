import { useEffect, useState } from "react";
import GameContainer from "../atoms/gameContainer"
import BotoneraPPTLSVs from "../molecules/BotoneraPPTLS";
import Choices from "../atoms/choices";

const Pvp=()=>{
    const [score1,setScore1]=useState(0);
    const [score2,setScore2]=useState(0);
    const [player1Choice,setPlayer1Choice]=useState(null);
    const [player1ChoiceMessage,setPlayer1ChoiceMessage]=useState('');
    const [player2Choice,setPlayer2Choice]=useState(null);
    const [player2ChoiceMessage,setPlayer2ChoiceMessage]=useState(null);
    const [result,setResult]=useState(null);

    useEffect(()=>{
        if(player1Choice!=null){
            setPlayer1ChoiceMessage(`Player's 1 choice is ${Choices[player1Choice]?.name}`);
            getResult();
        }
    },[player1Choice])
    
    useEffect(()=>{
        if(player2Choice!=null){
            setPlayer2ChoiceMessage(`Player's 2 choice is ${Choices[player2Choice]?.name}`)
            getResult();
        }
    },[player2Choice])

    
    const showResult=()=>{
        if(result===0){
            return 'Draw'
        }else if(result===1){
            return `Player 1 won with ${Choices[player1Choice].name} to Player's 2 ${Choices[player2Choice].name}`
        }else if(result===2){
            return `Player 2 won with ${Choices[player2Choice].name} to Player's 1 ${Choices[player1Choice].name}`
        }
    }

    const handlePlayer1Choice=(choice)=>{
        setPlayer1Choice(choice);
    }

    const handlePlayer2Choice=(choice)=>{
        setPlayer2Choice(choice);
    }

    const getResult=()=>{
        if (!canShow()) {
            return
        }else if(player1Choice===player2Choice){
            setResult(0);
        }else if(Choices[player1Choice].beats.includes(player2Choice)){
            setResult(1);
            setScore1(score1+1);
        }else if(Choices[player2Choice].beats.includes(player1Choice)){
            setResult(2);
            setScore2(score2+1);
        }

    }

    const resetStates=()=>{
        setPlayer1Choice(null);
        setPlayer2Choice(null);
        setPlayer1ChoiceMessage(null);
        setPlayer2ChoiceMessage(null);
        setResult(null);
    }

    const canShow=()=>player1Choice!=null&&player2Choice!=null;

    return(
        <GameContainer>
            <h4>Let's Play</h4>
            <div className="d-flex flex-row justify-content-between w-100">
                <div className="d-flex flex-column align-items-start gx-5">
                    <p>Player 1 Score: &#40;{score1}&#41;</p>
                    <div className="d-flex flex-row align-items-center">
                        <BotoneraPPTLSVs 
                            playerChoice={player1Choice} 
                            action={handlePlayer1Choice} 
                            showSelected={canShow()} 
                            disabled={player1Choice!=null}/>
                        {canShow() && <p className="p-2 text-center">{player1ChoiceMessage}</p>}
                    </div>
                </div>
                
                <div className="d-flex flex-column align-items-end gx-5">
                    <p>Player 2 Score: &#40;{score2}&#41;</p>
                    <div className="d-flex flex-row align-items-center">
                        {canShow() && <p className="p-2 text-center">{player2ChoiceMessage}</p>}
                        <BotoneraPPTLSVs 
                            playerChoice={player2Choice}
                            action={handlePlayer2Choice} 
                            showSelected={canShow()} 
                            disabled={player2Choice!=null}/>
                    </div>
                </div>
            </div>
            {result!=null &&
                <div className="d-flex flex-column align-items-center">
                    <p className="text-center">{showResult()}</p>
                    <button className="mb-1 border-0 bg-info text-white rounded" onClick={resetStates}>Play Again</button>
                </div>
            } 
        </GameContainer>
    )
}

export default Pvp;