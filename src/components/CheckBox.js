import React from 'react'
import './CheckBox.css'

const CheckBox = () => {
    return (
        <div className="cntr">
            <input className="hidden-xs-up" id="cbx" type="checkbox" />
            <label className="cbx" htmlFor="cbx"></label>
            <label className="lbl" htmlFor="cbx">Magic!</label>
        </div>
    )
}

export default CheckBox