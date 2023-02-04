import { useState } from 'react';

import { columns} from './columns';
import DataTable from './containerTable';
import getUsers from "../../services/api";

function Users(){
    const [ usersCompany1, setUsersCompany1 ] = useState([]);
    const [ usersCompany2, setUsersCompany2 ] = useState([]);
    const [ usersCompany3, setUsersCompany3 ] = useState([]);
    const [ callController, setCallController ] = useState(false);
    const companies = [
        {
            company: "Company1",
            users: usersCompany1,
        },
        {
            company: "Company2",
            users: usersCompany2,
        },
        {
            company: "Company3",
            users: usersCompany3,
        },
    ]
    // Recebendo os dados e armazenando:
    let getUsersAPI = async()=>{
        // Gerando os usuários da primeira empresa:
        await getUsers().then((item)=>{
            setUsersCompany1(usersCompany1=>([ ...usersCompany1, ...item.data ]))
        })

        // Gerando os usuários da segunda empresa:
        await getUsers().then((item)=>{
            setUsersCompany2(usersCompany2=>([ ...usersCompany2, ...item.data ]))
        })

        // Gerando os usuários da terceira empresa:
        await getUsers().then((item)=>{
            setUsersCompany3(usersCompany3=>([ ...usersCompany3, ...item.data ]))
        })
    }

    // Função resposável por controlar a chamada da API:
    if(callController == false){
        getUsersAPI();
        setCallController(true);
    }
    
    return (
        <section className="w-full h-[700px] flex justify-center">
            <div className="w-[90%] h-full flex flex-col">
                <h2 className="w-full text-3xl text-[#ffff00f7] font-bold text-center mt-[40px] mb-[40px] border-b-[1px] pb-[15px] border-b-yellow-400">Companies and Users</h2>
                <div className="w-full flex flex-col">
                    {
                        companies.map((item,index)=>(
                            <DataTable title={item.company} dataList={item.users} columns={columns} key={index} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Users;