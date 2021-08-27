import React from 'react'
import { Nav, NavLink, NavBtn, NavBtnCont, NavMenu } from './NavbarElements'

const Navbar = ({ user, isParent, handleLogOut }) => {


    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>ChoresApp</h1>
                </NavLink>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    {isParent &&
                        <>
                        <NavLink to="/new-chore" activeStyle>
                            Add New Chore
                        </NavLink>
                        <NavLink to="/signup" activeStyle>
                            Add New Member
                        </NavLink>
                        </>
                        }
                </NavMenu>
                <NavBtnCont>
                    <NavBtn style={{ visibility: user ? 'visible' : "hidden"}}onClick={handleLogOut}>Log Out</NavBtn>       
                </NavBtnCont>
            </Nav>
        </>
    )
}

export default Navbar
