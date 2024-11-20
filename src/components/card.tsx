import { IProject } from "../static/projects-data"

interface CardProps{
    data: IProject
}

export function Card({data}: CardProps ){
    return(
        <>
        <div>
            <h3>{data.title}</h3>
        </div>
        </>
    )
}