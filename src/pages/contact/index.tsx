import { useLocation } from 'react-router-dom'

function Contact() {
  const location = useLocation();

  return (
    <div className={`bg-[--plum] ${location.pathname === '/contact' ? 'h-full flex items-center' : ''}`} >
      <section id='contact' className='text-center w-[400px] my-0 mx-auto py-16 px-0'>
        <h2 className='text-6xl mb-6'>Contact Me</h2>
        <p className='text-xl leading-[40px] mb-6'>I'm always interested in hearing about new teaching opportunities, writing curricula, or instructional
          design
          work.
        </p>
        <p>
          <a href="mailto:pjsofts@gmail.com" className="text-white bg-[--magenta] block px-4 py-2 rounded-[5px]">Email me</a>
        </p>
      </section>
    </div>
  )
}

export default Contact