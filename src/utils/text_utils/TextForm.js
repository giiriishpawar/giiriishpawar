import React, {useState} from 'react'
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const handleUpperCaseClick = ()=> {
        setText(text.toUpperCase())
    }
    const handleOnChange = (e)=> {
        console.log('on change fire');
        setText(e.target.value)
    }
    const [text, setText] = useState('Enter Text Here');
    return (
        <div>
            <h2>{props.lable}</h2>
            <div className="mb-3">
                <textarea value={text} onChange={handleOnChange} className="form-control" id="textAreaBox" rows="12" placeholder={props.lable} />
            </div>
            <button className="btn btn-primary" onClick={handleUpperCaseClick}>Convert to upper case</button>
        </div>
    )
}

TextForm.propTypes = {
    lable: PropTypes.string
}

TextForm.defaultProps = {
    lable: "Enter Text"
}