import React from 'react'
import {compose} from "./index";

const withChildFunction = (fn) => (Wrapped) => {
    return(props) => {
        return(
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
}

export default withChildFunction