export default function Block({title,children}){
    return (
        <div className={"m-2"}>
            {
                title && <div className={"pt-2 px-2 pb-1 text-gray-400"}>{title}</div>
            }
            <div  className={"rounded-lg bg-white p-3 flex flex-col"}>{children}</div>
        </div>
    )
}