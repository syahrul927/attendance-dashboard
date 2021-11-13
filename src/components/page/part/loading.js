import React from 'react'

const Loading = () => {
    return (
        <div className="ui container">
            <div className="ui dimmer modals page transition active">
                <div className="ui standard test modal transition visible active">
                        <div class="ui indeterminate active loader"></div>
                </div>
            </div>
        </div>
    )

}

export default Loading