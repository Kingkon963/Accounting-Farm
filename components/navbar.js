import { useState, useEffect, createRef, useRef } from "react"
import { useRouter } from "next/router"
import Link from 'next/link'
import useResponsiveBreakpoints from '../utils/useResponsiveBreakpoints'
import Collapse from '../utils/collapse'

import styles from '../styles/NavBar.module.scss';


export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isTopBarOpen, setisTopBarOpen] = useState(false);
    const [Height, setHeight] = useState(0);
    const router = useRouter();

    const ref = useRef(null);
    const vw = useResponsiveBreakpoints(ref, [
        { small: 415 },
        { medium: 769 },
        { large: 993 }
    ])


    function setBobyPaddingTop(value){
        document.body.style.paddingTop = value+'px';
    }

    useEffect(() => {
        if(ref.current){
            setHeight(ref.current.getBoundingClientRect().bottom - ref.current.getBoundingClientRect().top);
            document.body.style.paddingTop = Height+'px';
            //if(Height != 0) console.log("Height: "+Height);
        }
    }, [Height])
    useEffect(() => {
        if(vw === 'large') setIsOpen(true);
        else setIsOpen(false);
    }, [vw])

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

            {vw === 'large' && 
                <Collapse isOpen={isOpen} className={styles.collapseNav}>
                <ul className={styles.nav}>
                    <li className={styles.navItem}>
                        <Link href='/'>
                            <a className={`${styles.navLink} ${router.pathname === '/' ? styles.activeLink :''}`}>Home</a>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href='/'>
                            <a className={`${styles.navLink} ${router.pathname === '/services' ? styles.activeLink :''} `}>Services</a>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href='/aboutus'>
                            <a className={`${styles.navLink} ${router.pathname === '/aboutus' ? styles.activeLink :''} `}>About Us</a>
                        </Link>
                    </li>
                </ul>
                </Collapse>
            }

            <div className={styles.btnGroup}>
                <span className={`fa ${isTopBarOpen?'fa-chevron-up':'fa-phone'} ${styles.phoneIcon}`} onClick={toggleTopBar}></span>
                
                {vw !== 'large' && 
                    <button className={styles.toggler} onClick={toggleNav}>
                        <span className={`fa ${isOpen ? 'fa-chevron-up' : 'fa-bars'}`}></span>
                    </button>
                }
            </div>
            
            {vw !== 'large' && 
                <Collapse isOpen={isOpen} className={styles.collapseNav}>
                    <ul className={styles.nav}>
                        <li className={styles.navItem}>
                            <Link href='/'>
                                <a className={`${styles.navLink}`}>Home</a>
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
            }
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