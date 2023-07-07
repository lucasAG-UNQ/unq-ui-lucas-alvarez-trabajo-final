import "../../styles/iconButton.css";

const IconButton=({action, disabled, srcImg})=>{
    return(
        <button onClick={action} disabled={disabled}>
            <img src={srcImg} />
        </button>
    )
}

export default IconButton;