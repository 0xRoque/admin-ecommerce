import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import ProductForm from "@/components/ProductForm";

function EditProduct() {
  const [productInfo, setProductInfo] = useState(null);
  const router = useRouter();
  const { id } = router.query || {}; // Evita o erro ao desestruturar

  useEffect(() => {
    if (!id) return; // Só faz o pedido quando id estiver disponível
    axios.get("/api/products?id=" + id).then((response) => {
      setProductInfo(response.data);
    });
  }, [id]);

  return (
    <Layout>
      <h1>Edit Product</h1>
      {productInfo && (<ProductForm {...productInfo} />)}
    </Layout>
  );
}

export default EditProduct;
