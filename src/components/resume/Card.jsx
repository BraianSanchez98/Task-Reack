import React from 'react'

const Card = (props) => {
  return (
    <div className="timeline__item">
        <p className='timeline__date'> { props.date } </p>
        <h3 className="timeline__title">  { props.title } </h3>
        <p className="timeline__text"> { props.desc } </p>
    </div>
  )
}

export default Card