import React from 'react';
import Grid from '@material-ui/core/Grid';

function DemocratiseInvestment(props) {
    // let {
    //    src,
    //     buttonText,
    //     type,
    // } = props;

   const handleEventOnClick = () =>{
        props.clickEvent()
    }


    return (
        <div >
            {/* <img src={require('../Image/Vector2.svg').default} alt=""/> */}
            <img src={require('../Image/key.svg').default} alt=""/>
            <img src={require('../Image/lock.svg').default} alt=""/>

            
        </div>
    );
}

export default DemocratiseInvestment;