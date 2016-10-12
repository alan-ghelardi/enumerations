import Enum from '../src/enum'

export default class EmployeeType extends Enum {
  computeCommission(amount) {
    return amount * 0.20
  }
}

EmployeeType.values({
  SALES_SUPERVISOR: {
    computeCommission(amount) {
      return super.computeCommission(amount) + 50.00
    }
  }
},

'SHOP_ASSISTANT',

'SALES_PERSON')
