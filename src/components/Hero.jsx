import Button from "./Button"
import "./Hero.css"

const Hero = ({title, desc, imgFile}) => {
  return (
    <>
        <section>
            <div class="content">
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Button btnText="Text me" class="btn"/>
            </div>
            <div class="image">
                <img src={ imgFile } alt="" />
            </div>
        </section>
    </>
  )
}

export default Hero