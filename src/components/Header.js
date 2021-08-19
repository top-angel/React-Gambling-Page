import React from 'react'

import styles from './Header.module.scss'
import CustomButton from './CustomButton'
import jackpot from '../assets/jack_icon.png'
import coinflip from '../assets/sword_icon.png'
import upgrader from '../assets/thunder_icon.png'

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
                        <div className={styles.subleft}>a</div>
                        <div className={styles.submain}>
                            {headerdata.map((data) =>(
                                <HeaderItem key={data.id} weapon={data}/>
                            ))}
                           <div className="hero-btn">
                                <CustomButton buttonStyle="btn--outline" buttonSize="btn--large">
                                get started
                                </CustomButton>
                            </div>
                            <h4>Custom Button #2</h4>
                            <div className="hero-btn">
                                <CustomButton buttonStyle="btn--test" buttonSize="btn--medium">
                                get started
                                </CustomButton>
                            </div>                        
                        </div>
                        <div className={styles.subright}>c</div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Header
