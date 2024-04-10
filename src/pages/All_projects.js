import supabase from "../config/supabaseClient" 
import { useEffect, useState } from "react" 
//component
import Projectcard from "../Component/ProjectCard"
const Home2 = () => {
  const [fetchError,setFetchError] = useState(null)
  const [Projects,setProject] = useState(null)

  useEffect(() => {
    const fetchProject = async () => {
      const { data, error } = await supabase
      .from('Projects')
      .select()
      if (error) {
        setFetchError('Couldnt fetch projects')
        setProject(null)
      } else {
        setProject(data)
        setFetchError(null)
      }
    }
    fetchProject()
  },[])
  return (
    <div className="page home">
      {fetchError && (<p>{fetchError}</p>)}
      {Projects && (
        <div classname='research'>
          <div className="research-grid">
          {Projects.map(Projects => (
            <Projectcard key={Projects.P_id} Projects={Projects}/>
            ))}
            </div>
      </div>  
    )}
  </div>
  )
}
export default Home2