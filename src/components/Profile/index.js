import { acronym, items, userData } from './data';
import { ProfileSigla } from '../ProfileSigla';
import { ProfileItems } from '../ProfileItems';

function Profile(){
    return (
        <section className="w-full min-h-[600px] flex flex-col justify-center items-center mt-[30px]">
            <ProfileSigla sigla={acronym} name={userData.name} email={userData.email} />
            <div className="w-[60%] sm:max-w-[400px] sm:p-[20px] min-h-[200px] bg-[#1f1f1f] rounded-md flex flex-col justify-center items-center">
                {
                    items.map((item, index)=>(
                        <ProfileItems icon={item.icon} title={item.title} key={index} />
                    ))
                }
            </div>
        </section>
    );
}

export default Profile;