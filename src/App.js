import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';



const customers=[{
    'id':1,
    'image':'https://placeimg.com/64/64/any',
    'name':'홍정민',
    'birthday':'900404',
    'gender':'남',
    'job':'대학생'
  },
  {
    'id':2,
    'image':'https://placeimg.com/64/64/any',
    'name':'홍지원',
    'birthday':'930404',
    'gender':'여',
    'job':'대학생'
  }
]


class App extends React.Component{
  render(){
    return(
      <div>
        {
          customers.map(c =>{
            return(
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
      </div>
      
    );
  }
}



export default App;
