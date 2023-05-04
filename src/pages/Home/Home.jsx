import React from 'react';
import css from './Home.module.css';
import {Triangle} from 'react-loader-spinner'
const HomePage = () => {
  return (
    <div className={css.box}>
        <Triangle
  height="80"
  width="80"
  color="#D6BCFA"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
/>
        <div className={css.div}>
       <h2 className={css.title}>
       Greetings, traveler 
      </h2>
      <h3 className={css.text}>
        Log in or register to use a contact list
      </h3>
      <h3 className={css.text}>
        Have Fun!
      </h3>
        </div>
    </div>
  )
}
export default HomePage;