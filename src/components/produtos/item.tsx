"use client"

import { Product } from "@/types/product";
import { Button } from "../ui/button";

type Props = {
    item: Product;
}

export const Item = ({item} : Props) => {

    const handleAddButton = () => {

    }

    return (
        <div>
            <div className="rounded-md overflow-hidden">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-32 object-cover"
                />
            </div>
            <div className="mt-3 flex flex-col gap-2">
                <p className="text-lg">{item.name}</p>
                <p className="text-sm opacity-50">{item.price.toFixed(2)}</p>
                <Button
                    variant="outline"
                    onClick={handleAddButton}
                >Adicionar</Button>
            </div>
        </div>
    );
}