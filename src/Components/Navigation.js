import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navigation() {
    const [showMenu, setShowMenu] = useState(false)

return(
    <nav className="">
        <span className="text-xl">
        <FontAwesomeIcon 
             icon={faBars}
             onClick={() => setShowMenu(true)}
        />

        </span>
        

    </nav>

)

}

export default Navigation