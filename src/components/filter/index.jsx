import { Icon } from "@iconify/react"
import { useState } from "react"

const FilterDate = ({ onSearch, onFilterDate }) => {
    const [dateFrom, setDateFrom] = useState("")
    const [dateTo, setDateTo]     = useState("")
    const [search, setSearch]     = useState("")

    const filterDate = (value) => {
        setDateTo(value)
        onFilterDate(dateFrom, value)
    }

    return (
        <div className="flex w-full">
            <div className="flex w-full justify-center flex-col">
                <div className="flex">
                    <span className="text-xs">Tanggal Pengajuan</span>
                </div>
                <div className="flex mt-2 items-center">
                    <div className="flex">
                        <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} className="border border-gray-100 rounded-lg px-3 py-2 text-sm"/>
                    </div>
                    <div className="flex mx-2">
                        <Icon icon="material-symbols:arrow-back-ios-rounded" fontSize={10}/>
                        <Icon icon="material-symbols:arrow-forward-ios-rounded" fontSize={10}/>
                    </div>
                    <div className="flex">
                        <input type="date" value={dateTo} onChange={(e) => filterDate(e.target.value)} className="border border-gray-100 rounded-lg px-3 py-2 text-sm"/>
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-end items-center">
                <div className="flex border border-gray-100 px-4 py-1 rounded-3xl items-center bg-white">
                    <div className="flex ml-1 mr-3" onClick={() => onSearch(search)}>
                        <Icon icon="material-symbols:search-rounded" fontSize={20}/>
                    </div>
                    <div className="flex w-full">
                        <input type="text" placeholder="Search ..." onChange={(e) => setSearch(e.target.value)} value={search} className="px-4 py-2  text-sm"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterDate