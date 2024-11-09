import { Header } from "@widgets/header"
import classes from "./main.module.scss"

interface Props {
    children?: React.ReactNode
}

export function Main(props: Props) {
    return (
        <div className={classes.main}>
            {props.children}
            <Header></Header>
        </div>
    )
}
