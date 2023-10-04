import { Container, Typography } from "@mui/material";
import { FruitCardCreator } from "../common/FruitCardCreator";
import { SearchBar } from "../common/SearchBar";

export const HomeInit = () => {

    let data = [
        { "name": "Awa", "color": "Morado", "power": "Invisibilidad", "eater": "Bolkar", "type": "Tipopo", "image": "https://drive.google.com/uc?export=view&id=1qVFnMX9QFFMAGTT142PX48T9j8ZyQ-bd", "description_card": "Loren ipsum loren", "description_fruit": "Esta es una fruta magnifica traida del congo Esta es una fruta magnifica traida del congo Esta es una fruta magnifica traida del congo" },
        { "name": "Awa", "color": "Morado", "power": "Invisibilidad", "eater": "Bolkar", "type": "Tipopo", "image": "https://drive.google.com/uc?export=view&id=1qVFnMX9QFFMAGTT142PX48T9j8ZyQ-bd", "description_card": "Loren ipsum loren", "description_fruit": "Esta es una fruta magnifica traida del congo Esta es una fruta magnifica traida del congo Esta es una fruta magnifica traida del congo" },
        { "name": "Awa", "color": "Morado", "power": "Invisibilidad", "eater": "Bolkar", "type": "Tipopo", "image": "https://drive.google.com/uc?export=view&id=1qVFnMX9QFFMAGTT142PX48T9j8ZyQ-bd", "description_card": "Loren ipsum loren", "description_fruit": "Esta es una fruta magnifica traida del congo Esta es una fruta magnifica traida del congo Esta es una fruta magnifica traida del congo" },
        { "name": "Awa", "color": "Morado", "power": "Invisibilidad", "eater": "Bolkar", "type": "Tipopo", "image": "https://drive.google.com/uc?export=view&id=1qVFnMX9QFFMAGTT142PX48T9j8ZyQ-bd", "description_card": "Loren ipsum loren", "description_fruit": "Esta es una fruta magnifica traida del congo Esta es una fruta magnifica traida del congo Esta es una fruta magnifica traida del congo" },
        { "name": "Awa", "color": "Morado", "power": "Invisibilidad", "eater": "Bolkar", "type": "Tipopo", "image": "https://drive.google.com/uc?export=view&id=1qVFnMX9QFFMAGTT142PX48T9j8ZyQ-bd", "description_card": "Loren ipsum loren", "description_fruit": "Esta es una fruta magnifica traida del congo Esta es una fruta magnifica traida del congo Esta es una fruta magnifica traida del congo" },
        { "name": "Awa", "color": "Morado", "power": "Invisibilidad", "eater": "Bolkar", "type": "Tipopo", "image": "https://drive.google.com/uc?export=view&id=1qVFnMX9QFFMAGTT142PX48T9j8ZyQ-bd", "description_card": "Loren ipsum loren", "description_fruit": "Esta es una fruta magnifica traida del congo Esta es una fruta magnifica traida del congo Esta es una fruta magnifica traida del congo" },
        { "name": "Awa", "color": "Morado", "power": "Invisibilidad", "eater": "Bolkar", "type": "Tipopo", "image": "https://drive.google.com/uc?export=view&id=1qVFnMX9QFFMAGTT142PX48T9j8ZyQ-bd", "description_card": "Loren ipsum loren", "description_fruit": "Esta es una fruta magnifica traida del congo Esta es una fruta magnifica traida del congo Esta es una fruta magnifica traida del congo" },
        { "name": "Awa", "color": "Morado", "power": "Invisibilidad", "eater": "Bolkar", "type": "Tipopo", "image": "https://drive.google.com/uc?export=view&id=1qVFnMX9QFFMAGTT142PX48T9j8ZyQ-bd", "description_card": "Loren ipsum loren", "description_fruit": "Esta es una fruta magnifica traida del congo Esta es una fruta magnifica traida del congo Esta es una fruta magnifica traida del congo" },
        { "name": "Awa", "color": "Morado", "power": "Invisibilidad", "eater": "Bolkar", "type": "Tipopo", "image": "https://drive.google.com/uc?export=view&id=1qVFnMX9QFFMAGTT142PX48T9j8ZyQ-bd", "description_card": "Loren ipsum loren", "description_fruit": "Esta es una fruta magnifica traida del congo Esta es una fruta magnifica traida del congo Esta es una fruta magnifica traida del congo" },
        { "name": "Awa", "color": "Morado", "power": "Invisibilidad", "eater": "Bolkar", "type": "Tipopo", "image": "https://drive.google.com/uc?export=view&id=1qVFnMX9QFFMAGTT142PX48T9j8ZyQ-bd", "description_card": "Loren ipsum loren", "description_fruit": "Esta es una fruta magnifica traida del congo Esta es una fruta magnifica traida del congo Esta es una fruta magnifica traida del congo" },
        { "name": "Awa", "color": "Morado", "power": "Invisibilidad", "eater": "Bolkar", "type": "Tipopo", "image": "https://drive.google.com/uc?export=view&id=1qVFnMX9QFFMAGTT142PX48T9j8ZyQ-bd", "description_card": "Loren ipsum loren", "description_fruit": "Esta es una fruta magnifica traida del congo Esta es una fruta magnifica traida del congo Esta es una fruta magnifica traida del congo" },
        { "name": "Awa", "color": "Morado", "power": "Invisibilidad", "eater": "Bolkar", "type": "Tipopo", "image": "https://drive.google.com/uc?export=view&id=1qVFnMX9QFFMAGTT142PX48T9j8ZyQ-bd", "description_card": "Loren ipsum loren", "description_fruit": "Esta es una fruta magnifica traida del congo Esta es una fruta magnifica traida del congo Esta es una fruta magnifica traida del congo" },
        { "name": "Awa", "color": "Morado", "power": "Invisibilidad", "eater": "Bolkar", "type": "Tipopo", "image": "https://drive.google.com/uc?export=view&id=1qVFnMX9QFFMAGTT142PX48T9j8ZyQ-bd", "description_card": "Loren ipsum loren", "description_fruit": "Esta es una fruta magnifica traida del congo Esta es una fruta magnifica traida del congo Esta es una fruta magnifica traida del congo" },
    ]

    return (
        <Container maxWidth="xl">
            <SearchBar/>
            <FruitCardCreator data={data}/>
        </Container>
    );
}; 