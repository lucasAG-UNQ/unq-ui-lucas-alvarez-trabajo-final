import Choices from "../atoms/choices"
import IconButton from "../atoms/iconButton";

const BotoneraPPTLSVs=({action,playerChoice,disabled,showSelected})=>{

    

    return(
        <div className="d-flex flex-column mb-3">
            
        {console.log("test "+playerChoice)}
                {Choices.map( (choice)=> {
                    return (<IconButton
                        action={()=>action(choice.id)} 
                        disabled={disabled}
                        selected={showSelected && choice.id===playerChoice}
                        key={choice.id} 
                        id={choice.id} 
                        srcImg={choice.iconSrc} 
                        title={choice.name} />)
                } )}
            </div>
    )
}

export default BotoneraPPTLSVs;