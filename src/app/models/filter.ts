export interface IFilterItem { 
    Filter:string;
    FilterCriteria:string;
    IsChecked:boolean;
}

export interface IFilterGroup {
    FilterGroupDescription:string;
    FilterItemsGroup:IFilterItem[];
}

export interface IFilter { 
    ProductCategory:string;
    FilterGroups:IFilterGroup[];
}