import './Plant.css'

export const Plant = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <img 
                src={`https://raw.githubusercontent.com/jbcznsk/imgs/main/${props.src}`}
                alt=''
                />
        </div>
    )
}