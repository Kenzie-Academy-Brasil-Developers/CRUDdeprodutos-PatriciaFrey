import { IProduct,IserviceProducts } from "./interfaces";

type productData = Pick< IProduct,"name"|"price" >;
interface updateProduct{
   id:number;
   name ?: string;
   price ?: number;
};


class ProductList implements IserviceProducts{
    private productList: IProduct[];
    id = 1;

   constructor( productList: IProduct[] = []){
        this.productList = productList;
   };
   
    createProduct(data:productData): IProduct{
    const now = new Date();

    const newProduct: IProduct = {
        id: this.id,
        ...data,
        createdAt: new Date(),
        updatedAt: now,

    }
    this.productList.push(newProduct);

    this.id++;

    return newProduct;

};
    deleteProduct(removingID:number): object{

        const index = this.productList.findIndex(product=> product.id === removingID);
         if(index !== -1){
            this.productList.splice(index,1);
           return{ message: "Product successfully deleted."} 
         }
         return{ message: " Not found."} 
    };
    updateProduct(updatetingId: number, data: updateProduct){
        const currentProduct = this.productList.find((product) => product.id === updatetingId);

        if(!currentProduct){
            return "Recipe not found.";
        }
        const now = new Date();

        const updateProduct: IProduct = {
            ...currentProduct,
            ...data,
            updatedAt: now
        };

        const index = this.productList.findIndex((product)=> product.id === updatetingId)

        this.productList.splice(index, 1, updateProduct);

        return updateProduct;


    };

    getProducts(): IProduct[] {
        return this.productList;
    };

    getOneProduct(IdProduct:number):IProduct|undefined{
    const OneProduct = this.productList.find((product) => product.id === IdProduct);

    return OneProduct;

    };
}

export const productList = new ProductList();

