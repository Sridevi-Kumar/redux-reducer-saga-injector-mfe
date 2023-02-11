import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { getReact } from './action';

export const Startup = () => {
    const remoteRes = useSelector((store) => store?.remoteApp?.appName)
    const hostRes = useSelector((store) => store.host.appName)

    let res = remoteRes ?? hostRes

    // const product = useSelector((store) =>store?.remoteApp?.appName)

    console.log("Response " + JSON.stringify(res))

    const dispatch = useDispatch()
    const [selectValue, setSelectValue] = React.useState("");
    const handleChange = (event) => {
        dispatch(getReact())
        const value = event.target.value;
        setSelectValue(value);

    };

    return (
        <div>
            We are in {res}
            <div>
                <select onChange={handleChange} className="form-select">
                    <option defaultValue>
                        Select Technology
                    </option>
                    <option value="React">React</option>
                </select>
            </div>
        </div>
    )
}