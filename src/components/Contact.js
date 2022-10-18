import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'



const Contact=({cards})=>{
    return(
        <div>
            {
            cards.map((card)=>{
                return(
                    <div  className='ui raised very padded text container segment' style={{marginTop:'80px'}} 
                    key={card.id}>
                        <Link to={`/${card.title}`}  className='ui header'>{card.title}</Link>
                        <p>{card.body}</p>
                        <button className='ui inverted red button'>Delete</button>
                    </div>
                )
                
            })
            }
        </div>
        
    )
}

const mapStateToProps=(state)=>{
    const {cards}=state;
    return{
        cards
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        deleteCard:(id)=>{dispatch({type:'DELETE_CARD', id})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Contact);
