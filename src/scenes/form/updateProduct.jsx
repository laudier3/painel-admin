import { Box, Button, TextField } from "@mui/material";
//import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import api from "../../api/api";
import { toast } from "react-toastify";
import { UlLista } from "./styles";
import { MdDeleteForever } from "react-icons/md";
//import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

// Código necessário para os recursos de acessibilidade
//Modal.setAppElement('#root');

const FormUpdate = () => {
  const [usename, setUserName] = useState("");

  const [dataid, setDataid] = useState([]);
  const [product, setProduct] = useState([]);
  const [categorypr, setCategorypr] = useState([]);
  const [comentariorelation, setComentariorelation] = useState([]);

  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);
  const [frete, setFrete] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [bar_code, setBarcode] = useState([]);
  const [description, setDescription] = useState([]);
  const [url_product, setUrlproduct] = useState([]);
  const [slug0, setSlug0] = useState([]);
  const [slug1, setSlug1] = useState([]);
  const [slug2, setSlug2] = useState([]);
  const [slug3, setSlug3] = useState([]);
  const [slug4, setSlug4] = useState([]);
  const [size0, setSize0] = useState([]);
  const [size1, setSize1] = useState([]);
  const [size2, setSize2] = useState([]);
  const [size3, setSize3] = useState([]);
  const [size4, setSize4] = useState([]);
  const [color0, setColor0] = useState([]);
  const [color1, setColor1] = useState([]);
  const [color2, setColor2] = useState([]);
  const [color3, setColor3] = useState([]);
  const [color4, setColor4] = useState([]);
  const [image0, setImage0] = useState([]);
  const [image1, setImage1] = useState([]);
  const [image2, setImage2] = useState([]);
  const [image3, setImage3] = useState([]);
  const [image4, setImage4] = useState([]);
  const [video, setVideo] = useState([]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    (async () => {
      const req = await api.get("/product");
      const res = await req.data;
      //console.log(res.data)
      setProduct(res);
    })();
  }, []);

  //console.log(product)

  useEffect(() => {
    (async () => {
      const req = await api.get("/categorypr");
      const res = await req.data;
      //console.log(res.data)
      setCategorypr(res);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const req = await api.get("/comentariorelation");
      const res = await req.data;
      //console.log(res.data)
      setComentariorelation(res);
    })();
  }, []);

  const handleCompactar = (e) => {
    //console.log(e)
    const filterProduct = product.filter((reqProduct) => reqProduct.id === e);
    const listProduct = { ...filterProduct[0] };

    //const barConvert = JSON.stringify(listProduct.bar_code)

    setDataid(listProduct.id);

    setImage0(listProduct.image[0]);
    setImage1(listProduct.image[1]);
    setImage2(listProduct.image[2]);
    setImage3(listProduct.image[3]);
    setImage4(listProduct.image[4]);
    setVideo(listProduct.image[5]);

    setColor0(listProduct.color[0]);
    setColor1(listProduct.color[1]);
    setColor2(listProduct.color[2]);
    setColor3(listProduct.color[3]);
    setColor4(listProduct.color[4]);

    setSize0(listProduct.size[0]);
    setSize1(listProduct.size[1]);
    setSize2(listProduct.size[2]);
    setSize3(listProduct.size[3]);
    setSize4(listProduct.size[4]);

    setSlug0(listProduct.slug[0]);
    setSlug1(listProduct.slug[1]);
    setSlug2(listProduct.slug[2]);
    setSlug3(listProduct.slug[3]);
    setSlug4(listProduct.slug[4]);

    setName(listProduct.name);
    setPrice(listProduct.price);
    setFrete(listProduct.frete);
    setDescription(listProduct.description);
    setQuantity(listProduct.quantity);
    setBarcode(listProduct.bar_code);
    setUrlproduct(listProduct.url_product);

    //console.log(listProduct)
  };
  //console.log(size0)

  const handleDelete = async (values) => {
    //values.preventDefault()

    handleClose();

    const filterProduct = categorypr.filter(
      (reqProduct) => reqProduct.id_product === values
    );
    const filterComentariorelation = comentariorelation.filter(
      (reqProduct) => reqProduct.id_product === values
    );
    //comentariorelation

    console.log(filterProduct[0]);
    //console.log(filterComentariorelation[0].id)
    //console.log(filterComentariorelation[1].id)
    //console.log(filterComentariorelation[2].id)

    if (filterProduct[0]) {
      await api
        .delete(`/categoryrelations/${filterProduct[0].id}`)
        .then((res) => {
          toast.success(`A relação foi deletado com sucesso!`);
          //window.location.reload()
          //console.log(res.data.id, categoryid.id)
        })
        .catch((error) => {
          toast.error(
            `Houve um erro ao cadastra o produto, referente a: ${error}`
          );
          console.log(error);
        });
    }

    if (filterComentariorelation) {
      await api
        .delete(`/comentariorelation/${filterComentariorelation[0].id}`)
        .then((res) => {
          //toast.success(`A relação foi deletado com sucesso!`)
          //window.location.reload()
          //console.log(res.data.id, categoryid.id)
        });
      await api
        .delete(`/comentariorelation/${filterComentariorelation[1].id}`)
        .then((res) => {
          //toast.success(`A relação foi deletado com sucesso!`)
          //window.location.reload()
          //console.log(res.data.id, categoryid.id)
        });
      await api
        .delete(`/comentariorelation/${filterComentariorelation[2].id}`)
        .then((res) => {
          //toast.success(`A relação foi deletado com sucesso!`)
          //window.location.reload()
          //console.log(res.data.id, categoryid.id)
        })
        .catch((error) => {
          toast.error(
            `Houve um erro ao cadastra o produto, referente a: ${error}`
          );
          console.log(error);
        });
    }

    await api
      .delete(`/product/${values}`)
      .then((res) => {
        toast.success(`O produto foi deletado com sucesso!`);
        window.location.reload();
        //console.log(res.data.id, categoryid.id)
      })
      .catch((error) => {
        toast.error(`Houve um erro ao dleta o produto, referente a: ${error}`);
        console.log(error);
      });

    //console.log(CreteUser[0])
  };

  const handleFormSubmit = async (values) => {
    values.preventDefault();

    const productPost = {
      id: dataid,
      name: name,
      price: price,
      frete: frete,
      quantity: quantity,
      description: description,
      url_product: url_product,
      bar_code: bar_code,
      slug: [slug0, slug1, slug2, slug3, slug4],
      size: [size0, size1, size2, size3, size4],
      color: [color0, color1, color2, color3, color4],
      image: [image0, image1, image2, image3, image4, video],
    };

    //console.log(productPost)

    await api
      .put("/product", productPost)
      .then((res) => {
        toast.success(`O produto foi atualizado com sucesso!`);
        setTimeout(() => {
          //window.location.reload()
        }, 3000);
        //console.log(res.data.id, categoryid.id)
      })
      .catch((error) => {
        toast.error(
          `Houve um erro ao cadastra o produto, referente a: ${error}`
        );
        console.log(error);
      });

    //console.log(data)
  };

  const filterDesc = product.filter(
    (listproducts) => listproducts.id === usename
  );
  //console.log(filterDesc)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Box m="20px">
        <Header
          title="ATUALIZE UM PRODUTO"
          subtitle="Atualize um produto aqui"
        />

        <UlLista></UlLista>
        <form onSubmit={handleFormSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          >
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="ID"
              name="id"
              value={dataid}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Nome"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ gridColumn: "span 2" }}
            />

            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Frete"
              name="frete"
              value={frete}
              onChange={(e) => setFrete(e.target.value)}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Slug1"
              name="slug1"
              value={slug0}
              onChange={(e) => setSlug0(e.target.value)}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Slug2"
              name="slug2"
              value={slug1}
              onChange={(e) => setSlug1(e.target.value)}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Slug3"
              name="slug3"
              value={slug2}
              onChange={(e) => setSlug2(e.target.value)}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Slug4"
              name="slug4"
              value={slug3}
              onChange={(e) => setSlug3(e.target.value)}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Slug5"
              name="slug5"
              value={slug4}
              onChange={(e) => setSlug4(e.target.value)}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Quantity"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="bar_code"
              name="bar_code"
              value={bar_code}
              onChange={(e) => setBarcode(e.target.value)}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Size1"
              name="size1"
              value={size0}
              onChange={(e) => setSize0(e.target.value)}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Size2"
              name="size2"
              value={size1}
              onChange={(e) => setSize1(e.target.value)}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Size3"
              name="size3"
              value={size2}
              onChange={(e) => setSize2(e.target.value)}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Size4"
              name="size4"
              value={size3}
              onChange={(e) => setSize3(e.target.value)}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Size5"
              name="size5"
              value={size4}
              onChange={(e) => setSize4(e.target.value)}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="color1"
              name="color1"
              value={color0}
              onChange={(e) => setColor0(e.target.value)}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="color2"
              name="color2"
              value={color1}
              onChange={(e) => setColor1(e.target.value)}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="color3"
              name="color3"
              value={color2}
              onChange={(e) => setColor2(e.target.value)}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="color4"
              name="color4"
              value={color3}
              onChange={(e) => setColor3(e.target.value)}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="color5"
              name="color5"
              value={color4}
              onChange={(e) => setColor4(e.target.value)}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Image0"
              name="image0"
              value={image0}
              onChange={(e) => setImage0(e.target.value)}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Image1"
              name="image1"
              value={image1}
              onChange={(e) => setImage1(e.target.value)}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="image2"
              name="image2"
              value={image2}
              onChange={(e) => setImage2(e.target.value)}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Image3"
              name="image3"
              value={image3}
              onChange={(e) => setImage3(e.target.value)}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Image4"
              name="image4"
              value={image4}
              onChange={(e) => setImage4(e.target.value)}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Video"
              name="video"
              value={video}
              onChange={(e) => setVideo(e.target.value)}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Url_produc"
              name="url_produc"
              value={url_product}
              onChange={(e) => setUrlproduct(e.target.value)}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              sx={{ gridColumn: "span 4" }}
            />
          </Box>
          <Box display="flex" justifyContent="end" mt="20px">
            <Button type="submit" color="secondary" variant="contained">
              Atualiza Produto
            </Button>
          </Box>
        </form>
      </Box>
      <b></b><b></b>
      <UlLista>
          {product.map((pro) => {
            const { id, image, name, price } = pro;

            return (
              <div className="listagem" key={id}>
                <button onClick={() => handleCompactar(id) || scrollToTop()}>
                  <img src={image[0]} alt="img" className="" />
                  <p>{name}</p>
                </button>
                <div>
                  <h4>$R {price},00</h4>
                  <Button variant="primary" onClick={handleShow}>
                    <h1>
                      <MdDeleteForever onClick={() => setUserName(id)} />
                    </h1>
                  </Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ color: "red", fontSize: 25 }}>
                      Tem certeza que deja apaga esse produto?
                      {filterDesc.map((res) => (
                        <div>
                          <img
                            src={res.image[0]}
                            alt="img"
                            style={{
                              width: 150,
                              height: 150,
                              display: "flex",
                              margin: "auto",
                            }}
                          />
                          <h3 style={{ color: "black" }}>{res.name}</h3>
                        </div>
                      ))}
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        className="btn btn-secondary"
                        onClick={handleClose}
                      >
                        Não
                      </Button>
                      <Button
                        className="btn btn-primary"
                        onClick={() => handleDelete(usename)}
                      >
                        Sim
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
                <br />
              </div>
            );
          })}
          <br />
          <br />
          <br />
        </UlLista>
    </>
  );
};

export default FormUpdate;
