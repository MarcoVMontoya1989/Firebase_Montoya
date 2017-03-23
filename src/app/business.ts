export interface Business{
    //recordatorio el simbolo ? implica que no es necesario tener una información
    $key?: string;
    category:string;
    company?: string;
    description?: string;
    email?: string;
    phone?: string;
    state?: string;
    street_address?: string;
    years_in_business?: string;
    zipcode?: string;
}