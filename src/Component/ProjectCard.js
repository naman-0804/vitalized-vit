import {Link} from 'react-router-dom'
import supabase from '../config/supabaseClient'
const Projectcard=({Projects})=>{
    const handleDelete=async()=>{
        const {data,error}=await supabase
        .from('Projects')
        .delete()
        .eq('P_id',Projects.P_id)
        .select()
        if(error){
            console.log(error)
        }
        if(data){
            console.log(data)
        }
    }
    return(
        <div className='Projectcard'>
            <div>
            <h5>Title:</h5>
            <h3>{Projects.Project_Title}</h3>
            <h5>Domain</h5>
            <p>{Projects.Domain}</p>
            <h5>Requirements</h5>
            <p>{Projects.Requirements}</p>
            <h5>P_id</h5>
            <p>{Projects.P_id}</p>
            <h5>Proposed_on</h5>
            <p>{Projects.Proposed_on}</p>
            <h5>Description</h5>
            <p>{Projects.Description}</p>
            <h5>Type_of_Project</h5>
            <p>{Projects.Type_of_Project}</p>
            </div>
            <div className="buttons">
                <Link to={'/'+Projects.P_id}>
                    <i className="material-icons">edit</i>
                </Link>
                <i className="material-icons" onClick={handleDelete}>delete</i>
            </div>
        </div>
    )
}
export default Projectcard