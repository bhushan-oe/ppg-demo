const MoltinGateway = require("@moltin/sdk").gateway;

const Moltin = MoltinGateway({
  client_id: "xplLNGkEAWwR4vX59woUt7ZxW2GIEVWwoO3mUlVU74",
  application: "react-demo-store",
  // client_secret: "NuHsXYRLSOONoav10mfYW6UjG3kZJKUfq2D3zSPeFE"
});

// export const GetProducts = () =>
//   Moltin.Products.With('files, main_images, collections').All();

// export const GetProduct = ID => Moltin.Products.Get(ID);

// export const GetCategories = () => Moltin.Categories.With('products').All();

// export const GetCategory = ID => Moltin.Categories.Get(ID);

// export const GetCollections = () => Moltin.Collections.With('products').All();

// export const GetBrands = () => Moltin.Brands.All();

// export const GetFile = ID => Moltin.Files.Get(ID);

// export const AddCart = (id, quantity) => Moltin.Cart().AddProduct(id, quantity);

// export const UpdateCartPlus = (ID, quantity) =>
//   Moltin.Cart().UpdateItemQuantity(ID, quantity + 1);

// export const UpdateCartMinus = (ID, quantity) =>
//   Moltin.Cart().UpdateItemQuantity(ID, quantity - 1);

// export const UpdateCart = (ID, quantity) =>
//   Moltin.Cart().UpdateItemQuantity(ID, quantity);

// export const GetCartItems = () => Moltin.Cart().Items();

// export const Checkout = data => Moltin.Cart().Checkout(data);

export const GetOrder = ID => Moltin.Orders.Get(ID);

// export const OrderPay = (ID, data) => Moltin.Orders.Payment(ID, data);

// export const DeleteCart = () => Moltin.Cart().Delete();

export const GetCustomerDetails = (ID, Token) =>
  Moltin.Customers.Get(ID, Token);

export const GetCustomerToken = (email, password) =>
  Moltin.Customers.Token(email, password);

export const GetFlowEntries = (slug) => Moltin.Flows.GetEntries(slug);

export const GetFlowEntry = (slug, entry) => Moltin.Flows.GetEntry(slug, entry);

//export const GetCustomerDetails2 = (data) => Moltin.Addresses.All(data);
