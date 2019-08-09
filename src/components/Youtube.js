import React from "react";

var youtube = ["q2MJNnzLIv0", "ooZFIoCr25o", "3X9DC3VjXak","4HgKa3WB5HY" ,"we9JpIJmGag" ,"TeSXhVvdpK8", "rvK2eedlaXY" , "uyU5rdJcd8U" , "0S4368avqGg", "N-9v4rYDzpA", "sMVNZ2SUCRs", "sJK67XXE_Rg", "k-5sfRE5gTw" , "xDLHnGSvbA0" , "kQDU5yj7SLo", "ep_qOxZJq-U", "D6fHHmBYJco", "OiAV8TAMiC0", "nudWWJ255q0","6ul_2XUnxDo", "xDLHnGSvbA0", "w2fFfLlIzck", "eefdeQymnQY", "w2FkpJMMvoM", "TY4s35uULg4"];

let getTwoRandomNumbers = () => {
    let firstNumber = Math.floor(Math.random() * youtube.length);
    let secondNumber = Math.floor(Math.random() * youtube.length);
    if(firstNumber!==secondNumber) return [firstNumber,secondNumber];
    return getTwoRandomNumbers();
}

const Videos = () => {
    return (
        <div  id='video'>
        <div>
            <h3>Related Video</h3>
            <iframe
                title="randomvideo"
                width='280'
                height='140'
                src={`http://www.youtube.com/embed/${youtube[getTwoRandomNumbers()[0]]}`}
                autoPlay="0"
                frameBorder='0'
                allowFullScreen
            />
        </div>
        <p></p>
        <div>
            <iframe
                title="randomvideo"
                width='280'
                height='140'
                src={`http://www.youtube.com/embed/${youtube[getTwoRandomNumbers()[1]]}`}
                autoPlay="0"
                frameBorder='0'
                allowFullScreen
            />
        </div>
        </div>
    );
};

  export default Videos;