import React , { useState} from 'react';
import logo from './logo.svg';
import styling from 'styled-components'
import './App.css';

const StyledButton = styling.button`
  background-color: black
`;

const App = () => {
  // //First item is in array is a object e.g. array string, the second is how to add to this item
  // const [shoppingCart, addShoppingToCart] = useState([]);
  // const [shoppingItem, setShoppingItem] = useState('');
  // const [objie, addToObject] = useState({});
  //
  // const onchange = (e) => {
  //   e.preventDefault();
  //   setShoppingItem(e.target.value)
  // }
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Hooks {shoppingCart}
  //       </p>
  //       <input onChange={e => onchange(e)} value={shoppingItem}/>
  //       <StyledButton onClick={() => {
  //         addShoppingToCart([...shoppingCart, shoppingItem]);
  //         setShoppingItem('')
  //       }}>
  //         Add button
  //       </StyledButton>
  //       <button onClick={() => {
  //         addToObject({...objie, hj: 'Lewis'})
  //         addToObject({...objie, name: 'Lewisjnk', lk: 'kbv'})
  //         addToObject({...objie, kl: 'kllkn'})
  //         console.log(objie)
  //       }}>Click Me</button>
  //     </header>
  //   </div>
  // );

  const [listItem, setList] = useState([]);
  const [name, setName] = useState('');

  return(
      <div>
        {listItem.map( (item,index) => (
            <div>
              <p>{index}</p>
              <p style={{size: '340px'}}>{item}</p>
              <button onClick={() => {
              }}>delete</button>
            </div>

        ))}

        <button onClick={() => {
          setList([...listItem,
             name
          ])
        }}>Click Me
        </button>
        <input onChange={(e) => {
          setName(e.target.value)
        }} value={name}/>
      </div>
  )
};

export default App;
