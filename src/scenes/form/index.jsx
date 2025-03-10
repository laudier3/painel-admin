import { Box, Button, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import api from "../../api/api";
import { toast } from "react-toastify";
import { UlLista } from "./styles";
/*import ImageUploading from 'react-images-uploading';
import { ImCloudUpload } from "react-icons/im";*/

const Form = () => {
  /*const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };*/

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [name, setName] = useState("");
  const [slug0, setSlug0] = useState("");
  const [slug1, setSlug1] = useState("");
  const [slug2, setSlug2] = useState("");
  const [slug3, setSlug3] = useState("");
  const [slug4, setSlug4] = useState("");
  const [slug5, setSlug5] = useState("");
  const [price, setPrice] = useState("");
  const [Frete, setFrete] = useState("");
  const [size0, setSize0] = useState("");
  const [size1, setSize1] = useState("");
  const [size2, setSize2] = useState("");
  const [size3, setSize3] = useState("");
  const [size4, setSize4] = useState("");
  const [size5, setSize5] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [barcode, setBarcode] = useState("");
  const [category, setCategory] = useState([]);
  const [categoryid, setCategoryid] = useState([]);
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");
  const [image6, setImage6] = useState("");
  const [video, setVideo] = useState("");
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");
  const [color4, setColor4] = useState("");
  const [color5, setColor5] = useState("");
  const [urlProduct, setUrlproduct] = useState("");

  //stete comentarios
  const [imgName, setImgName] = useState("");
  const [nameUser, setNameUser] = useState("");
  const [imageUser0, setImageUser0] = useState("");
  const [imageUser1, setImageUser1] = useState("");
  const [imageUser2, setImageUser2] = useState("");
  const [imageUser3, setImageUser3] = useState("");
  const [msgUser, setMessage] = useState("");
  const [estrela, setEstrela] = useState("");

  const [imgName1, setImgName01] = useState("");
  const [nameUser1, setNameUser01] = useState("");
  const [image1User01, setImage1User01] = useState("");
  const [image2User01, setImage2User01] = useState("");
  const [image3User01, setImage3User01] = useState("");
  const [image4User01, setImage4User01] = useState("");
  const [msgUser1, setMessage1] = useState("");
  const [estrela1, setEstrela1] = useState("");

  const [imgName2, setImgName02] = useState("");
  const [nameUser2, setNameUser02] = useState("");
  const [image1User02, setImage1User02] = useState("");
  const [image2User02, setImage2User02] = useState("");
  const [image3User02, setImage3User02] = useState("");
  const [image4User02, setImage4User02] = useState("");
  const [msgUser02, setMessage02] = useState("");
  const [estrela02, setEstrela02] = useState("");

  //console.log(categoryid.id)

  useEffect(() => {
    (async () => {
      const req = await api.get("/category");
      const res = await req.data;
      //console.log(res.data)
      setCategory(res);
    })();
  }, []);
  //Nova atualização
  const handleFormSubmit = async (values) => {
    values.preventDefault();

    const CreateUser = {
      name: name,
      slug: [slug0, slug1, slug2, slug3, slug4, slug5],
      price: price,
      frete: Frete,
      size: [size0, size1, size2, size3, size4, size5],
      quantity: quantity,
      description: description,
      bar_code: barcode,
      url_product: urlProduct,
      image: [image1, image2, image3, image4, image5, image6, video],
      color: [color1, color2, color3, color4, color5],
    };

    await api.post("/product", CreateUser).then((res) => {
      //toast.success(`O produto ${CreateUser.name} foi criado com sucesso!`);
      //console.log(res.data.id, categoryid.id)

      setTimeout(async () => {
        const dataRelations = {
          id_category: `${categoryid.id}`,
          id_product: `${res.data.result.id}`,
        };

        console.log(dataRelations)

        //console.log(dataRelations)

        await api
          .post("/categorypr", dataRelations)
          .then((catego) => {
            console.log(catego.data);
          })
          .catch((error) => {
            toast.error(`Houve um erro ao criar o relacionamento: ${error}`);
            //console.log(error);
          });

        const Comentario = {
          imgName: imgName,
          name: nameUser,
          image: [imageUser0, imageUser1, imageUser2, imageUser3],
          message: msgUser,
          idProduct: res.data.result.id,
          estrela: estrela,
        };

        //console.log(Comentario)

        const Comentario1 = {
          imgName: imgName1,
          name: nameUser1,
          image: [image1User01, image2User01, image3User01, image4User01],
          message: msgUser1,
          idProduct: res.data.result.id,
          estrela: estrela1,
        };

        const Comentario2 = {
          imgName: imgName2,
          name: nameUser2,
          image: [image1User02, image2User02, image3User02, image4User02],
          message: msgUser02,
          idProduct: res.data.result.id,
          estrela: estrela02,
        };
        if (Comentario.name) {
          await api.post("/comentario", Comentario).then((response) => {
            const dataRelations2 = {
              id_comentario: `${response.data.comentario.id}`,
              id_product: `${res.data.result.id}`,
            };

            //console.log(dataRelations...)

            api.post("/comentariorelation", dataRelations2).then((catego) => {
              toast.success(`O relacionamento 1 foi feito!`);
            });
          });
        }
        if (Comentario1.name) {
          await api.post("/comentario", Comentario1).then((response) => {
            const dataRelations2 = {
              id_comentario: `${response.data.comentario.id}`,
              id_product: `${res.data.result.id}`,
            };

            //console.log(dataRelations)

            api.post("/comentariorelation", dataRelations2).then((catego) => {
              toast.success(`O relacionamento 2 foi feito!`);
            });
          });
        }
        if (Comentario2.name) {
          await api.post("/comentario", Comentario2).then((response) => {
            const dataRelations2 = {
              id_comentario: `${response.data.comentario.id}`,
              id_product: `${res.data.result.id}`,
            };

            //console.log(dataRelations)

            api.post("/comentariorelation", dataRelations2).then((catego) => {
              toast.success(`O relacionamento 3 foi feito!`);
            });
          });
        }
      }, 2000);
    });
  };

  const img = localStorage.getItem("img");
  const imgArray = JSON.parse(img);
  const res = img ? imgArray.map((e) => e.data_url) : "";

  //console.log(images)
  //console.log(image1)

  return (
    <>
      <Box m="20px">
        <Header title="CRIAR UM PRODUTO" subtitle="Escolha uma categoria" />
        <div style={{ width: 180 }}>
          {categoryid ? (
            <ul>
              <li
                style={{
                  margin: 10,
                  border: "solid 1px",
                  padding: 10,
                  fontSize: "2.rem",
                  listStyleType: "none",
                  height: 132,
                }}
              >
                <img
                  src={categoryid.image}
                  alt="img"
                  style={{ width: 100, height: 90 }}
                />
                <h5 style={{ fontSize: 20, marginTop: -4 }}>
                  {categoryid.name}
                </h5>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
        <UlLista>
          <ul>
            {category.map((res) => {
              const { id, image, name } = res;
              return (
                <>
                  <li key={id} onClick={() => setCategoryid(res)}>
                    <img src={image} alt="img" style={{width: "100%", height: 70}}/>
                    <h5 style={{fontSize: 16}}>{name}</h5>
                  </li>
                </>
              );
            })}
          </ul>
        </UlLista>

        <form onSubmit={handleFormSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Nome"
              onChange={(e) => setName(e.target.value)}
              name="Nome"
              sx={{ gridColumn: "span 2" }}
            />

            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Bar-code"
              onChange={(e) => setBarcode(e.target.value)}
              name="Bar-code"
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Price"
              onChange={(e) => setPrice(e.target.value)}
              name="Price"
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Frete"
              onChange={(e) => setFrete(e.target.value)}
              name="Frete"
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Size 0"
              onChange={(e) => setSize0(e.target.value)}
              name="Aize"
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Size 1"
              onChange={(e) => setSize1(e.target.value)}
              name="Aize"
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Size 2"
              onChange={(e) => setSize2(e.target.value)}
              name="Aize"
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Size 3"
              onChange={(e) => setSize3(e.target.value)}
              name="Aize"
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Size 4"
              onChange={(e) => setSize4(e.target.value)}
              name="Aize"
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Size 5"
              onChange={(e) => setSize5(e.target.value)}
              name="Aize"
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="quantity"
              onChange={(e) => setQuantity(e.target.value)}
              name="Quantity"
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Description"
              onChange={(e) => setDescription(e.target.value)}
              name="Description"
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Slug0"
              onChange={(e) => setSlug0(e.target.value)}
              name="Slug"
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Slug1"
              onChange={(e) => setSlug1(e.target.value)}
              name="Slug"
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Slug2"
              onChange={(e) => setSlug2(e.target.value)}
              name="Slug"
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Slug3"
              onChange={(e) => setSlug3(e.target.value)}
              name="Slug"
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Slug4"
              onChange={(e) => setSlug4(e.target.value)}
              name="Slug"
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Slug5"
              onChange={(e) => setSlug5(e.target.value)}
              name="Slug"
              sx={{ gridColumn: "span 1" }}
            />

            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Image 1"
              onChange={(e) => setImage1(e ? e.target.value : res[0])}
              name="Image 1"
              sx={{ gridColumn: "span 1" }}
            />

            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="image 2"
              onChange={(e) => setImage2(e ? e.target.value : res[1])}
              name="image 2"
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="image 3"
              onChange={(e) => setImage3(e ? e.target.value : res[2])}
              name="image 3"
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="image 4"
              onChange={(e) => setImage4(e ? e.target.value : res[3])}
              name="image 4"
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="image 5"
              onChange={(e) => setImage5(e ? e.target.value : res[4])}
              name="image 5"
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="image 6"
              onChange={(e) => setImage6(e ? e.target.value : res[5])}
              name="image 6"
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="video"
              onChange={(e) => setVideo(e ? e.target.value : res[5])}
              name="video"
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Color 1"
              onChange={(e) => setColor1(e.target.value)}
              name="Color 1"
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Color 2"
              onChange={(e) => setColor2(e.target.value)}
              name="Color 2"
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Color 3"
              onChange={(e) => setColor3(e.target.value)}
              name="Color 3"
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Color 4"
              onChange={(e) => setColor4(e.target.value)}
              name="Color 4"
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Color 5"
              onChange={(e) => setColor5(e.target.value)}
              name="Color 5"
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="URL do Produto"
              onChange={(e) => setUrlproduct(e.target.value)}
              name="url_product"
              sx={{ gridColumn: "span 3" }}
            />
          </Box>
          <br />
          <h2>Avaliação e comentarios 1</h2>
          <hr />
          <br />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Image Users"
            onChange={(e) => setImgName(e.target.value)}
            name="imgName"
            sx={{ gridColumn: "span 3" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Name User"
            onChange={(e) => setNameUser(e.target.value)}
            name="name"
            sx={{ gridColumn: "span 3" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Image0"
            onChange={(e) => setImageUser0(e.target.value)}
            name="image0"
            sx={{ gridColumn: "span 3" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Image1"
            onChange={(e) => setImageUser1(e.target.value)}
            name="image1"
            sx={{ gridColumn: "span 3" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Image2"
            onChange={(e) => setImageUser2(e.target.value)}
            name="image2"
            sx={{ gridColumn: "span 3" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Image3"
            onChange={(e) => setImageUser3(e.target.value)}
            name="image3"
            sx={{ gridColumn: "span 3" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Message"
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            sx={{ gridColumn: "span 3" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Estrela"
            onChange={(e) => setEstrela(e.target.value)}
            name="estrela"
            sx={{ gridColumn: "span 3" }}
          />
          <br />
          <h2>Avaliação e comentarios 2</h2>
          <hr />
          <br />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Image Users"
            onChange={(e) => setImgName01(e.target.value)}
            name="imgName"
            sx={{ gridColumn: "span 3" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Name User"
            onChange={(e) => setNameUser01(e.target.value)}
            name="name"
            sx={{ gridColumn: "span 3" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Image1"
            onChange={(e) => setImage1User01(e.target.value)}
            name="image1"
            sx={{ gridColumn: "span 3" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Image2"
            onChange={(e) => setImage2User01(e.target.value)}
            name="image2"
            sx={{ gridColumn: "span 3" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Image3"
            onChange={(e) => setImage3User01(e.target.value)}
            name="image3"
            sx={{ gridColumn: "span 3" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Image4"
            onChange={(e) => setImage4User01(e.target.value)}
            name="image4"
            sx={{ gridColumn: "span 3" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Message"
            onChange={(e) => setMessage1(e.target.value)}
            name="message"
            sx={{ gridColumn: "span 3" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Estrela"
            onChange={(e) => setEstrela1(e.target.value)}
            name="estrela"
            sx={{ gridColumn: "span 3" }}
          />
          <br />
          <h2>Avaliação e comentarios 3</h2>
          <hr />
          <br />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Image Users"
            onChange={(e) => setImgName02(e.target.value)}
            name="imgName"
            sx={{ gridColumn: "span 3" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Name User"
            onChange={(e) => setNameUser02(e.target.value)}
            name="name"
            sx={{ gridColumn: "span 3" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Image1"
            onChange={(e) => setImage1User02(e.target.value)}
            name="image1"
            sx={{ gridColumn: "span 3" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Image2"
            onChange={(e) => setImage2User02(e.target.value)}
            name="image2"
            sx={{ gridColumn: "span 3" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Image3"
            onChange={(e) => setImage3User02(e.target.value)}
            name="image3"
            sx={{ gridColumn: "span 3" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Image4"
            onChange={(e) => setImage4User02(e.target.value)}
            name="image4"
            sx={{ gridColumn: "span 3" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Message"
            onChange={(e) => setMessage02(e.target.value)}
            name="message"
            sx={{ gridColumn: "span 3" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Estrela"
            onChange={(e) => setEstrela02(e.target.value)}
            name="estrela"
            sx={{ gridColumn: "span 3" }}
          />
          <Box></Box>
          <Box display="flex" justifyContent="end" mt="20px">
            <Button type="submit" color="secondary" variant="contained">
              Criar Produto
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default Form;
