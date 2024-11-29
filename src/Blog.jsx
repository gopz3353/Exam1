import React from 'react'

const Blog = () => {
  return (
    <>
    <div>
        <form>
           Blog Name : <input type='text' id='blogname' placeholder='enter blog name here'></input><br></br>
           Description : <input type='text' id='description' placeholder='enter Description here'></input><br></br>
           Author name : <input type='text' id='author' placeholder='enter author here'></input><br>
           </br><br>
           </br>
           <input type = 'submit'></input>

        </form>
    </div>
    </>
  )
}

export default Blog