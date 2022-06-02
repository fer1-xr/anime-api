import React from 'react'

function Quote({quote}) {
  return (
    <div>
        <div title={quote.anime}>
        {quote.anime}
        </div>


        <blockquote title= {quote.quote} >
        {quote.quote}
        </blockquote>

        <div title={quote.character}>
        {quote.character}
        </div>




    </div>
  )
}

export default Quote