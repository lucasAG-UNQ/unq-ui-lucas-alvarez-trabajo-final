import rockIco from '../../icons/Rock.ico'
import paperIco from '../../icons/Paper.ico'
import scissorsIco from '../../icons/Scissors.ico'
import lizardIco from '../../icons/Lizard.ico'
import spockIco from '../../icons/Spock.ico'

const Choices=[
    {id:0,name:"Rock", iconSrc: rockIco, beats:[2,3]},
    {id:1,name:"Paper", iconSrc: paperIco, beats:[0,4]},
    {id:2,name:"Scissors", iconSrc: scissorsIco, beats:[1,3]},
    {id:3,name:"Lizard", iconSrc: lizardIco, beats:[1,4]},
    {id:4,name:"Spock", iconSrc: spockIco,beats:[0,2]}
]

export default Choices