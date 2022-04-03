import { useStore } from '../utils/store'
import Button from './Button'

function CreateRoom() {
    return (
        <div style={createroomgrid()}>
            <Button onClick={() => console.log('2 players')} text='2 players' />
            <Button onClick={() => console.log('3 players')} text='3 players' />
            <Button onClick={() => console.log('4 players')} text='4 players' />
            <Button onClick={() => console.log('5 players')} text='5 players' />
            <Button onClick={() => console.log('6 players')} text='6 players' />
        </div>
    )

    function createroomgrid(): React.CSSProperties {
        return {
            width: '100%',
            display: 'grid',
            gridAutoFlow: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            rowGap: '15px',
        }
    }
}

export default CreateRoom
