import { ProductTag } from "./ProductTag";


export enum TagTypeEnum {
    Season = 'Season',     
    EventType = 'EventType', 
    Style = 'Style',        
    Taste = 'Taste',        
    Kashrut = 'Kashrut',    
    Audience = 'Audience'  
}

export class Tag {
    tagId: number;
    categoryId: number;
    name: string;
    tagType: TagTypeEnum;
    productTags: ProductTag[];

    constructor(
        tagId: number,
        categoryId: number,
        name: string,
        tagType: TagTypeEnum,
        productTags: ProductTag[] = []
    ) {
        this.tagId = tagId;
        this.categoryId = categoryId;
        this.name = name;
        this.tagType = tagType;
        this.productTags = productTags;
    }
}

export const TagTypeEnumHebrew: Record<TagTypeEnum, string> = {
    [TagTypeEnum.Season]: 'עונה',
    [TagTypeEnum.EventType]: 'סוג אירוע',
    [TagTypeEnum.Style]: 'סגנון',
    [TagTypeEnum.Taste]: 'טעם',
    [TagTypeEnum.Kashrut]: 'כשרות',
    [TagTypeEnum.Audience]: 'קהל יעד'
};
