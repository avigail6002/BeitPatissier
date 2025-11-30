
import type { OrderLine } from "./OrderLine";

export class Order {
    OrderId: number;
    OrderDate: Date;
    UserId: number;
    CustumerName: string;
    CustumerEmail: string;
    CustumerPhone: string;
    ShippingAddress: string;
    TotalAmount: number;
    OrderLines: OrderLine[];

    constructor(
        OrderId: number,
        OrderDate: Date,
        UserId: number,
        CustumerName: string,
        CustumerEmail: string,
        CustumerPhone: string,
        ShippingAddress: string,
        OrderLines: OrderLine[],
        TotalAmount: number
    ) {
        this.OrderId = OrderId;
        this.OrderDate = OrderDate;
        this.UserId = UserId;
        this.CustumerName = CustumerName;
        this.CustumerEmail = CustumerEmail;
        this.CustumerPhone = CustumerPhone;
        this.ShippingAddress = ShippingAddress;
        this.OrderLines = OrderLines;
        this.TotalAmount = TotalAmount;
    }
}

export const OrderFieldNamesHebrew: Record<keyof Order, string> = {
    OrderId: 'מספר הזמנה',
    OrderDate: 'תאריך',
    UserId: 'מזהה משתמש',
    CustumerName: 'שם לקוח',
    CustumerEmail: 'מייל',
    CustumerPhone: 'טלפון',
    ShippingAddress: 'כתובת למשלוח',
    TotalAmount: 'סך הזמנה',
    OrderLines: 'שורות הזמנה'
};
