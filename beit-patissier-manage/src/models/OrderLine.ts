
export class OrderLine {
    OrderLineId: number;
    OrderId: number;
    ProductId: number;
    ProductName: string;
    Quantity: number;
    UnitPrice: number;
    LineTotal: number;

    constructor(
        OrderLineId: number,
        OrderId: number,
        ProductId: number,
        ProductName: string,
        Quantity: number,
        UnitPrice: number,
        LineTotal: number
    ) {
        this.OrderLineId = OrderLineId;
        this.OrderId = OrderId;
        this.ProductId = ProductId;
        this.ProductName = ProductName;
        this.Quantity = Quantity;
        this.UnitPrice = UnitPrice;
        this.LineTotal = LineTotal;
    }
}
