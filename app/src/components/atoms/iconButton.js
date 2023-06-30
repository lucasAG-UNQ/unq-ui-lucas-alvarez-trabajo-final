import "../../styles/iconButton.css";

const IconButton=({srcImg})=>{
    return(
        <button>
            <img src={srcImg} />
        </button>
    )
}

export default IconButton;