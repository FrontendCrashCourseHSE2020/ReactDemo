import React from 'react';
import './App.css';
import {Data, ShopItemComponent} from "./ShopItemComponent";

function App() {
    let objs = [{name: "Yandex.Station"}, {name: "Amazon Echo"}];

    function sendToServer(data: Data) {
        alert(data.name);
    }

    function saveToDatabase(data: Data) {
        console.log(`Data = ${data.name}`);
    }

    return (
        <div>
            <ShopItemComponent elementClickCallback={saveToDatabase} shopItems={objs}/>
        </div>
    );

}

export default App;
