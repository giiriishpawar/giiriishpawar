import React, {useState} from 'react'
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const handleOnChange = (e)=> {
        console.log('on change fire');
        setText(e.target.value)
    }
    const handleUpperCaseClick = ()=> {
        setText(text.toUpperCase());
        props.showAlert('Coverted to UpperCase.', 'Success');
    }
    const handleLowerCaseClick = ()=> {
        setText(text.toLocaleLowerCase());
        props.showAlert('Coverted to LowerCase.', 'Success');
    }
    const handleClearTextClick = ()=> {
        setText('');
        props.showAlert('Text Clear.', 'Success');
    }
    const handleCopyClick = (e)=> {
        let text = document.getElementById("textAreaBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copy to Clipboard.', 'Success');
    }
    const handleExtraSpaceClick = ()=> {
        setText(text.split(/[ ]+/).join(' '));
        props.showAlert('Extra Space Removed.', 'Success');
    }

    const handleCapitalizedClick = ()=> {
        let newText = text.split(/[ ]+/).join(' ').split('');
        for (let i=0; i<newText.length; i++) {
            if (i===0) {
                newText[i] = newText[i].toUpperCase();
            } else if (newText[i] === '.' && newText[i+1] === ' ' && newText[i+1] !== undefined) {
                newText[i+2] = newText[i+2].toUpperCase();
                i++;
                i++;
            } else if (newText[i] === '.' && newText[i+1] !== ' ' && newText[i+1] !== undefined) {
                newText[i+1] = newText[i+1].toUpperCase();
                i++;
            } else {
                newText[i] = newText[i].toLowerCase();
            }
        }
        setText(newText.join(''));
        props.showAlert('Capitalized', 'Success');
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{color: props.mode==='light'?'#292F33':'white'}}>
                <h2>{props.lable}</h2>
                <div className="mb-3">
                    <textarea value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#778899', color: props.mode==='light'?'black':'white', width:'60%'}} className="form-control" id="textAreaBox" rows="8" />
                </div>
                <button className={`btn btn-${props.mode=='light'?'primary':props.mode} mb-3 mx-2`} onClick={handleUpperCaseClick}>To Upper Case</button>
                <button className={`btn btn-${props.mode=='light'?'primary':props.mode} mb-3 mx-2`} onClick={handleLowerCaseClick}>To Lower Case</button>
                <button className={`btn btn-${props.mode=='light'?'primary':props.mode} mb-3 mx-2`} onClick={handleClearTextClick}>Clear Text</button>
                <button className={`btn btn-${props.mode=='light'?'primary':props.mode} mb-3 mx-2`} onClick={handleCopyClick}>Copy</button>
                <button className={`btn btn-${props.mode=='light'?'primary':props.mode} mb-3 mx-2`} onClick={handleExtraSpaceClick}>Remove Extra Spaces</button>
                <button className={`btn btn-${props.mode=='light'?'primary':props.mode} mb-3 mx-2`} onClick={handleCapitalizedClick}>Capitalized</button>
            </div>
            <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
                <h3>Your text Summary</h3>
                <p>{text.split(' ').length} words and {text.length} characters. </p>
                <p>{0.008 * text.length} Minutes read</p>
                <h4>Preview</h4>
                <p>{text.length>0?text:'Enter something in text box above to preview it here.'}</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    lable: PropTypes.string
}

TextForm.defaultProps = {
    lable: "Enter Text"
}