import { Heading } from '../common/Heading'
import {contact} from "../data/Contact_Data"

export const Contact = () => {
  return (
    <>
    <section className='contact'>
      <div className="container">
        <Heading title="Contact me" />
        <div className="content">
              {contact.map((item,i)=>{
                  return (                   
                      <div className={`box ${item.url ? "link" : ""}`} key={i} data-aos="flip-right">
                          <i>{item.icon}</i>
                          {!item.url ? <h3>{item.name}</h3> : "" }
                          {item.url ? <a href={item.url}><h3>{item.name}</h3></a>:<p>{item.detail}</p>}
                          
                      </div>
                  );
              }
              )}
        </div>
        <button className='primaryBtn' data-aos="fade-up">Download CV</button>
      </div>
    </section>
    </>
  )
}
