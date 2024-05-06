export interface IProduct{

    id: number;
    name: string;
    price: number;

    createdAt?:Date;
    updatedAt?:Date;
 
   
}


 type createFunction = Pick< IProduct,"name"|"price" >;
 interface updateProduct{
    id:number;
    name ?: string;
    price ?: number;
 };




export interface IserviceProducts{


    createProduct(data:createFunction): IProduct;
    deleteProduct(removingID:number): object;
    updateProduct(updatetingId:number, data:updateProduct):IProduct|string;
    getProducts():IProduct[];
    getOneProduct(IdProduct:number):IProduct|undefined;

}




