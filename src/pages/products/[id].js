import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const ProductPage = ({ product }) => {
  const router = useRouter();
  const handleDelete = async (id) => {
    try {
      await axios.delete("/api/products/" + id);
      router.push("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <Layout>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>

      <button
        className="bg-red-600 hover:bg-red-400 text-white rounded px-3 py-2"
        onClick={() => {
          handleDelete(product.id);
        }}
      >
        Delete
      </button>
      <button
        className="bg-gray-600 hover:bg-gray-800 text-white rounded px-5 py-2 ml-2"
        onClick={() => {
          router.push("/products/edit/" + product.id);
        }}
      >
        Edit
      </button>
    </Layout>
  );
};

export const getServerSideProps = async (ctx) => {
  const { data: product } = await axios.get(
    "http://localhost:3000/api/products/" + ctx.query.id
  );

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
