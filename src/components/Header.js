import React from 'react'

import styles from './Header.module.scss'
import jackpot from '../assets/jack_icon.png'
import coinflip from '../assets/sword_icon.png'
import upgrader from '../assets/thunder_icon.png'
import money from '../assets/money_icon.png'

const headerdata = [
    {
        id: 1,
        img: `${jackpot}`,
        content: 'JACKPOT'
    },
    {
        id: 2,
        img: `${coinflip}`,
        content: 'COINFLIP'
    },
    {
        id: 3,
        img: `${upgrader}`,
        content: 'UPGRADER'
    }
]

const message = () => {
    console.log("Hello World!") 
}

const Header = () => {

    const HeaderItem = ({weapon}) => (
        <div className={styles.weapon}>
            <img src={weapon.img} alt="weapon"/>
            <div className={styles.weaponTitle}>{weapon.content}</div>
        </div>
    );
    return (
        <div>
            <div className={styles.splitScreen}>
                <div className={styles.leftPane}></div>
                <div className={styles.rightPane}>
                    <div className={styles.mainPane}>
                        <div className={styles.subleft}></div>
                        <div className={styles.submain}>
                            {headerdata.map((data) =>(
                                <HeaderItem key={data.id} weapon={data}/>
                            ))}
                            <div>
                                <button className={styles.moneyBtn} onClick={message}><img src={money} alt="money"/>320.00</button>
                                <button className={styles.depositBtn} onClick={message}>DEPOSIT</button>
                            </div>
                                          
                        </div>
                        <div className={styles.subright}></div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Header
