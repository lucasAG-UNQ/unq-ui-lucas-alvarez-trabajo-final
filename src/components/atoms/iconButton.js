import "../../styles/iconButton.css";

const IconButton=({action, selected, disabled, srcImg})=>{

    const isSelected=()=>{
        return selected? "buttonSelected":"buttonNotSelected"
    }

    return(
        <button className={"buttonImageContainer "+isSelected()} onClick={action} disabled={disabled}>
            <img className="imgButton" src={srcImg} />
        </button>
    )
}

export default IconButton;