import supabase from "../config/supabaseClient" 
import { useEffect, useState } from "react" 
//component
import Researchcard from "../Component/ResearchCard"
const Home = () => {
  const [fetchError,setFetchError] = useState(null)
  const [research,setResearches] = useState(null)

  useEffect(() => {
    const fetchResearch = async () => {
      const { data, error } = await supabase
      .from('Research')
      .select()
      if (error) {
        setFetchError('Couldnt fetch researches')
        setResearches(null)
      } else {
        setResearches(data)
        setFetchError(null)
      }
    }
    fetchResearch()
  },[])
  return (
    <div className="page home">
      {fetchError && (<p>{fetchError}</p>)}
      {research && (
       
        <div className='research'>
          <div className="research-grid">
          {research.map(Research => (
            <Researchcard key={Research.id} Research={Research}/>
            ))}
            </div>
      </div>  
    
    )}
  </div>
  )
}
export default Home