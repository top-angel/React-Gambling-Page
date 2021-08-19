import React from 'react'

import Avatar from '../assets/avatar.png'
import styles from './Sidebar.module.scss'
import mainTagavatar from '../assets/main_tag_avatar.png'
import faceIcon from '../assets/face_icon.png'
import arrowIcon from '../assets/arrow_icon.png'


const dummyData = [
    {
        id: 1,
        img: `${mainTagavatar}`,
        label: 'APCHI:',
        value: 'test'
    },
    {
        id: 2,
        img: `${mainTagavatar}`,
        label: 'APCHI:',
        value: 'test'
    },
    {
        id: 3,
        img: `${mainTagavatar}`,
        label: 'APCHI:',
        value: 'test'
    },
    {
        id: 4,
        img: `${mainTagavatar}`,
        label: 'APCHI:',
        value: 'test'
    },
    {
        id: 5,
        img: `${mainTagavatar}`,
        label: 'APCHI:',
        value: 'test'
    },
    {
        id: 6,
        img: `${mainTagavatar}`,
        label: 'APCHI:',
        value: 'test'
    },
    {
        id: 7,
        img: `${mainTagavatar}`,
        label: 'APCHI:',
        value: 'test'
    }
];

const Sidebar = () => {
    
    const UserInfo = ({item}) => (
        <div className={styles.mainTag}>
            <img src={item.img} alt="Item" />
            <p className={styles.mainLabel}>{item.label}</p>
            <p className={styles.mainValue}>{item.value}</p>
        </div>
    );

    return (
        <div className={styles.sidebarContainer}>
            <div className={styles.avatarWrapper}>
                <img src={Avatar} alt="Avatar" />                
            </div>
            <p className={styles.onlineNumber}><span className={styles.onlineFirst}>3</span> online</p>
            <div className={styles.mainTagfirst}></div>
            <div>
                {dummyData.map((data) => (
                    <UserInfo key={data.id} item={data} />
                ))}
            </div>
            <div className={styles.mainTagbottom}>
                <div className={styles.imgPart}>
                    <img src={faceIcon} alt="FaceIcon"/><br/>
                    <img src={arrowIcon} alt="ArrowIcon"/>  
                </div> 
            </div>
        </div>
    )
}

export default Sidebar
