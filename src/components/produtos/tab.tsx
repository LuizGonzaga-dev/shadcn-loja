import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllProducts } from "@/services/products";
import { Product } from "@/types/product";
import { ProductEmpty } from "@/components/produtos/vazio";
import {Item} from "@/components/produtos/item"

type Tab = {
    title: string;
    value: string;
    produtos: Product[]
}

export const ProductsTab = async () => {

    const products = await getAllProducts();

    const tabs: Tab[] = [
        {
            title: "Sushi",
            value: "sushi",
            produtos: products.filter(i => i.category === "sushi")
        },
        {
            title: "Temaki",
            value: "temaki",
            produtos: products.filter(i => i.category === "temaki")
        },
        {
            title: "Combinados",
            value: "pack",
            produtos: products.filter(i => i.category == "pack")
        },
        {
            title: "Bebidas",
            value: "beverage",
            produtos: products.filter(i => i.category === "beverage")
        },
    ]

    return (
        <Tabs defaultValue="sushi">
            <TabsList className="flex">
                {tabs.map((v) => (
                    <TabsTrigger
                        key={v.value}
                        value={v.value}
                        className="flex-1"
                    >
                        {v.title}
                    </TabsTrigger>
                ))}
            </TabsList>

            {tabs.map(i => (
                <TabsContent value={i.value} className="mt-6">

                    {i.produtos.length > 0 &&
                        <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                            {i.produtos.map(p => (
                                <Item
                                    key={p.id}
                                    item={p}
                                ></Item>
                            ))}
                        </div>
                    }

                    {i.produtos.length === 0 && 
                        <ProductEmpty/>
                    }
                </TabsContent>
            ))}
            
        </Tabs>
    );
}