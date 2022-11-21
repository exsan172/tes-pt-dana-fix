const NotFound = () => {
    return (
        <div className="flex w-full h-screen justify-center items-center">
            <div className="flex flex-col">
                <div className="flex w-full justify-center ">
                    <span className="text-5xl font-bold">404</span>
                </div>
                <div className="flex w-full justify-center mt-2">
                    <span className="text-md">Pages not found.</span>
                </div>
            </div>
        </div>
    )
}

export default NotFound