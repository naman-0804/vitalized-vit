import {useParams,useNavigate} from 'react-router-dom'
import { useEffect,useState } from 'react'
import supabase from '../config/supabaseClient'

const Update = () => {
  const {id1} =useParams()
  const navigate = useNavigate()
  const [Project_Title,setProject_Title]=useState('')
  const [Domain,setDomain]=useState('')
  const [Requirements,setRequirements]=useState('')
  const [P_id,setP_id]=useState('')
  const [Proposed_on,setProposed_on]=useState('')
  const [Description,setDescription]=useState('')
  const [Type_of_Project,setType_of_Project]=useState('')
  const [formError,setFormError]=useState(null)

  const handleSubmit=async(e)=>{
    e.preventDefault()
    if(!Project_Title || !Domain || !Requirements || !P_id || !Proposed_on || !Description || !Type_of_Project){
      setFormError('All fields are required')
      return
    }
  const {data,error} = await supabase
    .from('Projects')
    .update({Project_Title,Domain,Requirements,P_id,Proposed_on,Description,Type_of_Project})
    .eq('P_id',id1)
    .select()
    if(error){
      console.log(error)
      setFormError('An error occured while updating')
    }
    if(data){
      console.log(data)
      setFormError(null)
      navigate('/')
    }
    
  }
  useEffect(()=>{
    const fetchProject = async () => {
      const {data,error} = await supabase
      .from('Projects')
      .select()
      .eq('P_id',id1)
      .single()
      if(error){
        navigate('/',{replace:true})
      }
      if(data){
        setProject_Title(data.Project_Title)
        setDomain(data.Domain)
        setRequirements(data.Requirements)
        setP_id(data.P_id)
        setProposed_on(data.Proposed_on)
        setDescription(data.Description)
        setType_of_Project(data.Type_of_Project)
        console.log(data)
      }
    }
    fetchProject()
  },[id1,navigate])
  return (
    <div className="page update">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Project Title" value={Project_Title} onChange={(e)=>setProject_Title(e.target.value)}/>
        <input type="text" placeholder="Domain" value={Domain} onChange={(e)=>setDomain(e.target.value)}/>
        <input type="text" placeholder="Requirements" value={Requirements} onChange={(e)=>setRequirements(e.target.value)}/>
        <input type="text" placeholder="P_id" value={P_id} onChange={(e)=>setP_id(e.target.value)}/>
        <input type="text" placeholder="Proposed_on" value={Proposed_on} onChange={(e)=>setProposed_on(e.target.value)}/>
        <input type="text" placeholder="Description" value={Description} onChange={(e)=>setDescription(e.target.value)}/>
        <input type="text" placeholder="Type_of_Project" value={Type_of_Project} onChange={(e)=>setType_of_Project(e.target.value)}/>
        <button>Update</button>
        {formError && <p>{formError}</p>}
      </form>
    </div>
  )
}

export default Update