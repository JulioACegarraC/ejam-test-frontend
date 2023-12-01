import React from 'react'
import s from './Header.module.css'
import HeaderBenefits from '../header-befits/HeaderBenefits'
import HeaderIcons from '../header-icons/HeaderIcons'

function Header() {

  return (
    <header className= {`${s.header} ${s.textWhite}`}>
        <HeaderBenefits></HeaderBenefits>
        <HeaderIcons></HeaderIcons>
    </header>

  )
}

export default Header
 