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

/*export interface IFilter { 
    productcategory:string;
    filtergroups:IFilterGroup[];
}

export interface IFilterGroup {
    filtergroupdescription: string;
    filteritemsgroup: IFilterItem[];
}

export interface IFilterItem { 
    filter: string;
    filtercriteria: string;
    ischecked: boolean;
}*/
