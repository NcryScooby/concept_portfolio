import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

type Props = {
  image: string;
  title: string;
  description: string;
  url: string;
};

const CardMUI = ({ image, title, description, url }: Props) => {
  const goToUrl = () => {
    window.open(url, "_blank");
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          backgroundColor: "#2d333c",
        }}
      >
        <CardActionArea onClick={goToUrl}>
          <CardMedia component="img" height="140" image={image} alt={title} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                color: "#f5f5f5",
                paddingLeft: "8px",
                fontFamily: "Poppins, Arial, sans-serif",
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                color: "#eeeeee",
                fontFamily: "Poppins, Arial, sans-serif",
                fontWeight: "200",
                opacity: "0.5",
              }}
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default CardMUI;
