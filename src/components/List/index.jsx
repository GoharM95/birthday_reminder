import React from "react";
import "./List.css";

// const List = ({ people }) => {
//   return (
//     <>
//       {people.map((person) => {
//         const { id, name, age, image } = person;
//         return (
//           <article key={id} className='person'>
//             <img src={image} alt={name} />
//             <div>
//               <h4>{name}</h4>
//               <p>{age} years</p>
//             </div>
//           </article>
//         );
//       })}
//     </>
//   );
// };

// export default List;

class List extends React.Component {
  render() {
    const { people } = this.props;
    return (
      <>
        {people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <div key={id} className="person">
              <img src={image} alt={name} className="image" />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default List;
