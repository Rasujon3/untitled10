import React, {Component} from 'react';
import {Image} from 'react-native';

class App extends Component {
    render() {
        return (
            <Image
                source={{
                    uri:'https://reactjs.org/logo-og.png',
                method:'POST',
                headers:{
                        Pragma:'no-cathe'
                },
                body:'Your Body goes here'
            }}
            style={{width:400,height:400}}
            />
        );
    }
}

export default App;
