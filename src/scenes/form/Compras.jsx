import { Box } from "@mui/material";
//import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import api from "../../api/api";
import { toast } from "react-toastify";
import { UlLista } from "./stylesCompras";
import { MdDeleteForever } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";

const Compras = () => {
  const [compras, setCompras] = useState([]);

  const quantityComprasRealisadas = compras.map((res) => res.length);

  //console.log(quantityComprasRealisadas.length);

  useEffect(() => {
    (async () => {
      const req = await api.get("/compra");
      const res = await req.data;
      //console.log(res.data)
      setCompras(res);
    })();
  }, []);

  const handleDelete = async (values) => {
    //values.preventDefault()

    await api
      .delete(`/compra/${values}`)
      .then((res) => {
        toast.success(`A compra foi deletado com sucesso!`);
        window.location.reload();
        //console.log(res.data.id, categoryid.id)
      })
      .catch((error) => {
        toast.error(`Houve um erro ao dleta a compra, referente a: ${error}`);
        console.log(error);
      });

    //console.log(CreteUser[0])
  };

  return (
    <>
      <Box m="20px">
        <Header
          title="TODOS OS PRODUTO COMPRADOS E CLIENTES EM QUESTAO"
          subtitle="Lista de Compras dos seus clientes"
        />
        <h1
          style={{
            borderRadius: 50,
            border: "solid 1px",
            width: 60,
            textAlign: "center",
            background: "cyan",
            color: "#000000",
          }}
        >
          {quantityComprasRealisadas.length}
        </h1>
        <UlLista>
          {compras.map((pro) => {
            const {
              id,
              name,
              phone,
              email,
              productImage,
              productName,
              productPrice,
              productQuantity,
              productSize,
              productColor,
              productUrl,
            } = pro;
            return (
              <div className="listagem" key={id}>
                <div className="div">
                  <img src={productImage} alt="img" className="" />
                  <p className="p">{productName}</p>
                  <p>$R {productPrice},00</p>
                  <button>
                    <MdDeleteForever
                      style={{
                        fontSize: 25,
                        cursor: "pointer",
                        marginLeft: "-100px",
                        color: "white",
                      }}
                      onClick={() => handleDelete(id)}
                    />
                  </button>
                </div>
                <div className="div2">
                  <b>
                    <strong style={{ color: "green" }}>Cliente: </strong>
                    {name}
                  </b>
                  <b>
                    <strong style={{ color: "green" }}>E-mail: </strong>
                    {email}
                  </b>
                  <b>
                    <strong style={{ color: "green" }}>Phone: </strong>
                    {phone}
                  </b>
                  <b>
                    <strong style={{ color: "green" }}>Quantidade: </strong>
                    {productQuantity}
                  </b>
                  <b>
                    <strong style={{ color: "green" }}>Cor: </strong>
                    {productColor}
                  </b>
                  <b>
                    <strong style={{ color: "green" }}>Tamnho: </strong>
                    {productSize}
                  </b>
                  <b>
                    <strong style={{ color: "green" }}>Url do Produto: </strong>
                    <a
                      style={{ border: "solid 1px", padding: 8 }}
                      href={productUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver Original
                    </a>
                  </b>
                </div>
              </div>
            );
          })}
        </UlLista>
      </Box>
    </>
  );
};

export default Compras;
