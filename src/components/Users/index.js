import createUser from "../../services/randomUser";
import TableUsers from "./tableUsers";

function Users(){
    let arrayObj = [];

    const handleCreateUser = async()=> {
        let response = await createUser(2);
        let result = response.data.results[0];

        let obj = {
            name: result.name.first,
            email: result.email,
            gender: result.gender,
            city: result.location.city,
            usernam: result.login.username,
            age: result.dob.age
        }
        arrayObj.push(obj);
        
    }
    handleCreateUser()
    return (
        <section className="w-full h-[700px] flex justify-center">
            <div className="w-[80%] h-full flex flex-col">
                <h2 className="w-full text-3xl text-[#ffff00f7] font-bold text-center mt-[40px] mb-[40px]">Users and Companies</h2>
                <TableUsers />
            </div>
        </section>
    )
}

export default Users;