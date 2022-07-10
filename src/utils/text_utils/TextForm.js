import React, {useState} from 'react'
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const handleUpperCaseClick = ()=> {
        setText(text.toUpperCase());
    }
    const handleLowerCaseClick = ()=> {
        setText(text.toLocaleLowerCase());
    }
    const handleClearTextClick = ()=> {
        setText('');
    }
    const handleOnChange = (e)=> {
        console.log('on change fire');
        setText(e.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className='container'>
                <h2>{props.lable}</h2>
                <div className="mb-3">
                    <textarea value={text} onChange={handleOnChange} className="form-control" id="textAreaBox" rows="12" placeholder={props.lable} />
                </div>
                <button className="btn btn-primary mb-3 mx-2" onClick={handleUpperCaseClick}>Convert to upper case</button>
                <button className="btn btn-primary mb-3 mx-2" onClick={handleLowerCaseClick}>Convert to lower case</button>
                <button className="btn btn-primary mb-3 mx-2" onClick={handleClearTextClick}>Clear Text</button>
            </div>
            <div className='container'>
                <h3>Your text Summary</h3>
                <p>{text.split(' ').length} words and {text.length} characters. </p>
                <p>{0.008 * text.length} Minutes read</p>
                <h4>Preview</h4>
                <p>{text}</p>
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