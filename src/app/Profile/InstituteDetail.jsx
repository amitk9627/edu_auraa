import Container from "../../components/Container/Container";
import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import InstituteInfo from "./InstituteInfo/InstituteInfo.jsx";
import Faculty from "./Faculty/Faculty.jsx";
import Courses from "./Courses/Courses.jsx";
import Batches from "./Batches/Batches.jsx";
import Media from "./Media/Media.jsx";
import ServicesOffered from "./ServicesOffered/ServicesOffered.jsx";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      className="w-full"
    >
      {value === index && (
        <Box sx={{ p: 3 }} className=" bg-white rounded-[12px]">
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const InstituteDetail = () => {
  const [indexValue, setIndexValue] = useState(0);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const data = [
    {
      title: "Institute Information",
    },
    {
      title: "Courses",
    },
    {
      title: "Faculty Management",
    },
    {
      title: "Batches",
    },
    {
      title: "Media",
    },
  ];

  return (
    <div className=" mx-auto bg-[#EDEDF3] w-full">
      <Container>
        <div className=" py-5">
          <div className="mb-2">
            <h1 className="text-3xl font-bold ">Profile Setting</h1>
          </div>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Tabs
              orientation="vertical"
              variant="scrollable"
              className="w-[320px] h-fit p-4 bg-white rounded-[12px]  mr-10 sticky"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              TabIndicatorProps={{
                style: {
                  display: "none", // Hides the default blue line
                },
              }}
            >
              {data.map((item, i, arr) => (
                <Tab
                  {...a11yProps(i)}
                  key={i}
                  disableRipple
                  label={
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <h2 style={{ textAlign: "left", flex: 1 }}>
                        {item.title}
                      </h2>
                      {value === i && (
                        <ArrowRightIcon style={{ color: "#7878FF" }} />
                      )}
                    </div>
                  }
                  sx={{
                    fontSize: "16px",
                    fontWeight: 400,
                    textAlign: "left", // Ensures text alignment for the Tab
                    alignItems: "flex-start", // Aligns the content to the start
                    justifyContent: "flex-end", // Ensures proper alignment horizontally
                    color: value === i ? "#7878FF" : "#5E5E5E",
                    paddingLeft: 0.5, // Optional: Remove padding if needed
                    paddingRight: 0.5,
                    borderBottom:
                      i != arr.length - 1 ? "0.5px solid #E5E5E5" : "",
                    "&.Mui-selected": {
                      color: "#7878FF",
                    },
                    textTransform: "capitalize",
                  }}
                />
              ))}
            </Tabs>

            <TabPanel value={value} index={0}>
              <InstituteInfo setValue={setValue} />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Faculty setValue={setValue} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Courses setValue={setValue} />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Batches setValue={setValue} />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Media setValue={setValue} />
            </TabPanel>
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default InstituteDetail;
