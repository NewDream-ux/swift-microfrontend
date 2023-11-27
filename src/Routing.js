import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Modules/Home/Home';
import GroupRecords from './Modules/GroupRecords/GroupRecords';
import Landing from './Modules/Landing/Landing';
const Routing = () =>{
    return(
        <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/search' element={<Home />} />
        <Route path='/groupRecords' element={<GroupRecords />} />
        </Routes>
    )
}

export default Routing;

