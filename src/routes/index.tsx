import {NavigationContainer} from '@react-navigation/native';
import { MyStack } from "./stack.routes";

export function Rotas(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>  
    )
}
