import Assets from "../../assets"

const Header = () => {
    return (
        <div className="flex shadow-md px-10 py-4 bg-white">
            <div className="flex">
                <img src={Assets.Logo} alt="logo" width={100}/>
            </div>
            <div className="flex w-full"></div>
        </div>
    )
}

export default Header