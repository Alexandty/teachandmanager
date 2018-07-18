import React from 'react'
import Banner from 'react-banner'
import 'react-banner/dist/style.css'
import SolicitudVacacionesView from '../Components/SolicitudVacacionesView/SolicitudVacacionesView'

export default props => {
    return (
        <Banner
            logo="TECH AND MANAGER"
            url={window.location.pathname}
            links={[
                { "title": "Example Link", "url": "/example" },
                { "title": "Another", "url": "/another" },
                {
                    "title": "Link w/ Children", "url": "/children", "children": [
                        { "title": "John", "url": "/children/john" },
                        { "title": "Jill", "url": "/children/jill" },
                        { "title": "Jack", "url": "/children/jack" }
                    ]
                }
            ]} />
    )
}