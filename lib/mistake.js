class Definer {
  /** general errors related */
  static general_err1 = "att: something went wrong!";
  static general_err2 = "att: there is no data with that params!";
  static general_err3 = "att: file upload error!";

  /** memeber auth related errors */
  static auth_err1 = "att: mongodb validation is failled!";
  static auth_err2 = "att: jwt token creation error";
  static auth_err3 = "att: no member with that mb_nick!";
  static auth_err4 = "att: your credentials do not match!";
  static auth_err5 = "att: you are not authenticated!";

  /** products related errors */
  static product_err1 = "att: product creation is failled!";

  /** orders related errors */
  static order_err1 = "att: order creation is failled!";
  static order_err2 = "att: order item creation is failled!";
}
module.exports = Definer;
