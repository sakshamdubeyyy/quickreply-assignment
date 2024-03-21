import React, { useEffect, useState } from 'react'
import { UserCircle } from '@phosphor-icons/react'
import PropTypes from "prop-types";


function Button({ type = 'default', status = 'Default', text, size, IconOnly,textOnly, ...props }) {
    const classNames = ['button', `button-${type}`, `button-${status}`].join(' ');
    const [styles, setStyles] = useState({});
    const [textSize, setTextSize] = useState(32)
    const [buttonText, setButtonText] = useState('Action')

    useEffect(() => {
        if(status === 'Hover'){
            if(type === 'Default'){
                setStyles({
                    backgroundColor:'#EDFAED',
                    color:'green',
                })    
            }
            else if(type === 'Neutral'){
                setStyles({
                    backgroundColor:'#F2F3F5',
                    color:'black'
                })    
            }else if(type === 'Reverse'){
                setStyles({
                    backgroundColor:'#282829',
                    color:'white'
                })    
            }
        }else if(status === 'Default'){
            setStyles({})
        }
    },[status, type])

    useEffect(() => {
        if(size === 'Default'){
            setTextSize(32)
            setStyles({
                ...styles,
                fontSize:'32px',
            })
            
        }else if(size === 'Small'){
            setTextSize(24)
            setStyles({
                ...styles,
                fontSize:'24px',
            })
        }else if(size === 'X-Small'){
            setTextSize(16)
            setStyles({
                ...styles,
                fontSize:'16px'
            })
        }
    }, [size])


    useEffect(() => {
        if(type === 'Default'){
            setStyles({
                color:'green',
            })    
        }
        else if(type === 'Neutral'){
            setStyles({
                color:'black'
            })    
        }else if(type === 'Reverse'){
            setStyles({
                backgroundColor:'#282829',
                color:'white'
            })    
        }
    }, [type])

    // useEffect(() => {
    //     setButtonText(text);
    // },[text])    

    if(textOnly){
        return(
            <p style={styles}>{buttonText}</p>
        )
    }else if(IconOnly){
        return(
            <UserCircle size={textSize} style={styles}/>
        )
    }else{
        return(
            <div className='action-button'>
                <button className={classNames} {...props} style={styles}>
                    <UserCircle size={textSize}/>
                    <p>{buttonText}</p>
                </button>
            </div>
        )
    }
}

Button.prototypes = {
    label: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['Default', 'Hover', 'Disabled'])
}

export default Button
