export default function Loading (props) {
    return (
        <div className="w-full flex justify-center items-center">
            <h1 className={`text-3xl ${props.className}`}>Loading...</h1>
        </div>
    )
}