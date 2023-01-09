import { ButtonComponent } from './styles'


export interface ButtonProps {  
  text?: string;
  fullWidth?: boolean;
  href?:string
  onClick?:any
  type?: string
  value?:any
}

function Button({ value,onClick,href,text, fullWidth }: ButtonProps) {
  
  return (
    <>
      <ButtonComponent
        value={value}
        onClick={onClick}
        href={href}
        fullWidth={fullWidth}>
          

        {text}
      </ButtonComponent>
    </>
  );
}

export default Button;