import React from "react";
import "./ShopItemComponent.css"

export interface Data {
    name: string;
}

interface _Props {
    shopItems: Data[];
    elementClickCallback: (data: Data) => void;
}

interface _State {
    text: string;
}

// class Box<T> {
//     value: T;
//
//     constructor(value: T) {
//         this.value = value;
//     }
// }
//
// let numberArray: Array<number> = [1, 2, 3];
//
// class Human {
//     name: string = "";
// }
//
// new Box<number>(5);
// new Box<string>("");
// new Box<Human>(new Human());
//
// class SuperBox extends Box<number> {}
// class SuperBox2<T> extends Box<T> {}

export class ShopItemComponent extends React.Component<_Props, _State> {

    constructor(props: Readonly<_Props> | _Props) {
        super(props);
    }

    render() {
        return (
            this.props.shopItems.map(value => {
                return (
                    <div className={"test"}>
                        <span>{value.name}</span>
                        <button onClick={e => this.props.elementClickCallback(value)}>Buy</button>
                    </div>
                )
            })
        );
    }

}
