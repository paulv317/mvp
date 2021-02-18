import React, { useState } from 'react';
import moment from 'moment';
import styles from '../styles/Purchase.css';

function Purchase(props) {

  const spending = props.purchases.map((item, index) => {
  return (
    <div className={styles.purchase} key={index}>
        <div className={styles.cost}>
          ${item.cost}
        </div>
        <div className={styles.date}>
          {moment(item.date).format("MMM Do")}
        </div>
    </div>
  )
  })

  return (
    <div className={styles.purchasecontainer}>
      <div className={styles.allpurchases}>
        {spending}
      </div>
      <div>
        <button className={styles.return} onClick={() => {props.return()}}>return</button>
      </div>
    </div>
  )

}

export default Purchase;