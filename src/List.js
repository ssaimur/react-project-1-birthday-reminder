import React, { useState } from 'react';

const List = ({persons}) => {
  const [person, setPerson] = useState(persons);
  // const removeHandle = () => {
  //   person.filter(vals => )
  // }
  return (
    <>
      {
        persons.map(item => {
          const {id, name, age, image} = item;
          return (
            <article id={id} className="person">
              <img src={image} alt={name}/>
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </article>
          )
        })
      }
    </>
  );
};

export default List;
