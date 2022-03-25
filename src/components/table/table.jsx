import React from 'react'
// import './table.css'
const table = props => {
    return (
        <div>
            {/* <div className="table-wrapper">
                <table>
                    {
                        props.headTada && props.renderHead ? (
                            <thead>
                                <tr>
                                    {
                                        props.headData.map(item, index => props.renderHead(item, index))
                                    }
                                </tr>
                            </thead>
                        ) : null
                    }
                    {props.bodyTada && props.renderBody ? (
                        <tbody>
                            {
                                props.bodyData.map((item, index) => props.renderBody(item, index))
                            }
                        </tbody>
                    ) : null}
                </table>
            </div> */}
        </div>
    )
}

export default table