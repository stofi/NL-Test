export type OrderStatus = 'paid' | 'unpaid'

export type Order = {
  orderNumber: number
  date: string
  totalPrice: number
  status: OrderStatus
}


export type Invoice = {
  invoiceNumber: number
  orderNumber: number
  totalPrice: number
}
