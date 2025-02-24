import React from 'react'

const ToastMessage = ({ message }: { message: string }) => {
    return (
        <div className='toast-message'
            style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                zIndex: "1000",
                backgroundColor: "rgba(100%, 100%, 100%, 0.7)",
                backdropFilter: "blur(30px)",
                color: "black",
                padding: "12px 16px",
                borderRadius: "8px",
                fontSize: "16px",
                textTransform: "capitalize",
                display: message ? "" : "none"
            }}
        >
            <p>{message}</p>
        </div>
    )
}

export default ToastMessage;
