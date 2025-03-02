import React from 'react'

const Notes = (props) => {
    return (
        <div className='Note'>
            <div className='Note--Card'>
                <h1 className='Note--Title'>{props.title}</h1>
                <div className="para">
                    <textarea
                        key={props.id}
                        value={props.text}
                        readOnly ></textarea>
                </div>
                <span>Date: {props.date}</span>
                <button className="delete" onClick={() => props.handleDelete(props.id)}>delete note</button>
            </div>
        </div>
    )
}

export default Notes
