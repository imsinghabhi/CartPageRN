import { ImageSourcePropType } from "react-native";

export interface CartItemProps {
    image: ImageSourcePropType;
    name: string;
    subtext: string;
    price: number;
    onRemove: () => void;
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
  }