export interface IfElse {
    header: string,
    sub_header: string,
    value: number
  }

  export interface Users{
    id:string,
    picture:string,
    name:string,
    isActive:boolean,
    country:string,
    progress:number,
  }

  export interface Orders{
    id:string,
    name:string,
    product:string,
    delivery_date:Date,
    status:string,
    tracking_no:string,
    shipping:boolean,
  }