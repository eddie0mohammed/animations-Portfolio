
import React from 'react';

import styles from './Main.module.css';

import data from './animationData';


class Main extends React.Component{


    renderItems = () => {
        return data.map(elem => {
            return (
                <a href={elem.url} key={elem.id} target="_blank" rel="noopener noreferrer" className={styles.card} style={{ backgroundImage: `url(${elem.img})`}}>

                    <div className={styles.overlay}></div>

                    <h3 className={styles.title}>{elem.name}</h3>
                </a>
            )
        })
    }

    render(){

      

        return (
            <div className={styles.container}>

               
                {this.renderItems()}

            </div>
        )
    }
}

export default Main;