import React from 'react'
import { logo1 } from "../assets";


const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className='flex justify-between items-center w-full mb-28 pt-2'>
        <img src ={logo1} alt="SummarAI logo"
        className="w-72 object-contain"/>

        <button type="button" onClick={() => window.open("")} className="black_btn" >
          GitHub Code
          </button>

      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden"  />
        <span className="dark_blue_gradient" >OpenAI GPT-4</span>
      </h1>
      <h2 className="description" >
      SummarAI leverages the cutting-edge OpenAI GPT-4 technology to provide concise and insightful summaries of articles.At SummarAI, users encounter a seamless experience, effortlessly grasping the essence of lengthy articles with just a few clicks. Experience the future of article summarization with SummarAI. 

      </h2>
    </header>
  )
}

export default Hero