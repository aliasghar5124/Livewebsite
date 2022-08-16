import Common from "./Common";
import web from "../src/images/a.jpg"

const About =()=>{
    return(
        <>
            <Common name='Welcome to About Page' imgsrc={web} visit='/contact' btnname='Contact Now' />
        </>
    )
}
export default About;