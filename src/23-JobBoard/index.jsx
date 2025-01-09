import { useEffect,useState } from "react"
import './index.css'




//https://hacker-news.firebaseio.com/v0/jobstories.json
//https://hacker-news.firebaseio.com/v0/item/{id}.json
const JobBoard = ()=>{
    const [jobId , setJobId] = useState([])
    const [job, setJob] = useState([])
    const  [page, setPage] = useState(0)
    const pageSize = 6
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchJobId = async ()=>{
            const response = await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json')
            const data = await response.json()
            setJobId(data)
        }
        fetchJobId()
      
    },[])

    useEffect(()=>{
        const fetchJobDetail = async()=>{
            const start = page * pageSize
            const end = start + pageSize
            const currentId = jobId.slice(start, end)
            const jobDetail = await Promise.all(
                currentId.map(async (id)=>{
                    const response = await fetch (`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                    const data = await response.json()
                    // console.log(data)
                    return data
                })
            )
            
            //去重
            setJob((prev) => {
                const uniqueJobs = jobDetail.filter(
                  (item) => item && !prev.some((j) => j.id === item.id),
                );
                return [...prev, ...uniqueJobs];
              });
              console.log(job)

        }

     
        if(jobId.length>0){
            fetchJobDetail()
        }
       
    },[page,jobId])

    const nextLoad = ()=>{
        setPage(prev=>prev+1)
    }
    return<div>
    <ul>
      {job.map((item) => {
        return (
          <li style={{ border: "1px solid ,black" }} key={item.id}>
            <h5>{item.title}</h5>
            <span>{item.by}</span>
            <span>
              {" "}
              {item.time
                ? new Date(item.time * 1000).toLocaleString()
                : "未知时间"}
            </span>
          </li>
        );
      })}
    </ul>
    <button onClick={nextLoad}>load more </button>
  </div>
}

export default JobBoard