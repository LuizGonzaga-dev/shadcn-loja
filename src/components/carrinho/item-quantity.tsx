import { Cart } from "@/types/cart"
import { Button } from "../ui/button"
import { MinusIcon, PlusIcon } from "lucide-react"
import { useCartStore } from "@/stores/cart-store"

type Props = {
    cartItem: Cart
}

export const CartItemQuantity = ({cartItem}:Props) => {
    
    const { upSertCartItem } = useCartStore(state => state);
    
    const handlePlusButton = () => {
        upSertCartItem(cartItem.product, 1);
    }

    const handleMinusButton = () => {
        upSertCartItem(cartItem.product, -1);
    }

    return (
        <div className="flex items-center gap-2">
            <Button
                onClick={handlePlusButton}
                variant="outline"
                size="icon"
                className="size-5"
            > <PlusIcon className="size-3"/> </Button>
        
            <div className="text-xs">{cartItem.quantity}</div>
        
            <Button
            onClick={handleMinusButton}
                variant="outline"
                size="icon"
                className="size-5"
            > <MinusIcon className="size-3"/> </Button>
        </div>
    )
}