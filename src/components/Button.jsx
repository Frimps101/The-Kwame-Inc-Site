import "./Button.css"

const Button = ({btnText}) => {
  return (
    <a href="https://api.whatsapp.com/send?phone=233542730363" target="blank" className="btn"> {btnText} </a>

  )
}

export default Button