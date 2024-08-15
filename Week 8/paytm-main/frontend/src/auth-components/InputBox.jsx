export default function InputBox({label, placeholder}){
    return(
        <div className="mt-4 ml-8">
            <label>{label}</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-64" placeholder={placeholder}></input>
        </div>

    )
}