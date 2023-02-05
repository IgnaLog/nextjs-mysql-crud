import { pool } from "@/config/db";

export default async function handler(req, res) {
  const saveProduct = async (req, res) => {
    const { name, description, price } = req.body;
    try {
      const [result] = await pool.query("INSERT INTO product SET ?", {
        name,
        description,
        price,
      });
      return res
        .status(200)
        .json({ name, price, description, id: result.insertedId });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  };

  const getProducts = async (req, res) => {
    try {
      const [result] = await pool.query("SELECT * FROM product");
      return res.status(200).json(result);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  };

  switch (req.method) {
    case "GET":
      return await getProducts(req, res);
    case "POST":
      return await saveProduct(req, res);
    default:
      break;
  }
}
