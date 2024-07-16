import React, { useState } from "react";
import {
  Grid,
  Select,
  Typography,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";
import PropertyCard from "../components/PropertyCard";

const dummyData = [
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
    title: "Spacious Condo",
    discription: "This is a spacious condo in Toronto",
    category: "Open plots/DTCP/HMDA",
    address: "9012 Yonge Street, Toronto, ON M2N 6K1, Canada",
    landmark: "Nearby Subway Station",
    city: "Toronto",
    state: "Ontario",
    country: "Canada",
    price: 800000,
    area: 1500,
    images: [
      "https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg",
    ],
  },
  {
    title: "Modern Townhouse",
    discription: "This is a modern townhouse in Sydney",
    category: "Residential plots/DTCP/HMDA",
    address: "3456 George Street, Sydney NSW 2000, Australia",
    landmark: "Nearby Beach",
    city: "Sydney",
    state: "New South Wales",
    country: "Australia",
    price: 1200000,
    area: 2000,
    images: [
      "https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg",
    ],
  },
  {
    title: "Rustic Cottage",
    discription: "This is a rustic cottage in Paris",
    category: "Residential plots/DTCP/HMDA",
    address: "7890 Champs-Élysées, Paris 75008, France",
    landmark: "Nearby Eiffel Tower",
    city: "Paris",
    state: "Île-de-France",
    country: "France",
    price: 1000000,
    area: 1800,
    images: [
      "https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg",
    ],
  },
  {
    title: "Seaside Villa",
    discription: "This is a seaside villa in Santorini",
    category: "Farm lands",
    address: "1112 Oia, Santorini 847 02, Greece",
    landmark: "Nearby Beach",
    city: "Santorini",
    state: "South Aegean",
    country: "Greece",
    price: 1500000,
    area: 2500,
    images: [
      "https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg",
    ],
  },
  {
    title: "Mountain Chalet",
    discription: "This is a mountain chalet in Zurich",
    category: "Open plots/DTCP/HMDA",
    address: "1314 Bahnhofstrasse, Zurich 8001, Switzerland",
    landmark: "Nearby Ski Resort",
    city: "Zurich",
    state: "Zurich",
    country: "Switzerland",
    price: 2000000,
    area: 3000,
    images: [
      "https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg",
    ],
  },
  {
    title: "Beachfront House",
    discription: "This is a beachfront house in Miami",
    category: "Residential plots/DTCP/HMDA",
    address: "1516 Ocean Drive, Miami Beach, FL 33139, United States",
    landmark: "Nearby Beach",
    city: "Miami",
    state: "Florida",
    country: "USA",
    price: 1800000,
    area: 2800,
    images: [
      "https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg",
    ],
  },
  {
    title: "Historic Mansion",
    discription: "This is a historic mansion in Rome",
    category: "Farm lands",
    address: "1718 Via dei Fori Imperiali, Rome 00186, Italy",
    landmark: "Nearby Colosseum",
    city: "Rome",
    state: "Lazio",
    country: "Italy",
    price: 3000000,
    area: 4000,
    images: [
      "https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg",
    ],
  },
  {
    title: "Lakefront Cabin",
    discription: "This is a lakefront cabin in Vancouver",
    category: "Open plots/DTCP/HMDA",
    address: "1920 Stanley Park Drive, Vancouver, BC V6G 1Z4, Canada",
    landmark: "Nearby Lake",
    city: "Vancouver",
    state: "British Columbia",
    country: "Canada",
    price: 900000,
    area: 1700,
    images: [
      "https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg",
    ],
  },
];

const Properties = () => {
  const [properties, setProperties] = useState(dummyData);

  const categories = [
    "All",
    "Residential plots/DTCP/HMDA",
    "Open plots/DTCP/HMDA",
    "Farm lands",
  ];

  const onCategoryChange = (category) => {
    if (category === "All") {
      setProperties(dummyData);
    } else {
      setProperties(
        dummyData.filter((property) => property.category === category)
      );
    }
  };

  const onSearch = (string) => {
    setProperties(
      dummyData.filter((property) =>
        property.title.toLowerCase().includes(string.toLowerCase())
      )
    );
  };

  return (
    <Grid container py={2} px={4}>
      <Grid
        item
        container
        xs={12}
        py={2}
        flexDirection={"row"}
        spacing={2}
        alignItems={"center"}
      >
        <Grid item xs>
          <Typography fontSize={28} fontWeight={700}>
            Properties:
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            + Add Property
          </Button>
        </Grid>
        <Grid item>
          <Select
            size="small"
            sx={{ width: "fit-content" }}
            variant="outlined"
            defaultValue="All"
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            {categories.map((category, index) => (
              <MenuItem key={index} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item>
          <TextField
            size="small"
            sx={{ width: "fit-content" }}
            variant="outlined"
            placeholder="Search by title..."
            onChange={(e) => onSearch(e.target.value)}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} container spacing={2} flexDirection={"row"}>
        {properties.map((property, index) => (
          <Grid key={index} item>
            <PropertyCard {...property} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Properties;
