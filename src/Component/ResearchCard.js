import {Link} from 'react-router-dom'
import supabase from '../config/supabaseClient'
const Researchcard=({Research})=>{
    const handleDelete=async()=>{
        const {data,error}=await supabase
        .from('Research')
        .delete()
        .eq('Research_id',Research.Research_id)
        .select()
        if(error){
            console.log(error)
        }
        if(data){
            console.log(data)
        }
    }
    return(
        <div className='research-card'>
            <div>
            <h3>{Research.Title}</h3>
            <h5>Description</h5>
            <p>{Research.Domain}</p>
            <h5>Requirements</h5>
            <p>{Research.Requirements}</p>
            <h5>References</h5>
            <p>{Research.Reference_Papers}</p>
            <h5>Research_id</h5>
            <p>{Research.Research_id}</p>
            </div>
            <div className="buttons'">
                <Link to={'/'+Research.Research_id}>
                    <i className="material-icons">edit</i>
                </Link>
                <i className="material-icons" onClick={handleDelete}>delete</i>
            </div>
        </div>
    )
}
export default Researchcard