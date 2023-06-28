"use client"

export default function Error({error, reset}) {
    return (
        <div>
            Not loading: {errorr.message}
            <button onClick={() => reset()}>Reload</button>
        </div>
    )
}