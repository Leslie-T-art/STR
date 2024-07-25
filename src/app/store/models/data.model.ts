export interface InvoiceModel {
  invoice_no?: any;
  logo_img?: any;
  customer?: any;
  email?: any;
  createDate?: any;
  dueDate?: any;
  invoice_amount?: any;
  status?: any;
  billing_address?: {
    full_name?: any;
    address?: any;
    phone?: any;
    tax?: any;
  };
  shipping_address?: {
    full_name?: any;
    address?: any;
    phone?: any;
    tax?:any;
  };
  products?: Array<[{
    product_name?: any;
    product_details?: any;
    rates?: any;
    quantity?: any;
    amount?: any;
  }]>;
  payment_details?: {
    payment_method?: any;
    card_holder_name?: any;
    card_number?: any;
    total_amount?: any;
  };
  company_details?: {
    legal_registration_no?: any;
    email?: any;
    website?: any;
    contact_no?: any;
  };
  order_summary?: {
    sub_total?: any;
    estimated_tex?: any;
    discount?: any;
    shipping_charge?: any;
    total_amount?: any;
  };
  notes?: any;
  sign_img?: any;
}


// Contact Modal
export interface ContactModel {
  id?: any;
  name?: any;
  designation?: any;
  image?: any;
  avatar?: any;
}
