import styled from 'styled-components'
import { consts } from '../utils/consts'

interface ButtonProps {
    onClick: () => void
    text: string
}

function Button(props: ButtonProps) {
    return <ButtonCSS onClick={props.onClick}>{props.text}</ButtonCSS>
}

const ButtonCSS = styled.button`
    background-color: white;
    border: 2px solid ${consts.primaryBg};
    border-radius: 100vh;
    width: 150px;
    box-sizing: border-box;
    color: ${consts.primaryBgDark};
    cursor: pointer;
    padding: 12px 25px;
    box-shadow: 0 10px 0 0 ${consts.primaryBg};
    transition: 0.2s;
    &:hover {
        box-shadow: 0 0 0 0 ${consts.primaryBg};
        background-color: ${consts.primaryBg};
        color: white;
    }
`

export default Button
