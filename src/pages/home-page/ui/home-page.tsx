import { Header } from "@widgets/header"
import { Main } from "@widgets/main"
import classes from "./home-page.module.scss"
import { Footer } from "@widgets/footer"

export function Homepage() {
    return (
        <>
            <div className={classes.background} />
            <div className={classes.homepage}>
                <Header />
                <Main>Hello world!</Main>
                <Footer />
            </div>
        </>
    )
}