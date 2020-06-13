import React from 'react';
import Header from './Header';
import Card from './Card';
import random from '../randomnumber.js';

function createCard(contact){
    return(
    <Card id={contact.id} />
    );
}

function App(){
    return(
        <div>
            <Header />
            <div className="line">
            {random.map(createCard)}
            </div>
        </div>
    );
}

export default App;