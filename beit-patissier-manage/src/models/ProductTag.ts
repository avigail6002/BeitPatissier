import { Product } from './Product';
import { Tag } from './Tag';

export class ProductTag {
    productId: number;
    product: Product;
    tagId: number;
    tag: Tag;

    constructor(
        productId: number,
        product: Product,
        tagId: number,
        tag: Tag
    ) {
        this.productId = productId;
        this.product = product;
        this.tagId = tagId;
        this.tag = tag;
    }
}
