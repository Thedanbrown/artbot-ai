import React from 'react'


const ImageCard = (props) => {

  return (
    // <div></div>
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
    <img
      className="w-full h-auto object-cover rounded-xl"
      src={props.url}
      alt={props.prompt}
    />
    <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
      <p className="text-white text-sm overflow-y-auto prompt">{props.prompt}</p>

      <div className="mt-5 flex justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <p className="text-white text-sm">{props.prompt}</p>
        </div>
        {/* <button type="button" onClick={() => checkout(_id, photo)} className="outline-none bg-transparent border-none">
          checkout
        </button> */}
      </div>
    </div>
  </div>
  )
}

export default ImageCard