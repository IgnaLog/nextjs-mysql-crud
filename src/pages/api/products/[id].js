import { pool } from "@/config/db";

export default async function handler(req, res) {
  const deleteProduct = async (req, res) => {
    try {
      const { id } = req.query;
      await pool.query("DELETE FROM product WHERE id = ?", [id]);
      return res.status(204).json();
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  };

  const getProduct = async (req, res) => {
    try {
      const { id } = req.query;
      const [result] = await pool.query("SELECT * FROM product WHERE id = ?", [
        id,
      ]);
      return res.status(200).json(result[0]);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  };

  const updateProduct = async (req, res) => {
    try {
      const { id } = req.query;
      const { name, description, price } = req.body;
      await pool.query(
        "UPDATE product SET name = ?, description = ?, price = ? WHERE id = ?",
        [name, description, price, id]
      );
      return res.status(204).json();
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  };

  switch (req.method) {
    case "GET":
      return await getProduct(req, res);
    case "DELETE":
      return await deleteProduct(req, res);
    case "PUT":
      return await updateProduct(req, res);
    default:
      break;
  }
}
