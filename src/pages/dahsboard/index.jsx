import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import DataTable from 'react-data-table-component';
import Components from "../../components"
import dataDummy from "../../adapters";

const Dashboard = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])

    useEffect(() => {
        const findNumber = localStorage.getItem("phoneNumber")
        if(findNumber === null) {
            navigate("/")
        }

        setData(dataDummy)
    }, [])

    const columns = [
        {
            name: 'Tanggal Pengajuan',
            selector: row => row.tanggal_pengajuan,
        },
        {
            name: 'ID karyawan',
            selector: row => row.id_karyawan,
        },
        {
            name: 'Nama karyawan',
            selector: row => row.nama_karyawan,
        },
        {
            name: 'Jabatan',
            selector: row => row.jabatan,
        },
        {
            name: 'Tanggal mulai bekerja',
            selector: row => row.tanngal_mulai_kerja,
        },
        {
            name: 'Gaji (Rp)',
            selector: row => row.gaji,
        },
        {
            name: 'Permintaan (Rp)',
            selector: row => row.permintaan,
        },
        {
            name: 'Biaya layanan (Rp)',
            selector: row => row.biaya_layanan,
        },
        {
            name: 'Pembayaran (Rp)',
            selector: row => row.pembayaran,
        },
        {
            name: 'Status',
            selector: row => row.status,
        },
        {
            name: 'Status date',
            selector: row => row.tanggal_status,
        },
        {
            name: 'Manager HR',
            selector: row => row.manager_hr,
        },
    ];

    const filterDate = (date1, date2) => {
        if(date1 !== "" && date2 !== ""){
            let dataFilterDate = []
            for(const i in dataDummy) {
                if(dataDummy[i].tanggal_pengajuan.toLowerCase().indexOf(date1.toLowerCase()) !== -1 || dataDummy[i].tanggal_pengajuan.toLowerCase().indexOf(date2.toLowerCase()) !== -1) {
                    dataFilterDate.push(dataDummy[i])
                }
            }
            setData(dataFilterDate)

        } else {
            alert("Please fill date from and date to !")

        }
    }

    const search = (value) => {
        if(value !== "") {
            let dataSearch = []
            for(const i in dataDummy) {
                if(dataDummy[i].tanggal_pengajuan.toLowerCase().indexOf(value.toLowerCase()) !== -1 || dataDummy[i].id_karyawan.toLowerCase().indexOf(value.toLowerCase()) !== -1 || dataDummy[i].nama_karyawan.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
                    dataSearch.push(dataDummy[i])
                }
            }
            setData(dataSearch)

        } else {
            alert("Please add keyword !")
        }
    }

    return (
        <div className="flex flex-col px-10 bg-gray-200 py-10 h-full">
            <div className="flex my-5">
                <span className="text-2xl">Riwayat pengajuan</span>
            </div>
            <Components.FilterDate onSearch={search} onFilterDate={filterDate}/>
            <div className="flex bg-white p-8 mt-5 flex-col">
                <DataTable pagination columns={columns} data={data}/>
            </div>
            <div className="flex">
                <div className="flex">

                </div>
            </div>
        </div>
    )
}

export default Dashboard