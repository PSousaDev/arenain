import { ButtonComponent } from './styles'


export interface ButtonProps {
  text?: string;
  fullWidth?: boolean;
  href?:string
  Click?:any
}

function Button({ Click,href,text, fullWidth }: ButtonProps) {
  return (
    <>
      <ButtonComponent
        onClick={Click}
        href={href}
        fullWidth={fullWidth}>
          

        {text}
      </ButtonComponent>
    </>
  );
}

export default Button;