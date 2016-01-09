import React from 'react';
import SlideList from '../SlideList';
import LoginForm from '../User/LoginForm';
import RegisterForm from '../User/RegisterForm';
import Modal from '../Modal';


export default class PageHome extends React.Component {

  render() {
    //return <LoginForm />
    return (
      <div>
        <SlideList />
      </div>
    );
  }
}


// {
//   name: '',
//   image: {url:'', filter:''},
//   category: '', //number
//   author: '', //number
//   time: '', //number
//   ingredients: [],
//   steps: [
//     {
//       description: '',
//       images: [
//         {url:'', filter:''}
//       ]
//     }
//   ]
// }
