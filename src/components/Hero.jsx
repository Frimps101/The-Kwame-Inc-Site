import Button from "./Button"
import "./Hero.css"

const Hero = ({title, desc, imgFile}) => {
  return (
    <>
        <section>
            <div class="content">
                <h3>{ title }</h3>
                <p>{ desc }</p>
                {/* <Button className="content-btn" btnText="Say Hello"/> */}
                <div className="content-btn">
                  <a href="https://api.whatsapp.com/send?phone=233542730363" target="blank" className=""> Say Hello </a>
                </div>
            </div>
            <div class="image">
                <img src={ imgFile } alt="" className="float"/>
            </div>
        </section>
    </>
  )
}

export default Hero