import { useState } from "react"

import './bot.scss'

const Bot = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="container__bot">

            <button onClick={() => setOpen(!open)}
                className="animate__animated animate__bounce animate__infinite"
            >¿Tienes alguna pregunta? <i className="far fa-question-circle"></i></button>
            {open === true &&
                <div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <iframe
                        title="TermoBot"
                        allow="microphone;"
                        width="350"
                        height="430"
                        src="https://console.dialogflow.com/api-client/demo/embedded/15255a0a-8abf-4294-ab70-38dddd1680a9">
                    </iframe>
                </div>
            }
        </div>
    )
}
export default Bot