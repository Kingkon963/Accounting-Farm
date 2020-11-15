import { useState, useEffect, createRef } from "react"
import Link from 'next/link'

import styles from '../styles/NavBar.module.scss';



function Collapse(props) {
    const refCollapse = createRef()
    const toggleCollapse = () => {
        if(props.isOpen){
            refCollapse.current.style.display = 'block';
        }
        else{
            refCollapse.current.style.display = 'none';
        }
            
    }
    useEffect(() => {
        toggleCollapse();
    }, [props.isOpen])

    return(
        <div className={props.className} ref={refCollapse}>
            {props.children}
        </div>
    )
}


export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isTopBarOpen, setisTopBarOpen] = useState(false);
    const [Height, setHeight] = useState(0);

    const ref = createRef();

    function setBobyPaddingTop(value){
        document.body.style.paddingTop = value+'px';
    }

    useEffect(() => {
        if(ref.current){
            setHeight(ref.current.getBoundingClientRect().bottom - ref.current.getBoundingClientRect().top);
            setBobyPaddingTop(Height);
        }
    }, [Height])

    const toggleNav = () => {
        setIsOpen(!isOpen);
    }
    const toggleTopBar = (e) => {
        
        setisTopBarOpen(!isTopBarOpen);
    }
    return (
         
        <div className={styles.Navbar} ref={ref}>
            <Collapse isOpen={isTopBarOpen} className={styles.navTopBar}>
                <div className={styles.contacts}>
                    <span className={styles.location}>Dhaka-1207, Cant.</span>
                    <a className={styles.phoneNumber} href="tel:01521517533">
                        <span className='fa fa-phone mr-2'></span>
                        01521517533
                    </a>
                </div>
                
            </Collapse>
            <Link href="/">
                <a className={styles.navbarBrand}>TaxAssist</a>
            </Link>
            <div className={styles.btnGroup}>
                <span className={`fa ${isTopBarOpen?'fa-chevron-up':'fa-phone'} ${styles.phoneIcon}`} onClick={toggleTopBar}></span>
                <button className={styles.toggler} onClick={toggleNav}>
                    <span className={`fa ${isOpen ? 'fa-chevron-up' : 'fa-bars'}`}></span>
                </button>
            </div>
            
            <Collapse isOpen={isOpen} className={styles.collapseNav}>
                <ul className={styles.nav}>
                    <li className={styles.navItem}>
                        <Link href='/'>
                            <a className={styles.navLink}>Home</a>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href='/'>
                            <a className={styles.navLink}>Services</a>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href='/aboutus'>
                            <a className={styles.navLink}>About Us</a>
                        </Link>
                    </li>
                </ul>
            </Collapse>
        </div>

    )
}





{/*    <Navbar fixed="top" className={`${styles.Navbar}`} light expand='md' ref={ref}>
            <Link href="/">
                <a className={`${styles.navbarBrand}`}>Healthcare</a>
            </Link>
            <NavbarToggler onClick={toggleNav} className={styles.toggler}>
                <span className='fa fa-bars'></span>
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <div className={styles.navItem}>
                        <Link href="/"><a>Home</a></Link>
                    </div>
                    <div className={styles.navItem}>
                        <Link href="/aboutus"><a>About Us</a></Link>
                    </div>
                    <div className={styles.navItem}>
                        <Link href="/"><a>Testimonials</a></Link>
                    </div>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Services
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Reset
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                <NavbarText>Simple Text</NavbarText>
            </Collapse>
        </Navbar> */}