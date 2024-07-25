export interface OrderModel {
    orderNumber?: any,
    productName?: any;
    customer?: {
        avatar?: any;
        name?: any;
    },
    price?: any,
    orderDate?: any;
    deliveryDate?: any,
    country?: any,
    rating?: any
    status?: any
}