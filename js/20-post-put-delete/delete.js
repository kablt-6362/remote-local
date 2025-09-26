import axios from "axios";

async function deleteProduct() {
  const URL = "https://dummyjson.com/products/1";
  const config = {
    method: "delete",
    url: URL,
  };
  const response = await axios(config);
  const data = response["data"];
  console.log(data);
}
deleteProduct();
