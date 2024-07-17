import React from "react";
import { Grid, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import PropertyCard from "../components/PropertyCard";
import ExpertCard from "../components/ExpertCard";
import WorkingSteps from "../components/WorkingSteps";
import { useNavigate } from "react-router-dom";

const heroCarouselData = [
  {
    imageUrl:
      "https://codecanyon8.kreativdev.com/estaty/assets/img/hero/sliders/657438c58e329.jpg",
    title: "Your Trusted Estaty Partner",
    description: "The Best Time To Buy House With Us",
  },
  {
    imageUrl:
      "https://codecanyon8.kreativdev.com/estaty/assets/img/hero/sliders/657438a80c6be.jpg",
    title: "Your Trusted Estaty Partner",
    description: "Buy Land They're Not Making It Anymore",
  },
  {
    imageUrl:
      "https://codecanyon8.kreativdev.com/estaty/assets/img/hero/sliders/657438b470449.jpg",
    title: "Your Trusted Estaty Partner",
    description: "Estaty Services Waiting For You",
  },
];

const categoryData = [
  {
    imageUrl:
      "https://codecanyon8.kreativdev.com/estaty/assets/img/property-category/66669a29099d1.png",
    label: "Residential Plots",
    category: "Residential plots/DTCP/HMDA",
  },
  {
    imageUrl:
      "https://codecanyon8.kreativdev.com/estaty/assets/img/property-category/66669ac0ebf93.png",
    label: "Open Plots",
    category: "Open plots/DTCP/HMDA",
  },
  {
    imageUrl:
      "https://codecanyon8.kreativdev.com/estaty/assets/img/property-category/6667e8eccc476.png",
    label: "Farm Lands",
    category: "Farm lands",
  },
];

const propertyData = [
  {
    title: "Beautiful Home",
    discription: "This is a beautiful home in New York",
    category: "Residential plots/DTCP/HMDA",
    address:
      "2019 Crawford St, Houston, TX 77002, United States Houston, Texas, USA",
    landmark: "Nearby School",
    city: "Houston",
    state: "Texas",
    country: "USA",
    price: 120000,
    area: 2000,
    images: [
      "https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg",
    ],
  },
  {
    title: "Luxury Villa",
    discription: "This is a luxurious villa in Los Angeles",
    category: "Open plots/DTCP/HMDA",
    address: "1234 Beverly Hills, Los Angeles, CA 90210, United States",
    landmark: "Nearby Shopping Mall",
    city: "Los Angeles",
    state: "California",
    country: "USA",
    price: 2500000,
    area: 5000,
    images: [
      "https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg",
    ],
  },
  {
    title: "Cozy Apartment",
    discription: "This is a cozy apartment in London",
    category: "Farm lands",
    address: "5678 Oxford Street, London W1D 1BS, United Kingdom",
    landmark: "Nearby Park",
    city: "London",
    state: "England",
    country: "UK",
    price: 500000,
    area: 1000,
    images: [
      "https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg",
    ],
  },
  {
    title: "Cozy Apartment",
    discription: "This is a cozy apartment in London",
    category: "Farm lands",
    address: "5678 Oxford Street, London W1D 1BS, United Kingdom",
    landmark: "Nearby Park",
    city: "London",
    state: "England",
    country: "UK",
    price: 500000,
    area: 1000,
    images: [
      "https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg",
    ],
  },
];

const expertData = [
  {
    name: "John Doe",
    experience: 5,
    completedProjects: 20,
    location: "New York",
    occupation: "Architect",
    imageUrl:
      "https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg",
  },
  {
    name: "Jane Doe",
    experience: 10,
    completedProjects: 50,
    location: "Los Angeles",
    occupation: "Interior Designer",
    imageUrl:
      "https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg",
  },
  {
    name: "Bob Doe",
    experience: 20,
    completedProjects: 200,
    location: "Paris",
    occupation: "Structural Engineer",
    imageUrl:
      "https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg",
  },
];

const Landing = () => {
  const navigate = useNavigate();
  return (
    <Grid container pb={2} rowSpacing={2}>
      <Grid item xs={12}>
        <Carousel
          interval={3000}
          autoPlay={true}
          transitionTime={2000}
          animationHandler={"fade"}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          stopOnHover={false}
        >
          {heroCarouselData.map((item, index) => (
            <div key={index}>
              <img src={item.imageUrl} />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0,0,0,0.5)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <p style={{ color: "white", fontSize: "2.5vw" }}>
                  {item.title}
                </p>
                <h1 style={{ color: "white", fontSize: "4.5vw" }}>
                  {item.description}
                </h1>
              </div>
            </div>
          ))}
        </Carousel>
      </Grid>
      <Grid item xs={12}>
        <Grid container padding={6} rowSpacing={3} justifyContent={"center"}>
          <Grid item xs={12}>
            <Typography fontSize={32} fontWeight={600} align="center">
              Categories
            </Typography>
          </Grid>
          {categoryData.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              textAlign={"center"}
              onClick={() =>
                navigate("/properties", { state: { category: item.category } })
              }
            >
              <img src={item.imageUrl} alt={item.label} />
              <Typography fontSize={20}>{item.label}</Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          spacing={2}
          rowSpacing={3}
          flexDirection={"row"}
          justifyContent={"space-evenly"}
        >
          <Grid item xs={12}>
            <Typography fontSize={32} fontWeight={600} align="center">
              Properties
            </Typography>
          </Grid>
          {propertyData.map((property, index) => (
            <Grid key={index} item>
              <PropertyCard {...property} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} mt={5}>
        <Grid
          container
          spacing={2}
          rowSpacing={3}
          flexDirection={"row"}
          justifyContent={"space-evenly"}
        >
          <Grid item xs={12}>
            <Typography fontSize={32} fontWeight={600} align="center">
              Vendors
            </Typography>
          </Grid>
          {expertData.map((expert, index) => (
            <Grid key={index} item>
              <ExpertCard {...expert} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} mt={5}>
        <WorkingSteps />
      </Grid>
    </Grid>
  );
};

export default Landing;
