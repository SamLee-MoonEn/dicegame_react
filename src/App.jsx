import Board from "./Board";
import Button from "./Button";
import { useState} from 'react';
import logo from './assets/logo.png'
import './App.css';


function random(n){
    return Math.ceil(Math.random() * n);
};



function App(){
    const [myHistory, setMyHistory] = useState([])
    const [otherHistory, setOtherHistory] = useState([])
    const [mySum, setMySum] = useState(0)
    const [otherSum, setOtherSum] = useState(0)
    const [isIwinner, setIsIwinner] = useState('')
    const [isOtherWinner, setIsOtherWinner] = useState('')

    const handleRollClick = () => {
        const nextMyNum = random(6);
        const nextOtherNum = random(6);
        setMyHistory([...myHistory, nextMyNum]);
        setOtherHistory([...otherHistory, nextOtherNum]);
        setMySum(mySum+nextMyNum);
        setOtherSum(otherSum+nextOtherNum);
        
    }

    const handleClearClick = () => {
        setMyHistory([]);
        setOtherHistory([]);
        setMySum(0);
        setOtherSum(0);
        setIsIwinner('')
        setIsOtherWinner('')
    };

    return(
        <div className="App">
            <img src={logo} className="App-logo" alt="주사위게임 로고"/>
            <h1 className="App-title">주사위게임</h1>
            <div>
                <Button className="App-button" onClick={handleRollClick} color='blue' >던지기</Button>
                <Button className="App-button" onClick={handleClearClick} color='red' >처음부터</Button>
            </div>
            <div className="App-boards">
                <Board className="App-board" name="나" color="blue" gameHistory={myHistory} sum={mySum} otherSum={otherSum} />
                <Board className="App-board" name="상대" color="red" gameHistory={otherHistory} sum={otherSum} otherSum={mySum}/>
            </div>
        </div>
       
    )
}

export default App