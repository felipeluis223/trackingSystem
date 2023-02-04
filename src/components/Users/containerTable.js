import Table from 'rc-table';

function DataTable({ title, dataList, columns }){
    return(
        <div className="w-full min-h-[150px] mt-[20px]">
            <h2 className="text-xl text-[#ffffff] text-center">{title}</h2>
            <div className="w-full min-h-[100px] bg-[#1f1f1f] text-[#C0C0C0] text-left flex justify-center items-center p-[20px] rounded-md">
                {
                    dataList.length > 0 &&(
                        <Table columns={columns} data={dataList}  />
                    )
                }
            </div>
        </div>
    )
}

export default DataTable;