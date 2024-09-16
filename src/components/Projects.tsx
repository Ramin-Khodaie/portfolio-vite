import { useEffect, useState } from 'react'
import Project from './Project'


function Projects() {

    const [state, setState] = useState([])

    useEffect(() => {
        const fetchDate = async () => {
            const response = await fetch('http://localhost:8000/projects')
            const data = await response.json()
            setState(data)
        }
        fetchDate()
    }, [])
    console.log("🚀 ~ file: Projects.tsx:16 ~ useEffect ~ projects:", state)
    return (
        <section className="px-16 py-4 max-w-[1200px] m-auto">
            <h2 className='text-3xl mb-20'>Projects I'm Proud of</h2>
            {
                state?.map((project, i) => (
                    <Project key={i} project={project} isReversed={i%2!==0}/>
                ))
            }
        </section>


    )
}

export default Projects

